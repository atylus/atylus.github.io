import type { SupportedLocale } from "@/i18n/config";

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

export type ServiceItemKey =
  | "risk-ve-anomali-analizi"
  | "davranis-ve-segmentasyon"
  | "karar-panolari"
  | "uretken-yapay-zeka"
  | "hizmet-basina-maliyet-azaltma"
  | "hiz-ve-dongu-suresi"
  | "kalite-ve-hata-azaltma"
  | "is-akisi-orkestrasyonu"
  | "politika-ve-kural-motoru"
  | "deneyleme-ve-optimizasyon"
  | "chatbot-gelistirme"
  | "mcp-server-gelistirme";

export type ServiceCatalogItem = {
  key: ServiceItemKey;
  locale: SupportedLocale;
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
  locale: SupportedLocale;
  shortCode: string;
  title: string;
  description: string;
  items: ServiceCatalogItem[];
};
