import type { FooterLinkItem, FooterLinkGroup } from "@/types/footer";
import { getServiceHref, serviceCatalogItems } from "@/data/serviceCatalog";

/** Company links - used in Footer1, Footer2, Footer4 */
export const footerCompanyLinks: FooterLinkItem[] = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Expertise", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "News & Media", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "İletişim", href: "#" },
];

/** Services links - used in Footer1, Footer2, Footer3 */
export const footerServiceLinks: FooterLinkItem[] = serviceCatalogItems.map(
  (service) => ({
    label: service.title,
    href: getServiceHref(service.slug),
  }),
);

export const footerResourceLinks: FooterLinkItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Kılavuzlar", href: "#" },
  { label: "Eğitimler", href: "#" },
  { label: "Dokümantasyon", href: "#" },
  { label: "Değişiklik Günlüğü", href: "#" },
];

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
export const footerLinkGroups: FooterLinkGroup[] = [
  { title: "Kurumsal", links: footerCompanyLinks },
  { title: "Hizmetler", links: footerServiceLinks },
  { title: "Kaynaklar", links: footerResourceLinks },
];

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
