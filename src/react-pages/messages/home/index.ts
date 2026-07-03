import type { SupportedLocale } from "@/i18n/config";

import de from "./de.json";
import en from "./en.json";
import tr from "./tr.json";

export type HomePageMessages = typeof tr;

const homePageMessagesByLocale: Record<SupportedLocale, HomePageMessages> = {
  tr,
  en,
  de,
};

export function getHomePageMessages(locale: SupportedLocale) {
  return homePageMessagesByLocale[locale];
}
