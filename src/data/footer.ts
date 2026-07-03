import type { FooterLinkItem, FooterLinkGroup } from "@/types/footer";
import type { SupportedLocale } from "@/i18n/config";
import { getFooterLinkGroups } from "@/data/site";

/** Company links - used in Footer1, Footer2, Footer4 */
export function getFooterCompanyLinks(locale: SupportedLocale): FooterLinkItem[] {
  return getFooterLinkGroups(locale)[0].links;
}

/** Services links - used in Footer1, Footer2, Footer3 */
export function getFooterServiceLinks(locale: SupportedLocale): FooterLinkItem[] {
  return getFooterLinkGroups(locale)[1].links;
}

export function getFooterResourceLinks(locale: SupportedLocale): FooterLinkItem[] {
  return getFooterLinkGroups(locale)[2].links;
}

/** Services links (alternate) - used in Footer4 */
export const footerServiceLinksAlt: FooterLinkItem[] = [
  { label: "AI Model Deployment", href: "#" },
  { label: "Intelligent Automation", href: "#" },
  { label: "AI Model Deployment", href: "#" },
  { label: "Data Science Consulting", href: "#" },
  { label: "Predictive Analytics", href: "#" },
  { label: "Value Added Services", href: "#" },
];

/** Link groups for Footer1, Footer2 (Company + Services) */
export function getFooterGroups(locale: SupportedLocale): FooterLinkGroup[] {
  return getFooterLinkGroups(locale).map((group) => ({
    title: group.title,
    links: group.links.map((link) => ({
      label: link.label,
      href: link.href,
    })),
  }));
}

export const footerCompanyLinks = getFooterCompanyLinks("tr");
export const footerServiceLinks = getFooterServiceLinks("tr");
export const footerResourceLinks = getFooterResourceLinks("tr");
export const footerLinkGroups = getFooterGroups("tr");

/** Link groups for Footer4 (Company + Services alt) */
export const footerLinkGroupsAlt: FooterLinkGroup[] = [
  { title: "Kurumsal", links: footerCompanyLinks },
  { title: "Hizmetler", links: footerServiceLinksAlt },
  { title: "Kaynaklar", links: footerResourceLinks },
];

/** Bottom row links - used in Footer5 */
export const footerBottomLinks: FooterLinkItem[] = [
  { label: "Home", href: "/index15" },
  { label: "Pages", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Shop", href: "#" },
  { label: "İletişim", href: "#" },
];
