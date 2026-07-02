import { getServiceHref, serviceCatalog } from "@/data/serviceCatalog";
import { resourceCatalog } from "@/data/resourceCatalog";
import type { MobileMenuItem } from "@/types/menu";

const serviceMenuChildren: MobileMenuItem[] = serviceCatalog.map((category) => ({
  label: `${category.shortCode} ${category.title}`,
  href: "#",
  liClassName: "sub-menu",
  children: category.items.map((item) => ({
    label: item.title,
    href: getServiceHref(item.slug),
  })),
}));

const resourceMenuChildren: MobileMenuItem[] = resourceCatalog.map((category) => ({
  label: `${category.shortCode} ${category.title}`,
  href: "#",
  liClassName: "sub-menu",
  children: category.items.map((item) => ({
    label: item.label,
    href: item.href,
  })),
}));

export const mobileMenuItems: MobileMenuItem[] = [
  {
    label: "Ana Sayfa",
    href: "/",
  },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: serviceMenuChildren,
  },
  {
    label: "Kaynaklar",
    href: "#",
    children: resourceMenuChildren,
  },
  {
    label: "İletişim",
    href: "/contact",
  },
];
