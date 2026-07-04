"use client";

import type { ComponentType } from "react";

import HomePage from "@/react-pages/page";
import BlogPage from "@/react-pages/(blog)/blog/page";
import BlogSinglePage from "@/react-pages/(blog)/blog-single/page";
import FeatureBilgisayarliGoruCozumleriPage from "@/react-pages/(features)/bilgisayarli-goru-cozumleri/page";
import FeatureOngoruselVeriAnalitigiPage from "@/react-pages/(features)/ongorusel-veri-analitigi/page";
import FeatureOzelYazilimCozumleriPage from "@/react-pages/(features)/ozel-yazilim-cozumleri/page";
import FeatureYapaySinirAgiGelistirmePage from "@/react-pages/(features)/yapay-sinir-agi-gelistirme/page";
import FeatureYapayZekaDanismanligiPage from "@/react-pages/(features)/yapay-zeka-danismanligi/page";
import FeatureYapayZekaSistemEntegrasyonuPage from "@/react-pages/(features)/yapay-zeka-sistem-entegrasyonu/page";
import FeatureYapayZekaTeknolojileriPage from "@/react-pages/(features)/yapay-zeka-teknolojileri/page";
import FeatureYazilimGelistirmeSurecleriPage from "@/react-pages/(features)/yazilim-gelistirme-surecleri/page";
import ContactPage from "@/react-pages/(inner-pages)/contact/page";
import FaqPage from "@/react-pages/(inner-pages)/faq/page";
import GalleryGridPage from "@/react-pages/(inner-pages)/gallery-grid/page";
import GalleryMasonryPage from "@/react-pages/(inner-pages)/gallery-masonry/page";
import HakkimizdaPage from "@/react-pages/(inner-pages)/hakkimizda/page";
import PricingPage from "@/react-pages/(inner-pages)/pricing/page";
import ProjectSinglePage from "@/react-pages/(inner-pages)/project-single/page";
import ProjectsPage from "@/react-pages/(inner-pages)/projects/page";
import TeamPage from "@/react-pages/(inner-pages)/team/page";
import TeamSinglePage from "@/react-pages/(inner-pages)/team-single/page";
import HizmetlerPage from "@/react-pages/(services)/hizmetler/page";
import ServiceSinglePage from "@/react-pages/(services)/service-single/page";
import type { ServiceCatalogItem } from "@/types/services";

import AppShell, { type SharedLayoutMode } from "./AppShell";
import ServiceDetailPage from "./ServiceDetailPage";
import type { SupportedLocale } from "@/i18n/config";

type RoutedPageProps = {
  pathname: string;
  locale?: SupportedLocale;
};

function createPageIsland(
  PageComponent: ComponentType,
  sharedLayout: SharedLayoutMode = "none",
) {
  return function RoutedPageIsland({
    pathname,
    locale = "tr",
  }: RoutedPageProps) {
    return (
      <AppShell
        pathname={pathname}
        locale={locale}
        sharedLayout={sharedLayout}
      >
        <PageComponent />
      </AppShell>
    );
  };
}

export const HomePageIsland = createPageIsland(HomePage);
export const BlogPageIsland = createPageIsland(BlogPage, "marketing");
export const BlogSinglePageIsland = createPageIsland(
  BlogSinglePage,
  "marketing",
);
export const FeatureBilgisayarliGoruCozumleriPageIsland = createPageIsland(
  FeatureBilgisayarliGoruCozumleriPage,
);
export const FeatureOngoruselVeriAnalitigiPageIsland = createPageIsland(
  FeatureOngoruselVeriAnalitigiPage,
);
export const FeatureOzelYazilimCozumleriPageIsland = createPageIsland(
  FeatureOzelYazilimCozumleriPage,
);
export const FeatureYapaySinirAgiGelistirmePageIsland = createPageIsland(
  FeatureYapaySinirAgiGelistirmePage,
);
export const FeatureYapayZekaDanismanligiPageIsland = createPageIsland(
  FeatureYapayZekaDanismanligiPage,
);
export const FeatureYapayZekaSistemEntegrasyonuPageIsland = createPageIsland(
  FeatureYapayZekaSistemEntegrasyonuPage,
);
export const FeatureYapayZekaTeknolojileriPageIsland = createPageIsland(
  FeatureYapayZekaTeknolojileriPage,
);
export const FeatureYazilimGelistirmeSurecleriPageIsland = createPageIsland(
  FeatureYazilimGelistirmeSurecleriPage,
);
export const ContactPageIsland = createPageIsland(ContactPage, "marketing");
export const FaqPageIsland = createPageIsland(FaqPage, "marketing");
export const GalleryGridPageIsland = createPageIsland(
  GalleryGridPage,
  "marketing",
);
export const GalleryMasonryPageIsland = createPageIsland(
  GalleryMasonryPage,
  "marketing",
);
export const HakkimizdaPageIsland = createPageIsland(
  HakkimizdaPage,
  "marketing",
);
export const PricingPageIsland = createPageIsland(PricingPage, "marketing");
export const ProjectSinglePageIsland = createPageIsland(
  ProjectSinglePage,
  "marketing",
);
export const ProjectsPageIsland = createPageIsland(ProjectsPage, "marketing");
export const TeamPageIsland = createPageIsland(TeamPage, "marketing");
export const TeamSinglePageIsland = createPageIsland(
  TeamSinglePage,
  "marketing",
);
export const HizmetlerPageIsland = createPageIsland(
  HizmetlerPage,
  "marketing",
);
export const ServiceSinglePageIsland = createPageIsland(
  ServiceSinglePage,
  "marketing",
);

type ServiceDetailIslandProps = RoutedPageProps & {
  service: ServiceCatalogItem;
};

export function ServiceDetailPageIsland({
  pathname,
  locale = "tr",
  service,
}: ServiceDetailIslandProps) {
  return (
    <AppShell pathname={pathname} locale={locale} sharedLayout="marketing">
      <ServiceDetailPage service={service} />
    </AppShell>
  );
}
