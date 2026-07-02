"use client";

import type { ComponentType } from "react";

import HomePage from "@/legacy-app/page";
import BlogPage from "@/legacy-app/(blog)/blog/page";
import BlogSinglePage from "@/legacy-app/(blog)/blog-single/page";
import FeatureBilgisayarliGoruCozumleriPage from "@/legacy-app/(features)/bilgisayarli-goru-cozumleri/page";
import FeatureOngoruselVeriAnalitigiPage from "@/legacy-app/(features)/ongorusel-veri-analitigi/page";
import FeatureOzelYazilimCozumleriPage from "@/legacy-app/(features)/ozel-yazilim-cozumleri/page";
import FeatureYapaySinirAgiGelistirmePage from "@/legacy-app/(features)/yapay-sinir-agi-gelistirme/page";
import FeatureYapayZekaDanismanligiPage from "@/legacy-app/(features)/yapay-zeka-danismanligi/page";
import FeatureYapayZekaSistemEntegrasyonuPage from "@/legacy-app/(features)/yapay-zeka-sistem-entegrasyonu/page";
import FeatureYapayZekaTeknolojileriPage from "@/legacy-app/(features)/yapay-zeka-teknolojileri/page";
import FeatureYazilimGelistirmeSurecleriPage from "@/legacy-app/(features)/yazilim-gelistirme-surecleri/page";
import ContactPage from "@/legacy-app/(inner-pages)/contact/page";
import FaqPage from "@/legacy-app/(inner-pages)/faq/page";
import GalleryGridPage from "@/legacy-app/(inner-pages)/gallery-grid/page";
import GalleryMasonryPage from "@/legacy-app/(inner-pages)/gallery-masonry/page";
import HakkimizdaPage from "@/legacy-app/(inner-pages)/hakkimizda/page";
import PricingPage from "@/legacy-app/(inner-pages)/pricing/page";
import ProjectSinglePage from "@/legacy-app/(inner-pages)/project-single/page";
import ProjectsPage from "@/legacy-app/(inner-pages)/projects/page";
import TeamPage from "@/legacy-app/(inner-pages)/team/page";
import TeamSinglePage from "@/legacy-app/(inner-pages)/team-single/page";
import HizmetlerPage from "@/legacy-app/(services)/hizmetler/page";
import ServiceSinglePage from "@/legacy-app/(services)/service-single/page";
import type { ServiceCatalogItem } from "@/types/services";

import LegacyAppShell from "./LegacyAppShell";
import ServiceDetailPage from "./ServiceDetailPage";

type LegacyRouteId =
  | "home"
  | "blog"
  | "blog-single"
  | "bilgisayarli-goru-cozumleri"
  | "contact"
  | "faq"
  | "gallery-grid"
  | "gallery-masonry"
  | "hakkimizda"
  | "hizmetler"
  | "ongorusel-veri-analitigi"
  | "ozel-yazilim-cozumleri"
  | "pricing"
  | "project-single"
  | "projects"
  | "service-detail"
  | "service-single"
  | "team"
  | "team-single"
  | "yapay-sinir-agi-gelistirme"
  | "yapay-zeka-danismanligi"
  | "yapay-zeka-sistem-entegrasyonu"
  | "yapay-zeka-teknolojileri"
  | "yazilim-gelistirme-surecleri";

type LegacyRouteRendererProps = {
  routeId: LegacyRouteId;
  pathname: string;
  sharedLayout?: "none" | "marketing";
  service?: ServiceCatalogItem;
};

const routeMap = {
  home: HomePage,
  blog: BlogPage,
  "blog-single": BlogSinglePage,
  "bilgisayarli-goru-cozumleri": FeatureBilgisayarliGoruCozumleriPage,
  contact: ContactPage,
  faq: FaqPage,
  "gallery-grid": GalleryGridPage,
  "gallery-masonry": GalleryMasonryPage,
  hakkimizda: HakkimizdaPage,
  hizmetler: HizmetlerPage,
  "ongorusel-veri-analitigi": FeatureOngoruselVeriAnalitigiPage,
  "ozel-yazilim-cozumleri": FeatureOzelYazilimCozumleriPage,
  pricing: PricingPage,
  "project-single": ProjectSinglePage,
  projects: ProjectsPage,
  "service-single": ServiceSinglePage,
  team: TeamPage,
  "team-single": TeamSinglePage,
  "yapay-sinir-agi-gelistirme": FeatureYapaySinirAgiGelistirmePage,
  "yapay-zeka-danismanligi": FeatureYapayZekaDanismanligiPage,
  "yapay-zeka-sistem-entegrasyonu": FeatureYapayZekaSistemEntegrasyonuPage,
  "yapay-zeka-teknolojileri": FeatureYapayZekaTeknolojileriPage,
  "yazilim-gelistirme-surecleri": FeatureYazilimGelistirmeSurecleriPage,
} satisfies Partial<Record<LegacyRouteId, ComponentType>>;

export default function LegacyRouteRenderer({
  routeId,
  pathname,
  sharedLayout = "none",
  service,
}: LegacyRouteRendererProps) {
  const content =
    routeId === "service-detail" ? (
      service ? (
        <ServiceDetailPage service={service} />
      ) : null
    ) : (() => {
        const RouteComponent = routeMap[routeId];
        return RouteComponent ? <RouteComponent /> : null;
      })();

  return (
    <LegacyAppShell pathname={pathname} sharedLayout={sharedLayout}>
      {content}
    </LegacyAppShell>
  );
}
