"use client";

import Image from "next/image";
import { useState } from "react";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const featureTabs = [
  {
    id: "home",
    heading: "Natural Language Processing (NLP)",
    text: "Understand, interpret, and generate human language for enhanced communication.",
    thumb: {
      src: "/assets/images/feature/feature3-1.svg",
      width: 27,
      height: 28,
    },
    image: {
      src: "/assets/images/feature/feature.png",
      width: 865,
      height: 615,
    },
  },
  {
    id: "profile",
    heading: "Scalability & Flexibility",
    text: "Easily scale AI applications to handle growing data and user demands.",
    thumb: {
      src: "/assets/images/feature/feature3-2.svg",
      width: 26,
      height: 27,
    },
    image: {
      src: "/assets/images/feature/feature2.png",
      width: 783,
      height: 712,
    },
  },
  {
    id: "contact",
    heading: "Customizable Dashboards",
    text: "Interactive dashboards for real-time insights and performance monitoring.",
    thumb: {
      src: "/assets/images/feature/feature3-3.svg",
      width: 28,
      height: 28,
    },
    image: {
      src: "/assets/images/feature/feature.png",
      width: 865,
      height: 615,
    },
  },
  {
    id: "cont",
    heading: "Robust Security",
    text: "Implement AI-based security measures to detect and prevent threats in real time.",
    thumb: {
      src: "/assets/images/feature/feature3-4.svg",
      width: 28,
      height: 28,
    },
    image: {
      src: "/assets/images/feature/feature2.png",
      width: 783,
      height: 712,
    },
  },
];

export default function Features3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = featureTabs[activeIndex];

  return (
    <section className="feature-sec3 ibt-section-gap">
      <div className="anim-img">
        <Image
          alt="AI Agency & Technology HTML Template"
          src="/assets/images/layers/shap.png"
          width={1229}
          height={1276}
        />
      </div>
      <div className="container">
        <div className="title-area">
          <div className="row">
            <div className="col-lg-6">
              <div className="sec-title">
                <SubTitleWrapper>features</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Powerful AI features driving innovation and intelligent
                  transform
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="title-content">
                <h4 className="title">Atylus</h4>
                <p>
                  ATYLUS empowers organizations to thrive in the digital age with
                  intelligent, scalable, and sustainable solutions. Partner with
                  us to navigate the future of technology and achieve
                  unparalleled business success
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-img2">
              <div className="tab-content">
                <div
                  key={activeTab.id}
                  className="tab-pane show active ibt-tab-fade"
                >
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src={activeTab.image.src}
                    width={activeTab.image.width}
                    height={activeTab.image.height}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-tabs">
              <ul className="nav nav-tabs" role="tablist">
                {featureTabs.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      type="button"
                      title=""
                      className={`nav-link ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={index === activeIndex}
                    >
                      <div className="feature-block">
                        <Image
                          alt="AI Agency & Technology HTML Template"
                          src={tab.thumb.src}
                          width={tab.thumb.width}
                          height={tab.thumb.height}
                        />
                        <h4 className="title">{tab.heading}</h4>
                        <p>{tab.text}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
