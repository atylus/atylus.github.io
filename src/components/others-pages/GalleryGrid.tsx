"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import { galleryFilters, galleryItems } from "@/data/galleryGrid";
import { setupCustomCursor } from "@/utils/customCursor";

type IsotopeInstance = {
  arrange(options: { filter: string }): void;
  layout(): void;
  destroy(): void;
};

type IsotopeConstructor = new (
  element: Element,
  options: {
    itemSelector: string;
    layoutMode: string;
  },
) => IsotopeInstance;

type ImagesLoadedFn = (element: Element, callback: () => void) => void;

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("*");
  const gridRef = useRef<HTMLDivElement | null>(null);
  const isoRef = useRef<IsotopeInstance | null>(null);
  const customCursorRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function init() {
      if (!gridRef.current) return;

      const [isotopeModule, imagesLoadedModule] = await Promise.all([
        import("isotope-layout"),
        import("imagesloaded"),
      ]);

      if (!isMounted || !gridRef.current) return;

      const IsotopeCtor =
        (isotopeModule as { default?: IsotopeConstructor }).default ??
        (isotopeModule as unknown as IsotopeConstructor);

      const imagesLoadedFn =
        (imagesLoadedModule as { default?: ImagesLoadedFn }).default ??
        (imagesLoadedModule as unknown as ImagesLoadedFn);

      const isoInstance = new IsotopeCtor(gridRef.current, {
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
      });

      isoRef.current = isoInstance;

      imagesLoadedFn(gridRef.current, () => {
        if (!isMounted || !isoRef.current) return;
        isoRef.current.layout();
      });
    }

    void init();

    return () => {
      isMounted = false;
      if (isoRef.current) {
        isoRef.current.destroy();
        isoRef.current = null;
      }
    };
  }, []);

  const handleFilterClick = (filterValue: string) => {
    setActiveFilter(filterValue);
    if (isoRef.current) {
      isoRef.current.arrange({ filter: filterValue });
    }
  };

  useEffect(() => {
    const cleanup = setupCustomCursor({
      cursor: customCursorRef.current,
      blocks: blockRefs.current,
      container: gridRef.current,
    });

    return cleanup;
  }, []);

  return (
    <section className="project-sec8 ibt-section-gap">
      <h2 className="visually-hidden">Project Section</h2>
      <div className="custom-cursor" ref={customCursorRef}>
        Zoom In
      </div>
      <div className="container2">
        {/* Isotope menu */}
        <ul className="menu_iso" id="custom-filter">
          {galleryFilters.map((filter) => (
            <li key={filter.id}>
              <a
                data-filter={filter.filter}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleFilterClick(filter.filter);
                }}
                className={activeFilter === filter.filter ? "is-checked" : ""}
              >
                {filter.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Gallery Grid */}
        <div id="lightgallery2" ref={gridRef}>
          <LightGallery
            elementClassNames="row iso-container2"
            speed={500}
            plugins={[lgZoom, lgThumbnail]}
            licenseKey="your-license-key"
            selector=".project-block8"
          >
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 col-sm-12 isotope-item ${item.filterClass}`}
              >
                <div
                  className="project-block8"
                  data-src={item.dataSrc}
                  ref={(el) => {
                    if (el) {
                      blockRefs.current[index] = el;
                    }
                  }}
                >
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src={item.imageSrc}
                    width={item.imageWidth}
                    height={item.imageHeight}
                  />
                  <div className="architecture2">
                    <a href="#">{item.label}</a>
                  </div>
                </div>
              </div>
            ))}
          </LightGallery>
        </div>
      </div>
    </section>
  );
}
