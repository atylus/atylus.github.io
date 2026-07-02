"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import HeroForm17 from "@/components/homes/home-16/HeroForm17";
import { initHorizontalScroll } from "@/utils/horizontalScroll";

export default function MainSec8() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const cleanup = initHorizontalScroll(sectionRef.current, trackRef.current);

    return () => {
      if (typeof cleanup === "function") {
        cleanup();
      }
    };
  }, []);

  return (
    <section className="main-sec8">
      {/* hero-style16 */}
      <div className="hero-style17">
        <div className="container2">
          <div className="hero-content17">
            <h1 className="title">
              AI Image Generator for Limitless Creativity
            </h1>
            <HeroForm17 />
            <div className="tag-list-wrapper d-flex flex-wrap justify-content-md-center">
              <span>Popular queries:</span>
              <ul className="tag-list4">
                <li>
                  <a href="#" title="">
                    Sunflower
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Building
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Sea
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End hero-style16 */}
      {/* project-sec3 */}
      <div className="project-sec3" ref={sectionRef}>
        <h2 className="visually-hidden">Partner Section</h2>
        <div className="container2">
          <div className="project-track v2" ref={trackRef}>
            {[
              {
                src: "/assets/images/project/project11-1.png",
                width: 330,
                height: 436,
              },
              {
                src: "/assets/images/project/project11-2.png",
                width: 330,
                height: 326,
              },
              {
                src: "/assets/images/project/project11-3.png",
                width: 330,
                height: 436,
              },
              {
                src: "/assets/images/project/project11-4.png",
                width: 329,
                height: 498,
              },
              {
                src: "/assets/images/project/project11-5.png",
                width: 330,
                height: 326,
              },
              {
                src: "/assets/images/project/project11-6.png",
                width: 330,
                height: 436,
              },
            ].map(({ src, width, height }) => (
              <div className="project-block3" key={src}>
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src={src}
                  width={width}
                  height={height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End project-sec3 */}
    </section>
  );
}
