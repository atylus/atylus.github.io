import type { AnchorHTMLAttributes, ForwardedRef } from "react";
import { forwardRef } from "react";

import { DEFAULT_LOCALE } from "@/i18n/config";
import { getLocalizedHref } from "@/i18n/routes";
import { useLocale } from "@/compat/next/navigation";

type HrefValue =
  | string
  | URL
  | {
      pathname?: string;
      hash?: string;
      search?: string;
    };

export type LinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: HrefValue;
  prefetch?: boolean;
  replace?: boolean;
  scroll?: boolean;
};

function resolveHref(href: HrefValue) {
  if (typeof href === "string") return href;
  if (href instanceof URL) return href.toString();

  const pathname = href.pathname ?? "";
  const search = href.search ?? "";
  const hash = href.hash ?? "";

  return `${pathname}${search}${hash}`;
}

function Link(
  { href, children, ...props }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  const locale = useLocale();
  const resolvedHref = resolveHref(href);

  return (
    <a
      ref={ref}
      href={getLocalizedHref(resolvedHref, locale || DEFAULT_LOCALE)}
      {...props}
    >
      {children}
    </a>
  );
}

export default forwardRef(Link);
