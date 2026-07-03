import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "./config";

type LocalePathMap = Record<SupportedLocale, readonly string[]>;

export type MarketingPageKey =
  | "home"
  | "about"
  | "contact"
  | "services"
  | "projects"
  | "faq"
  | "pricing"
  | "team"
  | "teamMember"
  | "galleryGrid"
  | "galleryMasonry"
  | "computerVisionSolutions"
  | "predictiveAnalytics"
  | "customSoftwareSolutions"
  | "neuralNetworkDevelopment"
  | "aiConsulting"
  | "aiSystemIntegration"
  | "aiTechnologies"
  | "softwareDevelopmentProcesses";

const pageRoutes: Record<MarketingPageKey, LocalePathMap> = {
  home: {
    tr: [],
    en: [],
    de: [],
  },
  about: {
    tr: ["hakkimizda"],
    en: ["about"],
    de: ["ueber-uns"],
  },
  contact: {
    tr: ["contact"],
    en: ["contact"],
    de: ["kontakt"],
  },
  services: {
    tr: ["hizmetler"],
    en: ["services"],
    de: ["leistungen"],
  },
  projects: {
    tr: ["projeler"],
    en: ["projects"],
    de: ["projekte"],
  },
  faq: {
    tr: ["sss"],
    en: ["faq"],
    de: ["faq"],
  },
  pricing: {
    tr: ["fiyatlandirma"],
    en: ["pricing"],
    de: ["preise"],
  },
  team: {
    tr: ["ekip"],
    en: ["team"],
    de: ["team"],
  },
  teamMember: {
    tr: ["ekip-uye"],
    en: ["team-member"],
    de: ["teammitglied"],
  },
  galleryGrid: {
    tr: ["galeri-grid"],
    en: ["gallery-grid"],
    de: ["galerie-grid"],
  },
  galleryMasonry: {
    tr: ["galeri-masonry"],
    en: ["gallery-masonry"],
    de: ["galerie-masonry"],
  },
  computerVisionSolutions: {
    tr: ["bilgisayarli-goru-cozumleri"],
    en: ["computer-vision-solutions"],
    de: ["computer-vision-loesungen"],
  },
  predictiveAnalytics: {
    tr: ["ongorusel-veri-analitigi"],
    en: ["predictive-data-analytics"],
    de: ["praediktive-datenanalytik"],
  },
  customSoftwareSolutions: {
    tr: ["ozel-yazilim-cozumleri"],
    en: ["custom-software-solutions"],
    de: ["individuelle-softwareloesungen"],
  },
  neuralNetworkDevelopment: {
    tr: ["yapay-sinir-agi-gelistirme"],
    en: ["neural-network-development"],
    de: ["neuronale-netzwerk-entwicklung"],
  },
  aiConsulting: {
    tr: ["yapay-zeka-danismanligi"],
    en: ["ai-consulting"],
    de: ["ki-beratung"],
  },
  aiSystemIntegration: {
    tr: ["yapay-zeka-sistem-entegrasyonu"],
    en: ["ai-system-integration"],
    de: ["ki-systemintegration"],
  },
  aiTechnologies: {
    tr: ["yapay-zeka-teknolojileri"],
    en: ["ai-technologies"],
    de: ["ki-technologien"],
  },
  softwareDevelopmentProcesses: {
    tr: ["yazilim-gelistirme-surecleri"],
    en: ["software-development-processes"],
    de: ["softwareentwicklungsprozesse"],
  },
};

export const BLOG_SEGMENTS: Record<SupportedLocale, string> = {
  tr: "blog",
  en: "blog",
  de: "blog",
};

export const DOCS_SEGMENTS: Record<SupportedLocale, string> = {
  tr: "docs",
  en: "docs",
  de: "docs",
};

export const SERVICE_SECTION_SEGMENTS: Record<SupportedLocale, string> = {
  tr: "hizmetler",
  en: "services",
  de: "leistungen",
};

function normalizePath(path: string): string {
  if (!path) return "/";
  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const withoutDuplicateSlashes = withLeadingSlash.replace(/\/{2,}/g, "/");
  return withoutDuplicateSlashes === "/" && path !== "/" ? "/" : withoutDuplicateSlashes;
}

function trimSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, "");
}

export function joinLocalizedPath(...segments: string[]): string {
  const normalizedSegments = segments
    .map((segment) => trimSlashes(segment))
    .filter(Boolean);

  if (normalizedSegments.length === 0) {
    return "/";
  }

  return `/${normalizedSegments.join("/")}/`;
}

export function getLocalizedPagePath(
  locale: SupportedLocale,
  key: MarketingPageKey,
): string {
  return joinLocalizedPath(locale, ...pageRoutes[key][locale]);
}

export function getLocalizedBlogIndexPath(locale: SupportedLocale): string {
  return joinLocalizedPath(locale, BLOG_SEGMENTS[locale]);
}

export function getLocalizedDocsIndexPath(locale: SupportedLocale): string {
  return joinLocalizedPath(locale, DOCS_SEGMENTS[locale]);
}

export function getMarketingPageAlternates(
  key: MarketingPageKey,
): Record<SupportedLocale, string> {
  return {
    tr: getLocalizedPagePath("tr", key),
    en: getLocalizedPagePath("en", key),
    de: getLocalizedPagePath("de", key),
  };
}

export function resolveMarketingPage(
  locale: SupportedLocale,
  segments: readonly string[],
): MarketingPageKey | null {
  const normalized = segments.join("/");

  for (const [key, localizedSegments] of Object.entries(pageRoutes) as Array<
    [MarketingPageKey, LocalePathMap]
  >) {
    if (normalized === localizedSegments[locale].join("/")) {
      return key;
    }
  }

  return null;
}

const legacyPagePathToKey = new Map<string, MarketingPageKey>();

for (const [key, localizedSegments] of Object.entries(pageRoutes) as Array<
  [MarketingPageKey, LocalePathMap]
>) {
  legacyPagePathToKey.set(
    normalizePath(joinLocalizedPath(...localizedSegments[DEFAULT_LOCALE])),
    key,
  );
}

legacyPagePathToKey.set("/hakkimizda/", "about");
legacyPagePathToKey.set("/about-us/", "about");
legacyPagePathToKey.set("/projects/", "projects");
legacyPagePathToKey.set("/project-single/", "projects");
legacyPagePathToKey.set("/faq/", "faq");
legacyPagePathToKey.set("/pricing/", "pricing");
legacyPagePathToKey.set("/team/", "team");
legacyPagePathToKey.set("/team-single/", "teamMember");
legacyPagePathToKey.set("/gallery-grid/", "galleryGrid");
legacyPagePathToKey.set("/gallery-masonry/", "galleryMasonry");

export function getMarketingPageKeyByPath(pathname: string): MarketingPageKey | null {
  const normalizedPath = normalizePath(
    pathname.endsWith("/") ? pathname : `${pathname}/`,
  );

  if (normalizedPath === "/") {
    return "home";
  }

  if (normalizedPath.startsWith("/tr/") || normalizedPath.startsWith("/en/") || normalizedPath.startsWith("/de/")) {
    const [localeSegment, ...restSegments] = normalizedPath.split("/").filter(Boolean);
    const locale = localeSegment as SupportedLocale;
    return resolveMarketingPage(locale, restSegments);
  }

  return legacyPagePathToKey.get(normalizedPath) ?? null;
}

export function getLocalizedPathname(
  pathname: string,
  locale: SupportedLocale,
): string {
  const normalizedPath = normalizePath(
    pathname.endsWith("/") ? pathname : `${pathname}/`,
  );

  const pageKey = getMarketingPageKeyByPath(normalizedPath);
  if (pageKey) {
    return getLocalizedPagePath(locale, pageKey);
  }

  if (normalizedPath === "/blog/" || normalizedPath === "/insights/") {
    return getLocalizedBlogIndexPath(locale);
  }

  if (normalizedPath === "/docs/") {
    return getLocalizedDocsIndexPath(locale);
  }

  return normalizedPath.startsWith(`/${locale}/`)
    ? normalizedPath
    : joinLocalizedPath(locale, trimSlashes(normalizedPath));
}

export function getLocalizedHref(
  href: string,
  locale: SupportedLocale,
): string {
  if (
    !href ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  const parsed = new URL(href, "https://atylus.local");
  const pathnameSegments = parsed.pathname.split("/").filter(Boolean);

  if (
    pathnameSegments.length > 0 &&
    SUPPORTED_LOCALES.includes(pathnameSegments[0] as SupportedLocale)
  ) {
    const suffix = `${parsed.search}${parsed.hash}`;
    const normalizedPathname = normalizePath(
      parsed.pathname.endsWith("/") ? parsed.pathname : `${parsed.pathname}/`,
    );
    return suffix
      ? `${normalizedPathname.replace(/\/$/, "")}${suffix}`
      : normalizedPathname;
  }

  const localizedPathname = getLocalizedPathname(parsed.pathname, locale);
  const suffix = `${parsed.search}${parsed.hash}`;
  return suffix ? `${localizedPathname.replace(/\/$/, "")}${suffix}` : localizedPathname;
}

export function getLegacyRedirectEntries(): Array<[string, string]> {
  const entries = new Map<string, string>();

  entries.set("/", "/tr/");
  entries.set("/blog/", "/tr/blog/");
  entries.set("/insights/", "/tr/blog/");

  for (const [key, localizedSegments] of Object.entries(pageRoutes) as Array<
    [MarketingPageKey, LocalePathMap]
  >) {
    const legacyPath = joinLocalizedPath(...localizedSegments.tr);
    const targetPath = getLocalizedPagePath("tr", key);

    if (legacyPath !== targetPath) {
      entries.set(legacyPath, targetPath);
    }
  }

  return Array.from(entries.entries());
}

export function getAllMarketingPagesForLocale(locale: SupportedLocale) {
  return (Object.keys(pageRoutes) as MarketingPageKey[]).map((key) => ({
    key,
    path: getLocalizedPagePath(locale, key),
  }));
}

export { pageRoutes };
export { SUPPORTED_LOCALES };
