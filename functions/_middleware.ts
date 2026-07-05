import {
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
} from "../src/i18n/config";
import { resolvePreferredLocale } from "../src/i18n/detection";
import { getLegacyRedirectEntries, getLocalizedHref, getLocalizedPagePath, getMarketingPageKeyByPath } from "../src/i18n/routes";
import {
  getLocaleFromPathname,
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
  const headers = new Headers(response.headers);
  headers.append(
    "Set-Cookie",
    `${LOCALE_COOKIE_NAME}=${locale}; Path=/; Max-Age=${LOCALE_COOKIE_MAX_AGE}; SameSite=Lax`,
  );
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const pathname = normalizePathname(url.pathname);
  const method = context.request.method.toUpperCase();

  if (shouldBypass(pathname, method)) {
    return context.next();
  }

  if (pathname === "/") {
    const locale = resolvePreferredLocale({
      cookieHeader: context.request.headers.get("cookie"),
      acceptLanguageHeader: context.request.headers.get("accept-language"),
    });
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
    // Check if this localized path uses the correct locale-specific segments.
    // For example, /tr/projects/vendilus should redirect to /tr/projeler/vendilus.
    const segments = pathname.split("/").filter(Boolean).slice(1); // strip locale
    const pathWithoutLocale = segments.length > 0 ? "/" + segments.join("/") + "/" : "/";
    const pageKey = getMarketingPageKeyByPath(pathWithoutLocale);
    if (pageKey) {
      const canonicalPath = getLocalizedPagePath(currentLocale, pageKey);
      const normalizedCurrentPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
      if (canonicalPath !== normalizedCurrentPath) {
        return withLocaleCookie(
          Response.redirect(new URL(canonicalPath, url), 301),
          currentLocale,
        );
      }
    }
    const response = await context.next();
    return withLocaleCookie(response, currentLocale);
  }

  const preferredLocale = resolvePreferredLocale({
    cookieHeader: context.request.headers.get("cookie"),
    acceptLanguageHeader: context.request.headers.get("accept-language"),
  });
  const redirectTarget =
    staticRedirects.get(pathname.endsWith("/") ? pathname : `${pathname}/`) ??
    getLocalizedHref(pathname, preferredLocale);

  return withLocaleCookie(
    Response.redirect(new URL(redirectTarget, url), 301),
    preferredLocale,
  );
};
