import type { ServiceCardSec6, ServiceCard10 } from "@/types/services";
import { getServiceBySlug, getServiceHref } from "@/data/serviceCatalog";

type ServiceCardLayout = Omit<ServiceCardSec6, "id" | "title" | "description" | "href">;

function createHomeServiceCard(
  id: string,
  slug: string,
  layout: ServiceCardLayout,
): ServiceCardSec6 {
  const service = getServiceBySlug(slug);

  if (!service) {
    throw new Error(`Home service card could not resolve service slug: ${slug}`);
  }

  return {
    id,
    href: getServiceHref(service.slug),
    title: service.title,
    description: service.description,
    ...layout,
  };
}

const homeServiceOrder: Array<{ id: string; slug: string; layout: ServiceCardLayout }> = [
  {
    id: "s6-1",
    slug: "mcp-server-gelistirme",
    layout: {
      variant: "default",
      imageSrc: "/assets/images/service/service6-1.png",
      imageWidth: 456,
      imageHeight: 561,
    },
  },
  {
    id: "s6-2",
    slug: "uretken-yapay-zeka",
    layout: {
      variant: "default",
      imageSrc: "/assets/images/service/service6-2.png",
      imageWidth: 456,
      imageHeight: 561,
      contentClassName: "v2",
    },
  },
  {
    id: "s6-3",
    slug: "is-akisi-orkestrasyonu",
    layout: {
      variant: "compact",
      imageSrc: "/assets/images/service/service6-3.png",
      imageWidth: 420,
      imageHeight: 191,
      cardClassName: "ser-card v3",
    },
  },
  {
    id: "s6-4",
    slug: "chatbot-gelistirme",
    layout: {
      variant: "default",
      imageSrc: "/assets/images/service/service6-6.png",
      imageWidth: 1858,
      imageHeight: 846,
      cardClassName: "ser-card v4-media",
      contentClassName: "v2",
    },
  },
  {
    id: "s6-5",
    slug: "risk-ve-anomali-analizi",
    layout: {
      variant: "default",
      imageSrc: "/assets/images/service/service6-5.png",
      imageWidth: 490,
      imageHeight: 561,
      contentClassName: "v2",
      cardClassName: "ser-card v5",
    },
  },
];

export const serviceSec6Cards: ServiceCardSec6[] = homeServiceOrder.map(({ id, slug, layout }) =>
  createHomeServiceCard(id, slug, layout),
);

export const serviceSec10Cards: ServiceCard10[] = [
  {
    id: "s10-1",
    imageSrc: "/assets/images/service/ser10-1.png",
    imageWidth: 418,
    imageHeight: 601,
    iconSrc: "/assets/images/service/ser-icon10-1.svg",
    iconWidth: 55,
    iconHeight: 47,
    title: "Robotic Process Automation (RPA)",
    titleClassName: "v2",
    colClassName: "col-xl-3 col-lg-6 col-md-6",
  },
  {
    id: "s10-2",
    imageSrc: "/assets/images/service/ser10-2.png",
    imageWidth: 418,
    imageHeight: 601,
    iconSrc: "/assets/images/service/ser-icon10-2.svg",
    iconWidth: 55,
    iconHeight: 55,
    title: "Data Analysis and Visualization",
    colClassName: "col-xl-3 col-lg-6 col-md-6",
  },
  {
    id: "s10-3",
    imageSrc: "/assets/images/service/ser10-3.png",
    imageWidth: 1004,
    imageHeight: 601,
    iconSrc: "/assets/images/service/ser-icon10-3.svg",
    iconWidth: 51,
    iconHeight: 48,
    title: "Insightful market research for strategic business decisions",
    titleClassName: "v3",
    colClassName: "col-xl-6 col-lg-12 col-md-12",
  },
];
