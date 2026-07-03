export const SUPPORTED_LOCALES = ["tr", "en", "de"] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = "tr";
export const LOCALE_COOKIE_NAME = "atylus_locale";
export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  tr: "Turkce",
  en: "English",
  de: "Deutsch",
};

export const LOCALE_LANGUAGE_TAGS: Record<SupportedLocale, string> = {
  tr: "tr-TR",
  en: "en-US",
  de: "de-DE",
};

export function isSupportedLocale(value: string): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

export function normalizeLocale(value?: string | null): SupportedLocale {
  if (value && isSupportedLocale(value)) {
    return value;
  }

  return DEFAULT_LOCALE;
}
