"use client";

import { useUi } from "@/context/UiContext";

export default function SideMenuToggler2() {
  const { toggleSideMenu3 } = useUi();

  return (
    <button
      type="button"
      className="hamburger3 popup-menu3"
      data-menu="menu3"
      onClick={toggleSideMenu3}
      aria-label="Toggle side menu"
    >
      <span />
      <span />
    </button>
  );
}
