import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE_NAME,
  SUPPORTED_LOCALES,
  isSupportedLocale,
  normalizeLocale,
  type SupportedLocale,
} from "./config";
import {
  BLOG_SEGMENTS,
  DOCS_SEGMENTS,
  SERVICE_SECTION_SEGMENTS,
  getLocalizedBlogIndexPath,
  getLocalizedHref,
  getLocalizedPagePath,
  getMarketingPageKeyByPath,
  joinLocalizedPath,
} from "./routes";
import { getLocalizedBlogPostPath } from "@/data/blogCatalog";
import { getServiceHref, getServiceKeyBySlug } from "@/data/serviceCatalog";

export function normalizePathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  const url = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return url.replace(/\/{2,}/g, "/");
}

export function stripLocalePrefix(pathname: string) {
  const normalized = normalizePathname(pathname);
  const segments = normalized.split("/").filter(Boolean);
  const locale = isSupportedLocale(segments[0] ?? "")
    ? (segments[0] as SupportedLocale)
    : null;

  if (!locale) {
    return {
      locale: null,
      segments,
      pathname: normalized,
    };
  }

  const localizedSegments = segments.slice(1);
  return {
    locale,
    segments: localizedSegments,
    pathname: joinLocalizedPath(...localizedSegments),
  };
}

export function getLocaleFromPathname(pathname: string) {
  return stripLocalePrefix(pathname).locale ?? DEFAULT_LOCALE;
}

export function getPreferredLocaleFromCookie(cookieHeader?: string | null) {
  if (!cookieHeader) {
    return DEFAULT_LOCALE;
  }

  const cookie = cookieHeader
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${LOCALE_COOKIE_NAME}=`));

  if (!cookie) {
    return DEFAULT_LOCALE;
  }

  return normalizeLocale(cookie.split("=")[1]);
}

export function resolveLocaleVariantPath(
  pathname: string,
  targetLocale: SupportedLocale,
) {
  const normalized = normalizePathname(pathname);
  const currentLocale = getLocaleFromPathname(normalized);
  const stripped = stripLocalePrefix(normalized);
  const pageKey = getMarketingPageKeyByPath(normalized);

  if (pageKey) {
    return getLocalizedPagePath(targetLocale, pageKey);
  }

  if (
    stripped.segments[0] === BLOG_SEGMENTS[currentLocale] &&
    stripped.segments.length === 1
  ) {
    return getLocalizedBlogIndexPath(targetLocale);
  }

  if (
    stripped.segments[0] === BLOG_SEGMENTS[currentLocale] &&
    stripped.segments[1]
  ) {
    return getLocalizedBlogPostPath(targetLocale, stripped.segments[1]);
  }

  if (
    stripped.segments[0] === DOCS_SEGMENTS[currentLocale]
  ) {
    return joinLocalizedPath(targetLocale, ...stripped.segments);
  }

  if (
    stripped.segments[0] === SERVICE_SECTION_SEGMENTS[currentLocale] &&
    stripped.segments[1]
  ) {
    const serviceKey = getServiceKeyBySlug(stripped.segments[1]);
    if (serviceKey) {
      return getServiceHref(targetLocale, serviceKey);
    }
  }

  return getLocalizedHref(normalized, targetLocale);
}

export function getHreflangAlternates(pathname: string) {
  return Object.fromEntries(
    SUPPORTED_LOCALES.map((locale) => [
      locale,
      resolveLocaleVariantPath(pathname, locale),
    ]),
  ) as Record<SupportedLocale, string>;
}
