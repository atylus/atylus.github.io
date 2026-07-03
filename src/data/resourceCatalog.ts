import type { SupportedLocale } from "@/i18n/config";
import {
  getLocalizedBlogIndexPath,
  getLocalizedDocsIndexPath,
} from "@/i18n/routes";

export type ResourceItem = {
  label: string;
  description: string;
  href: string;
};

export type ResourceCategory = {
  key: string;
  shortCode: string;
  title: string;
  description: string;
  items: ResourceItem[];
};

const resourceCatalogByLocale: Record<SupportedLocale, ResourceCategory[]> = {
  tr: [
    {
      key: "learn",
      shortCode: "[O]",
      title: "Ogren",
      description:
        "Urun bilgisi, kullanim senaryolari ve migration notlari icin egitim odakli icerikler.",
      items: [
        {
          label: "Blog",
          description: "Ipuclari, guncellemeler ve teknik icgoruler",
          href: getLocalizedBlogIndexPath("tr"),
        },
        {
          label: "Dokumantasyon",
          description: "Kilavuzlar ve nasil yapilir referanslari",
          href: getLocalizedDocsIndexPath("tr"),
        },
      ],
    },
    {
      key: "knowledge",
      shortCode: "[K]",
      title: "Bilgi Merkezi",
      description:
        "Karar vermeyi hizlandiran teknik ve operasyonel referanslar.",
      items: [
        {
          label: "Migration Blueprint",
          description: "Next.js'ten Astro + Starlight yapisina gecis plani",
          href: `${getLocalizedDocsIndexPath("tr")}reference/migration-blueprint/`,
        },
        {
          label: "Icerik Modeli",
          description: "Blog ve docs icerigi icin tip-guvenli icerik modeli",
          href: `${getLocalizedDocsIndexPath("tr")}reference/content-model/`,
        },
      ],
    },
  ],
  en: [
    {
      key: "learn",
      shortCode: "[L]",
      title: "Learn",
      description:
        "Training-oriented content for product knowledge, usage flows, and migration notes.",
      items: [
        {
          label: "Blog",
          description: "Guides, updates, and technical insights",
          href: getLocalizedBlogIndexPath("en"),
        },
        {
          label: "Documentation",
          description: "Guides and how-to references",
          href: getLocalizedDocsIndexPath("en"),
        },
      ],
    },
    {
      key: "knowledge",
      shortCode: "[R]",
      title: "Reference Hub",
      description:
        "Technical and operational references that accelerate decisions.",
      items: [
        {
          label: "Migration Blueprint",
          description: "How the Next.js to Astro + Starlight transition was executed",
          href: `${getLocalizedDocsIndexPath("en")}reference/migration-blueprint/`,
        },
        {
          label: "Content Model",
          description: "Type-safe content structure for blog and docs",
          href: `${getLocalizedDocsIndexPath("en")}reference/content-model/`,
        },
      ],
    },
  ],
  de: [
    {
      key: "learn",
      shortCode: "[L]",
      title: "Lernen",
      description:
        "Trainingsorientierte Inhalte zu Produktwissen, Nutzungsablaeufen und Migration.",
      items: [
        {
          label: "Blog",
          description: "Leitfaeden, Updates und technische Einblicke",
          href: getLocalizedBlogIndexPath("de"),
        },
        {
          label: "Dokumentation",
          description: "Leitfaeden und How-to-Referenzen",
          href: getLocalizedDocsIndexPath("de"),
        },
      ],
    },
    {
      key: "knowledge",
      shortCode: "[R]",
      title: "Referenzzentrum",
      description:
        "Technische und operative Referenzen fuer schnellere Entscheidungen.",
      items: [
        {
          label: "Migration Blueprint",
          description: "Wie der Wechsel von Next.js zu Astro + Starlight umgesetzt wurde",
          href: `${getLocalizedDocsIndexPath("de")}reference/migration-blueprint/`,
        },
        {
          label: "Content Model",
          description: "Typsicheres Inhaltsmodell fuer Blog und Dokumentation",
          href: `${getLocalizedDocsIndexPath("de")}reference/content-model/`,
        },
      ],
    },
  ],
};

export function getResourceCatalog(locale: SupportedLocale) {
  return resourceCatalogByLocale[locale];
}

export function getResourceCatalogItems(locale: SupportedLocale) {
  return resourceCatalogByLocale[locale].flatMap((category) => category.items);
}

export const resourceCatalog = resourceCatalogByLocale.tr;
export const resourceCatalogItems = getResourceCatalogItems("tr");
