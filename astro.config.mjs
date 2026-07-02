// @ts-check
import path from "node:path";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";

const siteUrl = "https://atylus.com";
const nextCompatAliases = [
  {
    find: /^next\/image$/,
    replacement: path.resolve("./src/compat/next/image.tsx"),
  },
  {
    find: /^next\/link$/,
    replacement: path.resolve("./src/compat/next/link.tsx"),
  },
  {
    find: /^next\/navigation$/,
    replacement: path.resolve("./src/compat/next/navigation.tsx"),
  },
  {
    find: /^next\/font\/google$/,
    replacement: path.resolve("./src/compat/next/font/google.ts"),
  },
  {
    find: /^next$/,
    replacement: path.resolve("./src/compat/next/index.ts"),
  },
];

export default defineConfig({
  site: siteUrl,
  trailingSlash: "ignore",
  vite: {
    resolve: {
      alias: nextCompatAliases,
    },
  },
  integrations: [
    react(),
    starlight({
      title: "Atylus Dokumantasyon",
      titleDelimiter: "|",
      favicon: "/assets/images/favicon.ico",
      logo: {
        light: "./src/assets/logo-dark.svg",
        dark: "./src/assets/logo-light.svg",
        replacesTitle: true,
      },
      locales: {
        root: {
          label: "Turkce",
          lang: "tr",
        },
      },
      social: [
        {
          icon: "github",
          label: "Blog",
          href: "/blog/",
        },
      ],
      pagefind: {
        ranking: {
          termFrequency: 1,
          termSaturation: 0.5,
          termSimilarity: 1,
          metaWeights: {
            title: 8,
            description: 5,
          },
        },
      },
      lastUpdated: true,
      customCss: ["./src/styles/starlight-theme.css"],
      sidebar: [
        {
          label: "Baslangic",
          items: [{ slug: "docs" }],
        },
        {
          label: "Referans",
          items: [
            {
              autogenerate: {
                directory: "docs/reference",
                collapsed: false,
              },
            },
          ],
        },
      ],
    }),
    mdx(),
    sitemap({
      filter: (page) => {
        const url = typeof page === "string" ? page : page.url;
        if (!url) return true;

        return !url.includes("/404");
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
