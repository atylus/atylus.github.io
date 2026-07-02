"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useVideoModal } from "@/context/VideoModalContext";
type ContactButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  "data-video"?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className">;
export default function ContactButton({
  children,
  href = "#",
  className,
  target,
  rel,
  "data-video": dataVideo,
  ...rest
}: ContactButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const borderOuterRef = useRef<HTMLSpanElement>(null);
  const borderInnerRef = useRef<HTMLSpanElement>(null);
  const { openModal } = useVideoModal();

  useEffect(() => {
    const btn = btnRef.current;
    const text = textRef.current;
    const outer = borderOuterRef.current;
    const inner = borderInnerRef.current;

    if (!btn || !text || !outer || !inner) return;

    let moveTimeout: ReturnType<typeof setTimeout> | undefined;

    const handleMouseMove = (e: MouseEvent) => {
      if (moveTimeout) clearTimeout(moveTimeout);

      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(inner, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.08,
        ease: "power2.out",
      });

      gsap.to(outer, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.25,
        ease: "power2.out",
      });

      gsap.to(text, {
        x: x * 0.1,
        y: y * 0.1,
        duration: 0.2,
        ease: "power2.out",
      });

      moveTimeout = setTimeout(() => {
        gsap.to([inner, outer], {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.2,
          ease: "power2.out",
        });
        gsap.to(text, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.25,
          ease: "power2.out",
        });
      }, 100);
    };

    const handleMouseLeave = () => {
      if (moveTimeout) clearTimeout(moveTimeout);
      gsap.to([inner, outer, text], {
        x: 0,
        y: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (moveTimeout) clearTimeout(moveTimeout);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const classNames = ["contact-btn", className].filter(Boolean).join(" ");
  const anchorProps = {
    ref: btnRef,
    className: classNames,
    target,
    rel,
    ...(dataVideo
      ? {
          href: "#",
          onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            openModal(dataVideo);
          },
        }
      : {}),
    ...rest,
  };

  const content = (
    <>
      <span ref={textRef} className="text">
        {children}
      </span>
      <span ref={borderOuterRef} className="border-outer" />
      <span ref={borderInnerRef} className="border-inner" />
    </>
  );

  if (href === "#" || dataVideo != null) {
    return (
      <a href={href} data-video={dataVideo} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} {...anchorProps}>
      {content}
    </Link>
  );
}
