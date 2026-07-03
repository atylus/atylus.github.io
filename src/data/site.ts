import type { SupportedLocale } from "@/i18n/config";
import { getUiCopy } from "@/i18n/content";
import {
  getLocalizedBlogIndexPath,
  getLocalizedDocsIndexPath,
  getLocalizedPagePath,
} from "@/i18n/routes";
import { getResourceCatalog } from "@/data/resourceCatalog";
import { getServiceCatalog, getServiceHref } from "@/data/serviceCatalog";

export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type CatalogGroup = {
  key: string;
  shortCode: string;
  title: string;
  description: string;
  items: NavLeaf[];
};

export type FooterLinkGroup = {
  title: string;
  links: NavLeaf[];
};

export type MobileMenuItem = {
  label: string;
  href: string;
  liClassName?: string;
  children?: MobileMenuItem[];
};

export type ProjectItem = {
  id: string;
  category: string;
  title: string;
  description: string;
};

export type ProjectModernItem = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

export function getSiteMetadata(locale: SupportedLocale) {
  const ui = getUiCopy(locale);

  return {
    name: "Atylus",
    title: ui.siteTitle,
    description: ui.siteDescription,
    defaultOgImage: "/assets/images/logo-dark.svg",
  } as const;
}

export function getServiceGroups(locale: SupportedLocale): CatalogGroup[] {
  return getServiceCatalog(locale).map((group) => ({
    key: group.key,
    shortCode: group.shortCode,
    title: group.title,
    description: group.description,
    items: group.items.map((item) => ({
      label: item.title,
      href: getServiceHref(locale, item.key),
      description: item.description,
    })),
  }));
}

export function getResourceGroups(locale: SupportedLocale): CatalogGroup[] {
  return getResourceCatalog(locale).map((group) => ({
    key: group.key,
    shortCode: group.shortCode,
    title: group.title,
    description: group.description,
    items: group.items.map((item) => ({ ...item })),
  }));
}

export function getFooterLinkGroups(locale: SupportedLocale): FooterLinkGroup[] {
  const ui = getUiCopy(locale);
  const serviceGroups = getServiceGroups(locale);
  const companyTitle =
    locale === "tr" ? "Kurumsal" : locale === "de" ? "Unternehmen" : "Company";

  return [
    {
      title: companyTitle,
      links: [
        { label: ui.pageMeta.about.title.split(" | ")[0], href: getLocalizedPagePath(locale, "about") },
        { label: ui.pageMeta.projects.title.split(" | ")[0], href: getLocalizedPagePath(locale, "projects") },
        { label: ui.nav.contact, href: getLocalizedPagePath(locale, "contact") },
      ],
    },
    {
      title: ui.nav.services,
      links: serviceGroups.flatMap((group) =>
        group.items.map((item) => ({ label: item.label, href: item.href })),
      ),
    },
    {
      title: ui.nav.resources,
      links: [
        { label: ui.breadcrumbs.blog, href: getLocalizedBlogIndexPath(locale) },
        { label: ui.breadcrumbs.docs, href: getLocalizedDocsIndexPath(locale) },
        { label: "Migration Blueprint", href: `${getLocalizedDocsIndexPath(locale)}reference/migration-blueprint/` },
      ],
    },
  ];
}

export function getMobileMenuItems(locale: SupportedLocale): MobileMenuItem[] {
  const ui = getUiCopy(locale);
  const serviceGroups = getServiceGroups(locale);
  const resourceGroups = getResourceGroups(locale);

  return [
    {
      label: ui.nav.home,
      href: getLocalizedPagePath(locale, "home"),
    },
    {
      label: ui.nav.services,
      href: getLocalizedPagePath(locale, "services"),
      children: serviceGroups.map((group) => ({
        label: `${group.shortCode} ${group.title}`,
        href: "#",
        liClassName: "sub-menu",
        children: group.items.map((item) => ({
          label: item.label,
          href: item.href,
        })),
      })),
    },
    {
      label: ui.nav.resources,
      href: "#",
      children: resourceGroups.map((group) => ({
        label: `${group.shortCode} ${group.title}`,
        href: "#",
        liClassName: "sub-menu",
        children: group.items.map((item) => ({
          label: item.label,
          href: item.href,
        })),
      })),
    },
    {
      label: ui.nav.contact,
      href: getLocalizedPagePath(locale, "contact"),
    },
  ];
}

export const siteMetadata = getSiteMetadata("tr");
export const serviceGroups = getServiceGroups("tr");
export const resourceGroups = getResourceGroups("tr");
export const footerLinkGroups = getFooterLinkGroups("tr");
export const mobileMenuItems = getMobileMenuItems("tr");

export const projects: ProjectItem[] = [
  {
    id: "deepvision",
    category: "Development",
    title: "DeepVision: Enhancing Image Recognition with Neural Networks",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
  {
    id: "nlpgenius",
    category: "Integration",
    title: "NLPGenius: Natural Language Processing Powered by Neural Networks",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
  {
    id: "autodrive",
    category: "Design Core",
    title: "AutoDrive: Autonomous Vehicle Navigation with Advanced Neural Networks",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
  {
    id: "cognicraft",
    category: "Design Core",
    title: "CogniCraft Innovations: Shaping the Future through Cutting-Edge AI Endeavors",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
];

export const projectsModern: ProjectModernItem[] = [
  {
    id: "deepvision",
    imageSrc: "/assets/images/project/project2-1.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
  {
    id: "nlpgenius",
    imageSrc: "/assets/images/project/project2-4.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
  {
    id: "autodrive",
    imageSrc: "/assets/images/project/project2-3.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
  {
    id: "cognicraft",
    imageSrc: "/assets/images/project/project2-4.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
];

export function isLinkActive(pathname: string, href: string) {
  if (!href || href === "#") {
    return false;
  }
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}`);
}

export function hasActiveLeaf(
  pathname: string,
  items: Array<NavLeaf | MobileMenuItem>,
): boolean {
  return items.some((item): boolean => {
    if ("children" in item && item.children?.length) {
      return hasActiveLeaf(pathname, item.children);
    }

    return isLinkActive(pathname, item.href);
  });
}

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}
