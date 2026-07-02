"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mobileMenuItems } from "@/data/mobileMenu";
import type { MobileMenuItem } from "@/types/menu";
import Image from "next/image";
import { useUi } from "@/context/UiContext";
import { itemHasActiveDescendant } from "@/utils/menuActive";
import SubTitleWrapper from "../common/SubTitleWrapper";

type OpenItemsState = Set<string>;

function renderMenuItems(
  items: MobileMenuItem[],
  parentKey: string,
  openItems: OpenItemsState,
  toggleItem: (key: string, parentKey: string) => void,
  pathname: string,
) {
  return items.map((item, index) => {
    const itemKey = parentKey ? `${parentKey}-${index}` : `${index}`;
    const hasChildren =
      Array.isArray(item.children) && item.children.length > 0;
    const isOpen = openItems.has(itemKey);
    const isActive = itemHasActiveDescendant(pathname, item);
    const liClassName =
      [
        item.liClassName,
        isOpen ? "active" : undefined,
        isActive ? "active" : undefined,
      ]
        .filter(Boolean)
        .join(" ") || undefined;

    const href = item.href ?? "#";
    const isInternalLink = href.startsWith("/");

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    ) => {
      if (hasChildren) {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(itemKey, parentKey);
      }
    };

    const linkClassName = isActive ? "active" : undefined;

    const labelContent = isInternalLink ? (
      <Link href={href} onClick={handleClick} className={linkClassName}>
        {item.label}
      </Link>
    ) : (
      <a href={href} onClick={handleClick} className={linkClassName}>
        {item.label}
      </a>
    );

    return (
      <li key={item.label} className={liClassName}>
        {labelContent}
        {hasChildren && (
          <ul className={`inner-menu ${isOpen ? "active" : ""}`}>
            {renderMenuItems(
              item.children!,
              itemKey,
              openItems,
              toggleItem,
              pathname,
            )}
          </ul>
        )}
      </li>
    );
  });
}

export default function Sidemenu2() {
  const [openItems, setOpenItems] = useState<OpenItemsState>(new Set());
  const { sideMenu3Open, closeSideMenu3 } = useUi();
  const pathname = usePathname();

  const toggleItem = (key: string, parentKey: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);

      if (next.has(key)) {
        next.delete(key);
        return next;
      }

      // Close other items at the same level (accordion behavior)
      const prefix = `${parentKey}-`;
      for (const itemKey of Array.from(next)) {
        if (itemKey === key || itemKey.startsWith(prefix)) {
          next.delete(itemKey);
        }
      }

      next.add(key);
      return next;
    });
  };

  // Close menu and reset accordion when route changes (not when menu opens)
  useEffect(() => {
    closeSideMenu3();
    queueMicrotask(() => setOpenItems(new Set()));
  }, [pathname, closeSideMenu3]);

  return (
    <div
      className={`side-menu3 ${sideMenu3Open ? "active" : ""}`}
      data-menu="menu3"
    >
      <div className="close-btn" onClick={closeSideMenu3}>
        <i className="fa fa-close" />
        <span>Close</span>
      </div>
      <div className="menu-inner">
        {/* Left Navigation */}
        <div className="menu-left">
          <ul>
            {renderMenuItems(
              mobileMenuItems,
              "root",
              openItems,
              toggleItem,
              pathname,
            )}
          </ul>
        </div>
        {/* Right Contact Info */}
        <div className="menu-right">
          <SubTitleWrapper>İletişim</SubTitleWrapper>
          <p>USA, New York - 1060 Str. First Avenue 1</p>
          <a href="tel:+13685678954" title="" className="nmbr">
            800 100 975 20 34
          </a>
          <a href="tel:+13685678954" title="" className="nmbr">
            + (123) 1800-234-5678
          </a>
          <a href="mailto:atylus@mail.co" className="email">
            atylus@mail.co
          </a>
          <ul className="social-icon">
            <li>
              <a href="www.facebook.com" title="">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://x.com/i/flow/login?lang=en" title="">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linked.com" title="">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com" title="">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          <a
            href="#"
            title=""
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
          >
            <span>Bize Ulaşın</span>
          </a>
        </div>
        <Image
          src="/assets/images/bg/header-menu-bg.png"
          alt="AI Agency & Technology HTML Template"
          className="shape"
          width={1000}
          height={272}
        />
      </div>
      <div className="alter-menu-decorate" />
    </div>
  );
}
