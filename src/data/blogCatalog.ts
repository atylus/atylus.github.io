import {
  BLOG_SEGMENTS,
  joinLocalizedPath,
} from "@/i18n/routes";
import type { SupportedLocale } from "@/i18n/config";

export type BlogTranslationKey = "astro-starlight-migration";

export type BlogCatalogEntry = {
  translationKey: BlogTranslationKey;
  slug: Record<SupportedLocale, string>;
};

export const blogCatalog: BlogCatalogEntry[] = [
  {
    translationKey: "astro-starlight-migration",
    slug: {
      tr: "astro-starlight-migrasyonu",
      en: "astro-starlight-migration",
      de: "astro-und-starlight-migration",
    },
  },
];

const blogSlugMap = new Map<string, BlogTranslationKey>();

for (const entry of blogCatalog) {
  blogSlugMap.set(entry.translationKey, entry.translationKey);
  blogSlugMap.set(entry.slug.tr, entry.translationKey);
  blogSlugMap.set(entry.slug.en, entry.translationKey);
  blogSlugMap.set(entry.slug.de, entry.translationKey);
}

export function getBlogTranslationKeyBySlug(slugOrKey: string) {
  return blogSlugMap.get(slugOrKey);
}

export function getLocalizedBlogPostPath(
  locale: SupportedLocale,
  translationKeyOrSlug: BlogTranslationKey | string,
) {
  const translationKey =
    getBlogTranslationKeyBySlug(translationKeyOrSlug) ??
    (translationKeyOrSlug as BlogTranslationKey);
  const entry = blogCatalog.find((item) => item.translationKey === translationKey);

  if (!entry) {
    return joinLocalizedPath(locale, BLOG_SEGMENTS[locale]);
  }

  return joinLocalizedPath(
    locale,
    BLOG_SEGMENTS[locale],
    entry.slug[locale],
  );
}
