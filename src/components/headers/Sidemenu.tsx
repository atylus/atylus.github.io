"use client";
import Link from "next/link";

import { useUi } from "@/context/UiContext";
import ThemeLogo from "../common/ThemeLogo";

export default function Sidemenu() {
  const { closeSideNav, sideNavOpen } = useUi();
  return (
    <div className={`side-menu ${sideNavOpen ? "active" : ""}`} id="sideMenu">
      <div
        className={`overlay ${sideNavOpen ? "active" : ""}`}
        id="overlay"
        onClick={closeSideNav}
      />
      <a href="#" className="close-btn" id="closeBtn" onClick={closeSideNav}>
        <i className="fa fa-close" /> close
      </a>
      <div className="menu-content">
        <Link href={`/`} className="logo">
          <ThemeLogo alt="logo" size="compact" />
        </Link>
        <div className="sidebar-menu">
          <h4 className="title">contacts</h4>
          <p>
            USA, New York - 1060 <br />
            Str. First Avenue 1
          </p>
          <a href="tel:+13685678954" title="" className="nmbr">
            800 100 975 20 34
          </a>
          <a href="tel:8003508431" title="" className="nmbr">
            + (123) 1800-234-5678
          </a>
          <a href="mailto:atylus@mail.co" className="email">
            atylus@mail.co
          </a>
          <a
            href="#"
            title=""
            className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
          >
            <span>Bize Ulaşın</span>
          </a>
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
