"use client";

import {
  createContext,
  useContext,
  type PropsWithChildren,
} from "react";

import {
  DEFAULT_LOCALE,
  type SupportedLocale,
} from "./config";

const LocaleContext = createContext<SupportedLocale>(DEFAULT_LOCALE);

export function LocaleProvider({
  locale,
  children,
}: PropsWithChildren<{ locale: SupportedLocale }>) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
