import type { SupportedLocale } from "@/i18n/config";

import de from "./de.json";
import en from "./en.json";
import tr from "./tr.json";

export type AboutPageMessages = typeof tr;

const aboutPageMessagesByLocale: Record<SupportedLocale, AboutPageMessages> = {
  tr,
  en,
  de,
};

export function getAboutPageMessages(locale: SupportedLocale) {
  return aboutPageMessagesByLocale[locale];
}
