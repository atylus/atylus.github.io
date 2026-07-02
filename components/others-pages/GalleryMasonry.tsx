"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import {
  galleryMasonryFilters,
  galleryMasonryItems,
} from "@/data/galleryMasonry";
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
    masonry?: {
      columnWidth: string;
      percentPosition: boolean;
    };
  },
) => IsotopeInstance;

type ImagesLoadedFn = (element: Element, callback: () => void) => void;

export default function GalleryMasonry() {
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
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".grid-sizer",
          percentPosition: true,
        },
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
    <section className="project-sec9 ibt-section-gap">
      <h2>project</h2>
      <div className="custom-cursor" ref={customCursorRef}>
        Zoom In
      </div>
      <div className="container2">
        {/* Isotope menu */}
        <ul className="menu_iso" id="custom-filter">
          {galleryMasonryFilters.map((filter) => (
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
        <div id="lightgallery3" ref={gridRef}>
          <LightGallery
            elementClassNames="iso-container"
            speed={500}
            plugins={[lgZoom, lgThumbnail]}
            licenseKey="your-license-key"
            selector=".project-block7"
          >
            <div className="grid-sizer" />
            {galleryMasonryItems.map((item, index) => (
              <div key={item.id} className={item.itemClassName}>
                <div
                  className="project-block7"
                  data-src={item.dataSrc}
                  ref={(el) => {
                    if (el) {
                      blockRefs.current[index] = el;
                    }
                  }}
                >
                  <Image
                    alt={item.title}
                    src={item.imageSrc}
                    width={item.imageWidth}
                    height={item.imageHeight}
                  />
                  <div className="architecture">
                    <span>
                      <a href="#" title="">
                        {item.title}
                      </a>
                    </span>
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
