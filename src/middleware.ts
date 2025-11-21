import type { APIContext } from "astro";
import { defineMiddleware } from "astro/middleware";
import {
  createRedirectMiddleware,
  type MiddlewareStage,
  type RedirectLocals,
} from "@/middleware/redirectMiddleware";
import { parseTomlToJson } from "@/lib/utils/tomlUtils";

const config = parseTomlToJson();
const {
  defaultLanguage,
  showDefaultLangInUrl,
} = config.settings.multilingual;

const enforceTrailingSlash = Boolean(config.site.trailingSlash);

const ASSET_PREFIXES = [
  "/_astro",
  "/_image",
  "/assets",
  "/images",
  "/favicon",
  "/fonts",
  "/.well-known",
];

const shouldBypass = (pathname: string) => {
  return (
    ASSET_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/@fs/")
  );
};

const composeMiddleware = (...stages: MiddlewareStage[]) => {
  return defineMiddleware(async (context, next) => {
    let index = -1;
    const dispatch = async (stageIndex: number): Promise<Response> => {
      if (stageIndex <= index) {
        throw new Error("next() called multiple times in middleware chain");
      }

      index = stageIndex;
      const stage = stages[stageIndex];

      if (!stage) {
        return next();
      }

      return stage(context, () => dispatch(stageIndex + 1));
    };

    return dispatch(0);
  });
};

const getLocals = (context: APIContext) => context.locals as RedirectLocals;

const coreMiddleware: MiddlewareStage = async (context, next) => {
  const url = new URL(context.request.url);
  const method = context.request.method.toUpperCase();
  const pathname = url.pathname;

  const locals = getLocals(context);
  locals.requestMeta = { url, pathname, method };

  const isBypassed =
    !["GET", "HEAD"].includes(method) || shouldBypass(pathname);

  if (isBypassed) {
    locals.skipRedirects = true;
  }

  return next();
};

const redirectMiddleware = createRedirectMiddleware({
  getLocals,
  enforceTrailingSlash,
  defaultLanguage,
  showDefaultLangInUrl,
});

export const onRequest = composeMiddleware(coreMiddleware, redirectMiddleware);
