"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
} from "@/i18n/config";
import { resolveLocaleVariantPath } from "@/i18n/pathname";
import { useLocale } from "@/compat/next/navigation";

export default function FooterLocaleSwitcher({
  ariaLabel,
}: {
  ariaLabel: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();

  const options = useMemo(
    () =>
      SUPPORTED_LOCALES.filter((item) => item !== locale).map((item) => ({
        code: item.toUpperCase(),
        label: LOCALE_LABELS[item],
        href: resolveLocaleVariantPath(pathname, item),
      })),
    [locale, pathname],
  );

  if (options.length === 0) {
    return null;
  }

  return (
    <details className="footer-language-switcher">
      <summary aria-label={ariaLabel}>
        <span className="footer-language-switcher__code">
          {locale.toUpperCase()}
        </span>
        <span className="footer-language-switcher__chevron">v</span>
      </summary>
      <ul className="footer-language-switcher__menu">
        {options.map((option) => (
          <li key={option.code}>
            <Link href={option.href}>{option.label}</Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
