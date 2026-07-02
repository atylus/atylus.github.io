"use client";

import {
  createContext,
  useContext,
  type PropsWithChildren,
  type ReactNode,
} from "react";

const PathnameContext = createContext("/");

export function PathnameProvider({
  pathname,
  children,
}: PropsWithChildren<{ pathname: string }>) {
  return (
    <PathnameContext.Provider value={pathname}>
      {children}
    </PathnameContext.Provider>
  );
}

export function usePathname() {
  return useContext(PathnameContext);
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
