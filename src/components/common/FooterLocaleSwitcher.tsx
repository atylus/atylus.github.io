"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import {
  LOCALE_LABELS,
  SUPPORTED_LOCALES,
} from "@/i18n/config";
import { resolveLocaleVariantPath } from "@/i18n/pathname";
import { useLocale, useRouter } from "@/compat/next/navigation";

export default function FooterLocaleSwitcher({
  ariaLabel,
}: {
  ariaLabel: string;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const options = useMemo(
    () =>
      SUPPORTED_LOCALES.map((item) => ({
        code: item.toUpperCase(),
        label: LOCALE_LABELS[item],
        href: resolveLocaleVariantPath(pathname, item),
      })),
    [pathname],
  );

  if (options.length === 0) {
    return null;
  }

  return (
    <div className="footer-language-select">
      <label className="footer-language-select__label" htmlFor="footer-language-select">
        {ariaLabel}
      </label>
      <div className="footer-language-select__control">
        <select
          id="footer-language-select"
          aria-label={ariaLabel}
          className="footer-language-select__input"
          value={locale}
          onChange={(event) => {
            const nextOption = options.find(
              (option) => option.code.toLowerCase() === event.target.value,
            );

            if (nextOption) {
              router.push(nextOption.href);
            }
          }}
        >
          {options.map((option) => (
            <option key={option.code} value={option.code.toLowerCase()}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="footer-language-select__icon" aria-hidden="true">
          <i className="fa fa-angle-down" />
        </span>
      </div>
      <style>{`
        .footer-language-select {
          min-width: 168px;
        }

        .footer-language-select__label {
          display: block;
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.72);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .footer-language-select__control {
          position: relative;
        }

        .footer-language-select__input {
          width: 100%;
          appearance: none;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;
          background:
            linear-gradient(135deg, rgba(89, 212, 208, 0.12), rgba(123, 97, 255, 0.08)),
            rgba(255, 255, 255, 0.05);
          color: #fff;
          padding: 13px 46px 13px 18px;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.2;
          outline: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          cursor: pointer;
        }

        .footer-language-select__input:hover,
        .footer-language-select__input:focus {
          border-color: rgba(89, 212, 208, 0.45);
          box-shadow: 0 0 0 4px rgba(89, 212, 208, 0.08);
        }

        .footer-language-select__input option {
          color: #fff;
          background: #171717;
        }

        .footer-language-select__icon {
          position: absolute;
          top: 50%;
          right: 18px;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.78);
          pointer-events: none;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
