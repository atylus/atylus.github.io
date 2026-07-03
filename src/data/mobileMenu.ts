import type { SupportedLocale } from "@/i18n/config";
import { getMobileMenuItems as getLocalizedMobileMenuItems } from "@/data/site";
import type { MobileMenuItem } from "@/types/menu";

export function getMobileMenuItems(locale: SupportedLocale): MobileMenuItem[] {
  return getLocalizedMobileMenuItems(locale);
}

export const mobileMenuItems: MobileMenuItem[] = getMobileMenuItems("tr");
