"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type ScrollRevealRootProps = {
  children: ReactNode;
  /** GSAP from vars (initial state) */
  from?: gsap.TweenVars;
  /** GSAP to vars (animate to) */
  to?: gsap.TweenVars;
  duration?: number;
  ease?: string;
  /** Delay added per item index (stagger). Final delay = index * staggerDelay */
  staggerDelay?: number;
  scrollTrigger?: {
    start?: string;
    end?: string;
    once?: boolean;
    toggleActions?: string;
  };
};

type ScrollRevealContextValue = {
  registerElement: (el: HTMLElement | null) => void;
  unregisterElement: (el: HTMLElement) => void;
};

const ScrollRevealContext = createContext<ScrollRevealContextValue | null>(
  null,
);

function useScrollReveal() {
  const ctx = useContext(ScrollRevealContext);
  return (
    ctx ?? {
      registerElement: () => {},
      unregisterElement: () => {},
    }
  );
}

const defaultFrom = { y: 80, opacity: 0 };
const defaultTo = { y: 0, opacity: 1 };

function ScrollRevealRoot({
  children,
  from = defaultFrom,
  to = defaultTo,
  duration = 0.8,
  ease = "power3.out",
  staggerDelay = 0.03,
  scrollTrigger: stOpts = {},
}: ScrollRevealRootProps) {
  const elementsRef = useRef<HTMLElement[]>([]);
  const triggersRef = useRef<Map<HTMLElement, ScrollTrigger>>(new Map());
  const initializedRef = useRef<Set<HTMLElement>>(new Set());
  const [count, setCount] = useState(0);

  const registerElement = useCallback((el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current = [...elementsRef.current, el];
      setCount((c) => c + 1);
    }
  }, []);

  const unregisterElement = useCallback((el: HTMLElement) => {
    const st = triggersRef.current.get(el);
    if (st) {
      st.kill();
      triggersRef.current.delete(el);
    }
    elementsRef.current = elementsRef.current.filter((e) => e !== el);
    initializedRef.current.delete(el);
    setCount((c) => Math.max(0, c - 1));
  }, []);

  useEffect(() => {
    const elements = elementsRef.current;
    const scrollTrigger = {
      start: stOpts.start ?? "top 95%",
      end: stOpts.end ?? "bottom 80%",
      toggleActions: stOpts.toggleActions ?? "play none none none",
      once: stOpts.once ?? true,
    };

    elements.forEach((el, i) => {
      if (initializedRef.current.has(el)) return;
      const tween = gsap.fromTo(
        el,
        { ...defaultFrom, ...from },
        {
          ...defaultTo,
          ...to,
          duration,
          ease,
          delay: i * staggerDelay,
          scrollTrigger: {
            trigger: el,
            ...scrollTrigger,
          },
        },
      );
      const st = (tween as gsap.core.Tween & { scrollTrigger?: ScrollTrigger })
        .scrollTrigger;
      if (st) triggersRef.current.set(el, st);
      initializedRef.current.add(el);
    });
  }, [
    count,
    duration,
    ease,
    from,
    stOpts.end,
    stOpts.once,
    stOpts.start,
    stOpts.toggleActions,
    staggerDelay,
    to,
  ]);

  return (
    <ScrollRevealContext.Provider
      value={{ registerElement, unregisterElement }}
    >
      {children}
    </ScrollRevealContext.Provider>
  );
}

export type ScrollRevealItemProps = {
  className?: string;
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function ScrollRevealItem({
  className,
  children,
  ...props
}: ScrollRevealItemProps) {
  const { registerElement, unregisterElement } = useScrollReveal();
  const elRef = useRef<HTMLDivElement | null>(null);

  const refCallback = useCallback(
    (el: HTMLDivElement | null) => {
      if (elRef.current) unregisterElement(elRef.current);
      elRef.current = el;
      if (el) registerElement(el);
    },
    [registerElement, unregisterElement],
  );

  return (
    <div ref={refCallback} className={className} {...props}>
      {children}
    </div>
  );
}

export const ScrollReveal = {
  Root: ScrollRevealRoot,
  Item: ScrollRevealItem,
};
