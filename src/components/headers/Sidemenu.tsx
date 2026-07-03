"use client";
import Link from "next/link";

import { useUi } from "@/context/UiContext";
import { useLocale } from "@/compat/next/navigation";
import { getUiCopy } from "@/i18n/content";
import { getLocalizedPagePath } from "@/i18n/routes";
import ThemeLogo from "../common/ThemeLogo";

export default function Sidemenu() {
  const { closeSideNav, sideNavOpen } = useUi();
  const locale = useLocale();
  const ui = getUiCopy(locale);
  return (
    <div className={`side-menu ${sideNavOpen ? "active" : ""}`} id="sideMenu">
      <div
        className={`overlay ${sideNavOpen ? "active" : ""}`}
        id="overlay"
        onClick={closeSideNav}
      />
      <a href="#" className="close-btn" id="closeBtn" onClick={closeSideNav}>
        <i className="fa fa-close" /> {ui.sidebar.close}
      </a>
      <div className="menu-content">
        <Link href={`/${locale}/`} className="logo">
          <ThemeLogo alt="logo" size="compact" />
        </Link>
        <div className="sidebar-menu">
          <h4 className="title">{ui.sidebar.contacts}</h4>
          <p>
            {ui.contact.locationLines[0]} <br />
            {ui.contact.locationLines[1]}
          </p>
          <a href="mailto:info@atylus.com" className="email">
            info@atylus.com
          </a>
          <Link
            href={getLocalizedPagePath(locale, "contact")}
            title=""
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
          >
            <span>{ui.nav.contactCta}</span>
          </Link>
        </div>
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
      </div>
    </div>
  );
}
