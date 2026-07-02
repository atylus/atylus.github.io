"use client";
import Link from "next/link";

import { useRef } from "react";
import { useOGLDeformEffect, useIsDesktop } from "./useOGLDeformEffect";

const IMAGE_PATH = "/assets/images/bg/hero8.png";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDesktop = useIsDesktop();

  useOGLDeformEffect({
    canvasRef,
    containerRef: sectionRef,
    imagePath: IMAGE_PATH,
    enabled: isDesktop,
  });

  const isMobileStyle = !isDesktop;

  return (
    <section
      ref={sectionRef}
      className="hero-style8"
      style={{
        position: "relative",
        backgroundImage: `url(${IMAGE_PATH})`,
        backgroundSize: isMobileStyle ? "auto" : "cover",
        backgroundPosition: isMobileStyle ? "center -156px" : "center",
        backgroundRepeat: isMobileStyle ? "no-repeat" : undefined,
      }}
    >
      <canvas
        ref={canvasRef}
        className="fluid-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          pointerEvents: "none",
          visibility: isDesktop ? "visible" : "hidden",
        }}
        aria-hidden
      />
      <a className="atylus-button" href="#fature-down">
        Scroll down
      </a>
      <div className="container">
        <div className="hero-content8">
          <h2 className="title">
            Revolutionizing businesses with cutting-edge AI solutions and
            groundbreaking innovation
          </h2>
          <p>
            Mummichog paradise fish! Triggerfish bango guppy opah sunfish
            bluntnose knifefish upside-down catfish cobia spookfish convict
            cichlid.
          </p>
          <Link
            href={`/index8`}
            target="_blank"
            rel="noopener noreferrer"
            title=""
            className="ibt-btn ibt-btn-secondary"
          >
            <span>Discover</span>
            <i className="icon-arrow-top" />
          </Link>
        </div>
      </div>
    </section>
  );
}
