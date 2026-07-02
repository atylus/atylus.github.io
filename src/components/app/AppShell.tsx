"use client";

import type { ReactNode } from "react";

import ScrollToTop from "@/components/common/ScrollToTop";
import SmoothScroll from "@/components/common/SmoothScroll";
import SubTitleSplitProvider from "@/components/common/SubTitleSplitProvider";
import TitleSplitProvider from "@/components/common/TitleSplitProvider";
import Preloader from "@/components/common/Preloader";
import SearchPopup from "@/components/common/SearchPopup";
import MobileMenu from "@/components/headers/MobileMenu";
import Sidemenu from "@/components/headers/Sidemenu";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import { CartProvider } from "@/context/CartContext";
import { LenisProvider } from "@/context/LenisContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { UiProvider } from "@/context/UiContext";
import { VideoModalProvider } from "@/context/VideoModalContext";
import { PathnameProvider } from "@/src/compat/next/navigation";

export type SharedLayoutMode = "none" | "marketing";

type AppShellProps = {
  pathname: string;
  sharedLayout?: SharedLayoutMode;
  children: ReactNode;
};

function SharedMarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header1 menuClass="header-menu-area3" className="vs-header3" />
      {children}
      <section className="main-sec">
        <Contact />
        <Footer1 />
      </section>
    </>
  );
}

export default function AppShell({
  pathname,
  sharedLayout = "none",
  children,
}: AppShellProps) {
  const content =
    sharedLayout === "marketing" ? (
      <SharedMarketingLayout>{children}</SharedMarketingLayout>
    ) : (
      children
    );

  return (
    <PathnameProvider pathname={pathname}>
      <LenisProvider>
        <SmoothScroll>
          <UiProvider>
            <ThemeProvider>
              <CartProvider>
                <VideoModalProvider>
                  <TitleSplitProvider>
                    <SubTitleSplitProvider>
                      <Preloader />
                      {content}
                      <ScrollToTop />
                    </SubTitleSplitProvider>
                  </TitleSplitProvider>
                  <Sidemenu />
                  <SearchPopup />
                  <MobileMenu />
                </VideoModalProvider>
              </CartProvider>
            </ThemeProvider>
          </UiProvider>
        </SmoothScroll>
      </LenisProvider>
    </PathnameProvider>
  );
}
