import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
} from "../src/i18n/config";
import { getLegacyRedirectEntries, getLocalizedHref } from "../src/i18n/routes";
import {
  getLocaleFromPathname,
  getPreferredLocaleFromCookie,
  normalizePathname,
} from "../src/i18n/pathname";

const staticRedirects = new Map(getLegacyRedirectEntries());
const assetPrefixes = [
  "/_astro/",
  "/assets/",
  "/favicon",
  "/robots.txt",
  "/sitemap",
];

function shouldBypass(pathname: string, method: string) {
  return (
    !["GET", "HEAD"].includes(method) ||
    assetPrefixes.some((prefix) => pathname.startsWith(prefix))
  );
}

function withLocaleCookie(response: Response, locale: string) {
  response.headers.append(
    "Set-Cookie",
    `${LOCALE_COOKIE_NAME}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`,
  );
  return response;
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const pathname = normalizePathname(url.pathname);
  const method = context.request.method.toUpperCase();

  if (shouldBypass(pathname, method)) {
    return context.next();
  }

  if (pathname === "/") {
    const locale = getPreferredLocaleFromCookie(
      context.request.headers.get("cookie"),
    );
    return withLocaleCookie(
      Response.redirect(new URL(`/${locale}/`, url), 302),
      locale,
    );
  }

  const currentLocale = getLocaleFromPathname(pathname);
  const isLocalizedRoute = SUPPORTED_LOCALES.some((locale) =>
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (isLocalizedRoute) {
    const response = await context.next();
    return withLocaleCookie(response, currentLocale);
  }

  const redirectTarget =
    staticRedirects.get(pathname.endsWith("/") ? pathname : `${pathname}/`) ??
    getLocalizedHref(pathname, DEFAULT_LOCALE);

  return withLocaleCookie(
    Response.redirect(new URL(redirectTarget, url), 301),
    DEFAULT_LOCALE,
  );
};
