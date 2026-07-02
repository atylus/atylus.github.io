"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import SideMenuToggler from "../common/SideMenuToggler";
import SearchToggler from "../common/SearchToggler";
import MobileMenuToggler from "../common/MobileMenuToggler";
import ThemeLogo from "../common/ThemeLogo";

export default function Header4({
  className = "vs-header4",
  menuClass = "header-menu-area",
  headerBottomClass = "header-bottom",
  navClass = "menu-style1 v4",
}: {
  className?: string;
  menuClass?: string;
  headerBottomClass?: string;
  navClass?: string;
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
    <header className={` ${isSticky ? "" : className}`}>
      <div className="header-top4">
        <div className="container-fluid">
          <div className="header-top-content4">
            <ul className="top-bar-contacts">
              <li>
                <span className="contact-item-title">Call us:</span>
                <a href="tel:+18005291037">+1 800 529 10 37</a>
              </li>
              <li>
                <span className="contact-item-title">Email:</span>
                <a href="mailto:atylus@mail.co">atylus@mail.co</a>
              </li>
            </ul>
            <ul className="top-bar-socials">
              <li>
                <span>Folow us:</span>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={headerBottomClass}>
        <div
          className={
            isSticky
              ? "sticky-active is-sticky"
              : "container2 position-relative"
          }
        >
          <div className={menuClass}>
            <div className="row gx-20 align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <SideMenuToggler />
                  <Link href={`/`}>
                    <ThemeLogo alt="logo" size="compact" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className={`main-menu ${navClass}`}>
                  <ul>
                    <Nav />
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
      </div>
    </header>
  );
}
