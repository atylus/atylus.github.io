"use client";

import { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import type { ForceThemeModeProps } from "@/types/common";
import { useUi } from "@/context/UiContext";

export type { ForceThemeModeProps } from "@/types/common";

export default function ForceThemeMode({ mode }: ForceThemeModeProps) {
  const { setDark } = useTheme();
  const { setShowModeSwitcher } = useUi();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setShowModeSwitcher(false);
    const prevIsDark =
      typeof localStorage !== "undefined" &&
      localStorage.getItem("themeMode") !== "inactive";

    const targetIsDark = mode === "dark";
    setDark(targetIsDark);

    return () => {
      setDark(prevIsDark);
      setShowModeSwitcher(true);
    };
  }, [setDark, mode, setShowModeSwitcher]);

  return null;
}
