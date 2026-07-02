"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SearchToggler from "../common/SearchToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
import SideMenuToggler2 from "../common/SideMenuToggler2";
import ThemeLogo from "../common/ThemeLogo";

export default function Header3({
  className = "vs-header11",
  stickyClass = "sticky-active v11 is-sticky",
}: {
  className?: string;
  stickyClass?: string;
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
        <div className="header-menu-area11">
          <div className="row gx-20 align-items-center justify-content-between">
            <div className="col-auto col">
              <div className="header-logo11">
                <Link href={`/`}>
                  <ThemeLogo alt="logo" size="compact" />
                </Link>
              </div>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="btn-box">
                <a href="tel:8003508431" title="" className="header-contact11">
                  +1 800 684 32 59
                </a>
                <SearchToggler />
                <div className="menu-btn3">
                  <h4 className="title">menu</h4>
                  <SideMenuToggler2 />
                </div>
              </div>
            </div>
          </div>
          <MobileMenuToggler />
        </div>
      </div>
    </header>
  );
}
