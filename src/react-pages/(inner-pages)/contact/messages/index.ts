import type { SupportedLocale } from "@/i18n/config";

import de from "./de.json";
import en from "./en.json";
import tr from "./tr.json";

export type ContactPageMessages = typeof tr;

const contactPageMessagesByLocale: Record<SupportedLocale, ContactPageMessages> =
  {
    tr,
    en,
    de,
  };

export function getContactPageMessages(locale: SupportedLocale) {
  return contactPageMessagesByLocale[locale];
}
