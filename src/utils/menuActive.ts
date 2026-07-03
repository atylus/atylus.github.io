import type { MobileMenuItem } from "@/types/menu";

function normalize(path?: string) {
  if (!path) {
    return "";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, "") || "/";
}

export function isLinkActive(pathname: string, href?: string) {
  if (!href || href === "#") return false;
  const normalizedPathname = normalize(pathname);
  const normalizedHref = normalize(href);

  if (normalizedHref === "/index") {
    return normalizedPathname === "/" || normalizedPathname === "/index";
  }

  return normalizedPathname === normalizedHref;
}

export function itemHasActiveDescendant(
  pathname: string,
  item: MobileMenuItem,
): boolean {
  if (isLinkActive(pathname, item.href)) return true;
  return (item.children ?? []).some((child) =>
    itemHasActiveDescendant(pathname, child),
  );
}
