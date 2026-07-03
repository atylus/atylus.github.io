"use client";

import {
  createContext,
  useContext,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import {
  DEFAULT_LOCALE,
  type SupportedLocale,
} from "@/i18n/config";

const PathnameContext = createContext("/");
const LocaleContext = createContext<SupportedLocale>(DEFAULT_LOCALE);

export function PathnameProvider({
  pathname,
  locale = DEFAULT_LOCALE,
  children,
}: PropsWithChildren<{ pathname: string; locale?: SupportedLocale }>) {
  return (
    <LocaleContext.Provider value={locale}>
      <PathnameContext.Provider value={pathname}>
        {children}
      </PathnameContext.Provider>
    </LocaleContext.Provider>
  );
}

export function usePathname() {
  return useContext(PathnameContext);
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useRouter() {
  return {
    push: (href: string) => {
      if (typeof window !== "undefined") {
        window.location.assign(href);
      }
    },
    replace: (href: string) => {
      if (typeof window !== "undefined") {
        window.location.replace(href);
      }
    },
    back: () => {
      if (typeof window !== "undefined") {
        window.history.back();
      }
    },
  };
}

export function redirect(href: string): never {
  if (typeof window !== "undefined") {
    window.location.assign(href);
  }

  throw new Error(`NEXT_REDIRECT:${href}`);
}

export function notFound(): never {
  throw new Error("NEXT_NOT_FOUND");
}

export function useSearchParams() {
  if (typeof window === "undefined") {
    return new URLSearchParams();
  }

  return new URLSearchParams(window.location.search);
}

export function useParams<TParams extends Record<string, string>>() {
  return {} as TParams;
}

export type NavigationChildren = ReactNode;
