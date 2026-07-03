import type { ComponentType } from "react";

import type { SupportedLocale } from "./config";
import type { MarketingPageKey } from "./routes";
import { getPageSeo } from "./content";
import {
  ContactPageIsland,
  FaqPageIsland,
  FeatureBilgisayarliGoruCozumleriPageIsland,
  FeatureOngoruselVeriAnalitigiPageIsland,
  FeatureOzelYazilimCozumleriPageIsland,
  FeatureYapaySinirAgiGelistirmePageIsland,
  FeatureYapayZekaDanismanligiPageIsland,
  FeatureYapayZekaSistemEntegrasyonuPageIsland,
  FeatureYapayZekaTeknolojileriPageIsland,
  FeatureYazilimGelistirmeSurecleriPageIsland,
  GalleryGridPageIsland,
  GalleryMasonryPageIsland,
  HakkimizdaPageIsland,
  HizmetlerPageIsland,
  HomePageIsland,
  PricingPageIsland,
  ProjectsPageIsland,
  TeamPageIsland,
  TeamSinglePageIsland,
} from "@/components/app/PageIslands";

type PageIslandComponent = ComponentType<{
  pathname: string;
  locale: SupportedLocale;
}>;

export type MarketingPageDefinition = {
  island: PageIslandComponent;
  getSeo: (locale: SupportedLocale) => {
    title: string;
    description: string;
  };
};

export const marketingPageRegistry: Record<
  MarketingPageKey,
  MarketingPageDefinition
> = {
  home: {
    island: HomePageIsland,
    getSeo: (locale) => getPageSeo(locale, "home"),
  },
  about: {
    island: HakkimizdaPageIsland,
    getSeo: (locale) => getPageSeo(locale, "about"),
  },
  contact: {
    island: ContactPageIsland,
    getSeo: (locale) => getPageSeo(locale, "contact"),
  },
  services: {
    island: HizmetlerPageIsland,
    getSeo: (locale) => getPageSeo(locale, "services"),
  },
  projects: {
    island: ProjectsPageIsland,
    getSeo: (locale) => getPageSeo(locale, "projects"),
  },
  faq: {
    island: FaqPageIsland,
    getSeo: (locale) => getPageSeo(locale, "faq"),
  },
  pricing: {
    island: PricingPageIsland,
    getSeo: (locale) => getPageSeo(locale, "pricing"),
  },
  team: {
    island: TeamPageIsland,
    getSeo: (locale) => getPageSeo(locale, "team"),
  },
  teamMember: {
    island: TeamSinglePageIsland,
    getSeo: (locale) => getPageSeo(locale, "teamMember"),
  },
  galleryGrid: {
    island: GalleryGridPageIsland,
    getSeo: (locale) => getPageSeo(locale, "galleryGrid"),
  },
  galleryMasonry: {
    island: GalleryMasonryPageIsland,
    getSeo: (locale) => getPageSeo(locale, "galleryMasonry"),
  },
  computerVisionSolutions: {
    island: FeatureBilgisayarliGoruCozumleriPageIsland,
    getSeo: (locale) => getPageSeo(locale, "computerVisionSolutions"),
  },
  predictiveAnalytics: {
    island: FeatureOngoruselVeriAnalitigiPageIsland,
    getSeo: (locale) => getPageSeo(locale, "predictiveAnalytics"),
  },
  customSoftwareSolutions: {
    island: FeatureOzelYazilimCozumleriPageIsland,
    getSeo: (locale) => getPageSeo(locale, "customSoftwareSolutions"),
  },
  neuralNetworkDevelopment: {
    island: FeatureYapaySinirAgiGelistirmePageIsland,
    getSeo: (locale) => getPageSeo(locale, "neuralNetworkDevelopment"),
  },
  aiConsulting: {
    island: FeatureYapayZekaDanismanligiPageIsland,
    getSeo: (locale) => getPageSeo(locale, "aiConsulting"),
  },
  aiSystemIntegration: {
    island: FeatureYapayZekaSistemEntegrasyonuPageIsland,
    getSeo: (locale) => getPageSeo(locale, "aiSystemIntegration"),
  },
  aiTechnologies: {
    island: FeatureYapayZekaTeknolojileriPageIsland,
    getSeo: (locale) => getPageSeo(locale, "aiTechnologies"),
  },
  softwareDevelopmentProcesses: {
    island: FeatureYazilimGelistirmeSurecleriPageIsland,
    getSeo: (locale) => getPageSeo(locale, "softwareDevelopmentProcesses"),
  },
};
