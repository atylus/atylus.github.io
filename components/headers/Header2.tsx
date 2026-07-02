"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Nav2 from "./Nav2";
import SideMenuToggler from "../common/SideMenuToggler";
import SearchToggler from "../common/SearchToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
import ThemeLogo from "../common/ThemeLogo";
export default function Header2({
  className = "vs-header13",
  stickyClass = "sticky-active v13 is-sticky",
  SideMenuTogglerClass = "menu-toggle",
}: {
  className?: string;
  stickyClass?: string;
  SideMenuTogglerClass?: string;
}) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsSticky(window.scrollY > 100);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setIsSticky(window.scrollY > 100);
      });
    };
  }, []);
  return (
    <header className={` ${isSticky ? stickyClass : className}`}>
      <div className="container2 position-relative">
        <div className="header-menu-area3">
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <SideMenuToggler SideMenuTogglerClass={SideMenuTogglerClass} />
                <Link href={`/`}>
                  <ThemeLogo alt="logo" size="compact" />
                </Link>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu menu-style1">
                <ul>
                  <Nav2 />
                </ul>
              </nav>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="btn-box">
                <SearchToggler />
                <Link
                  href={`/contact`}
                  title=""
                  className="ibt-btn ibt-btn-outline-3 ibt-btn-rounded"
                >
                  <span>Bize Ulaşın</span>
                </Link>
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
    </header>
  );
}
