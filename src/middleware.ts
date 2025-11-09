import { defineMiddleware } from "astro/middleware";
import { enabledLanguages } from "@/lib/utils/i18nUtils";
import { parseTomlToJson } from "@/lib/utils/tomlUtils";

const config = parseTomlToJson();
const {
  defaultLanguage,
  showDefaultLangInUrl,
} = config.settings.multilingual;

const supportedLocales = new Set(enabledLanguages);

const ASSET_PREFIXES = [
  "/_astro",
  "/_image",
  "/assets",
  "/images",
  "/favicon",
  "/fonts",
  "/.well-known",
];

const parseAcceptLanguage = (header: string | null) => {
  if (!header) return [];

  return header
    .split(",")
    .map((part) => {
      const [langPart, weightPart] = part.trim().split(";q=");
      const normalized = langPart.toLowerCase();
      const quality = weightPart ? parseFloat(weightPart) : 1;
      return {
        lang: normalized,
        quality: Number.isFinite(quality) ? quality : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality)
    .map(({ lang }) => lang);
};

const resolvePreferredLocale = (header: string | null) => {
  const candidates = parseAcceptLanguage(header);

  for (const candidate of candidates) {
    if (supportedLocales.has(candidate)) {
      return candidate;
    }

    const base = candidate.split("-")[0];
    if (base && supportedLocales.has(base)) {
      return base;
    }
  }

  return undefined;
};

const shouldBypass = (pathname: string) => {
  return (
    ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/@fs/")
  );
};

export const onRequest = defineMiddleware(async (context, next) => {
  const { request } = context;
  const method = request.method.toUpperCase();

  if (!["GET", "HEAD"].includes(method)) {
    return next();
  }

  const url = new URL(request.url);
  const { pathname } = url;

  const hasLocalePrefix = enabledLanguages.some(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
  );

  if (hasLocalePrefix || shouldBypass(pathname)) {
    return next();
  }

  const preferred =
    resolvePreferredLocale(request.headers.get("accept-language")) ||
    defaultLanguage;

  const needsPrefix =
    preferred !== defaultLanguage || showDefaultLangInUrl;

  if (!needsPrefix || !supportedLocales.has(preferred)) {
    return next();
  }

  const normalizedPath = pathname === "/" ? "" : pathname;
  const redirect = new URL(request.url);
  redirect.pathname = `/${preferred}${normalizedPath}`.replace(/\/{2,}/g, "/");

  return Response.redirect(redirect, 307);
});
