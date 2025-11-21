import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import remarkParseContent from "./src/lib/utils/remarkParseContent.ts";
import {
  parseTomlToJson,
  reloadOnTomlChange,
} from "./src/lib/utils/tomlUtils.ts";
import { enabledLanguages } from "./src/lib/utils/i18nUtils.ts";

const config = parseTomlToJson();

let {
  seo: { sitemap: sitemapConfig },
  settings: {
    multilingual: { showDefaultLangInUrl, defaultLanguage },
  },
} = config;

// https://astro.build/config
export default defineConfig({
  site: config.site.baseUrl ? config.site.baseUrl : "http://examplesite.com",
  trailingSlash: config.site.trailingSlash ? "always" : "never",
  i18n: {
    locales: enabledLanguages,
    defaultLocale: defaultLanguage,
    routing: {
      redirectToDefaultLocale: false,
      prefixDefaultLocale: showDefaultLangInUrl,
    },
  },
  integrations: [react(), sitemapConfig.enable ? sitemap() : null, mdx()],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: "noopener noreferrer nofollow",
          target: "_blank",
        },
      ],
    ],
    remarkPlugins: [remarkParseContent],

    // Code Highlighter https://github.com/shikijs/shiki
    shikiConfig: {
      theme: "light-plus", // https://shiki.style/themes
      wrap: false,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    plugins: [
      tailwindcss(),
      reloadOnTomlChange(),
      {
        name: "astro-dev-locale-redirect",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (!req?.url || !req?.method) return next();

            const method = req.method.toUpperCase();
            if (method !== "GET" && method !== "HEAD") {
              return next();
            }

            try {
              const url = new URL(req.url, "http://localhost");
              const pathname = url.pathname;

              if (!pathname || pathname === "/" || pathname.endsWith("/")) {
                return next();
              }

              const segments = pathname.split("/").filter(Boolean);
              if (segments.length !== 1) {
                return next();
              }

              const candidate = segments[0];
              if (!enabledLanguages.includes(candidate)) {
                return next();
              }

              url.pathname = `/${candidate}/`;
              res.statusCode = 308;
              res.setHeader("Location", url.pathname + url.search);
              res.end();
            } catch (error) {
              return next();
            }
          });
        },
      },
    ],
  },
});
