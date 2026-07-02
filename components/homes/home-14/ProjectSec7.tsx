"use client";

import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";
import { useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import { setupCustomCursor } from "@/utils/customCursor";
import type { ProjectBlockItem } from "@/types/projects";

const leftProjects: ProjectBlockItem[] = [
  {
    id: "left-1",
    blockClassName: "project-block7",
    dataSrc: "/assets/images/project/pro7-2.png",
    imgSrc: "/assets/images/project/pro7-2.png",
    imgWidth: 620,
    imgHeight: 421,
    alt: "Architecture 1",
  },
  {
    id: "left-2",
    blockClassName: "project-block7 v3",
    dataSrc: "/assets/images/project/pro7-3.png",
    imgSrc: "/assets/images/project/pro7-3.png",
    imgWidth: 620,
    imgHeight: 421,
    alt: "Architecture 2",
  },
];

const rightProjects: ProjectBlockItem[] = [
  {
    id: "right-1",
    blockClassName: "project-block7 mb-0 v2",
    dataSrc: "/assets/images/project/pro7-4.png",
    imgSrc: "/assets/images/project/pro7-4.png",
    imgWidth: 1224,
    imgHeight: 873,
    alt: "Architecture 3",
  },
];

export default function ProjectSec7() {
  const customCursorRef = useRef<HTMLDivElement | null>(null);
  const projectBlockRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cleanup = setupCustomCursor({
      cursor: customCursorRef.current,
      blocks: projectBlockRefs.current,
    });

    return cleanup;
  }, []);

  return (
    <section className="project-sec7">
      <div className="container2">
        <div className="video-banner3">
          <Image
            alt="AI Agency & Technology HTML Template"
            src="/assets/images/project/pro7-1.png"
            width={1875}
            height={793}
          />
          <div className="video-banner-content7">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/logo4.svg"
              width={203}
              height={37}
            />
            <h4 className="title">Future is here</h4>
          </div>
          <div className="ser-video-box">
            <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
              <i className="fa fa-play" /> Watch Video
            </VideoPopupButton>
          </div>
        </div>
        <LightGallery
          elementClassNames="row"
          speed={500}
          plugins={[lgZoom, lgThumbnail]}
          licenseKey="your-license-key"
          selector=".project-block7"
        >
          <div className="col-lg-4">
            <div className="row">
              {leftProjects.map((item, index) => (
                <div className="col-lg-12" key={item.id}>
                  <div
                    className={item.blockClassName}
                    data-src={item.dataSrc}
                    ref={(el) => {
                      if (el) projectBlockRefs.current[index] = el;
                    }}
                  >
                    <Image
                      alt={item.alt}
                      src={item.imgSrc}
                      width={item.imgWidth}
                      height={item.imgHeight}
                    />
                    <div className="architecture">
                      <span>
                        <a href="#" title="">
                          Architecture
                        </a>
                      </span>
                    </div>
                  </div>
                  {index === 0 && (
                    <div className="custom-cursor" ref={customCursorRef}>
                      Zoom In
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-8">
            {rightProjects.map((item, index) => {
              const refIndex = leftProjects.length + index;
              return (
                <div
                  key={item.id}
                  className={item.blockClassName}
                  data-src={item.dataSrc}
                  ref={(el) => {
                    if (el) projectBlockRefs.current[refIndex] = el;
                  }}
                >
                  <Image
                    alt={item.alt}
                    src={item.imgSrc}
                    width={item.imgWidth}
                    height={item.imgHeight}
                  />
                  <div className="architecture">
                    <span>
                      <a href="#" title="">
                        Architecture
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </LightGallery>
      </div>
    </section>
  );
}
