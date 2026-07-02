/** Service card for service page (Services2) - supports default, compact, icon variants */
export type ServiceCardSec6 = {
  id: string;
  variant: "default" | "compact" | "icon";
  href: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  title: string;
  description?: string;
  contentClassName?: string;
  cardClassName?: string;
};

/** Service card10 - home-5 ServiceSec10 */
export type ServiceCard10 = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  titleClassName?: string;
  colClassName?: string;
};

export type ServiceCategoryKey =
  | "analitik"
  | "teknoloji"
  | "verim"
  | "mantik"
  | "operasyonel-fayda";

export type ServiceCatalogItem = {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroLabel: string;
  detailTitle: string;
  detailIntro: string;
  detailParagraphs: [string, string];
  bullets: string[];
};

export type ServiceCatalogCategory = {
  key: ServiceCategoryKey;
  shortCode: string;
  title: string;
  description: string;
  items: ServiceCatalogItem[];
};
