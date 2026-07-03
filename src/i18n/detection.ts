import {
  DEFAULT_LOCALE,
  type SupportedLocale,
} from "./config";
import { getPreferredLocaleFromCookie } from "./pathname";

const localePatterns: Array<[SupportedLocale, RegExp]> = [
  ["tr", /^tr(?:-|$)/i],
  ["en", /^en(?:-|$)/i],
  ["de", /^de(?:-|$)/i],
];

export function getPreferredLocaleFromAcceptLanguage(
  acceptLanguageHeader?: string | null,
): SupportedLocale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE;
  }

  const parsedLanguages = acceptLanguageHeader
    .split(",")
    .map((item) => {
      const [languageRange, ...params] = item.trim().split(";");
      const quality = params.find((param) => param.trim().startsWith("q="));
      const weight = quality ? Number(quality.trim().slice(2)) : 1;

      return {
        languageRange: languageRange.trim(),
        weight: Number.isFinite(weight) ? weight : 0,
      };
    })
    .sort((left, right) => right.weight - left.weight);

  for (const candidate of parsedLanguages) {
    const match = localePatterns.find(([, pattern]) =>
      pattern.test(candidate.languageRange),
    );

    if (match) {
      return match[0];
    }
  }

  return DEFAULT_LOCALE;
}

export function resolvePreferredLocale(input: {
  cookieHeader?: string | null;
  acceptLanguageHeader?: string | null;
}): SupportedLocale {
  const localeFromCookie = getPreferredLocaleFromCookie(input.cookieHeader);
  if (input.cookieHeader?.includes("atylus_locale=")) {
    return localeFromCookie;
  }

  return getPreferredLocaleFromAcceptLanguage(input.acceptLanguageHeader);
}
