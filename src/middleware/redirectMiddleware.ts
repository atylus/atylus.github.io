import type { APIContext } from "astro";
import { enabledLanguages } from "@/lib/utils/i18nUtils";
import trailingSlashChecker from "@/lib/utils/trailingSlashChecker";

export type MiddlewareStage = (
  context: APIContext,
  next: () => Promise<Response>,
) => Promise<Response>;

export type RedirectLocals = {
  requestMeta?: {
    url: URL;
    pathname: string;
    method: string;
  };
  skipRedirects?: boolean;
};

type RedirectMiddlewareOptions = {
  getLocals: (context: APIContext) => RedirectLocals;
  enforceTrailingSlash: boolean;
  defaultLanguage: string;
  showDefaultLangInUrl: boolean;
};

const supportedLocales = new Set(enabledLanguages);

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

export const createRedirectMiddleware = ({
  getLocals,
  enforceTrailingSlash,
  defaultLanguage,
  showDefaultLangInUrl,
}: RedirectMiddlewareOptions): MiddlewareStage => {
  return async (context, next) => {
    const locals = getLocals(context);
    if (locals.skipRedirects) {
      return next();
    }

    const meta = locals.requestMeta;
    if (!meta) {
      return next();
    }

    const { url, pathname } = meta;

    const hasLocalePrefix = enabledLanguages.some(
      (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`),
    );

    if (hasLocalePrefix) {
      if (enforceTrailingSlash && !pathname.endsWith("/")) {
        const redirect = new URL(url);
        redirect.pathname = trailingSlashChecker(pathname);
        return Response.redirect(redirect, 307);
      }

      return next();
    }

    const preferred =
      resolvePreferredLocale(context.request.headers.get("accept-language")) ||
      defaultLanguage;

    const needsPrefix =
      preferred !== defaultLanguage || showDefaultLangInUrl;

    if (!needsPrefix || !supportedLocales.has(preferred)) {
      return next();
    }

    const normalizedPath = pathname === "/" ? "" : pathname;
    const redirect = new URL(url);
    let targetPath = `/${preferred}${normalizedPath}`.replace(/\/{2,}/g, "/");
    targetPath = enforceTrailingSlash
      ? trailingSlashChecker(targetPath)
      : targetPath;
    redirect.pathname = targetPath;

    return Response.redirect(redirect, 307);
  };
};
