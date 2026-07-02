"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function FeatureSec8() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      id: "home",
      title: "AI Gadget",
      image: {
        src: "/assets/images/feature/feature8-1.png",
        width: 797,
        height: 774,
      },
      thumb: {
        src: "/assets/images/feature/feature8-1.svg",
        width: 46,
        height: 46,
      },
      heading: "01. Generate voice for you video",
      text: "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
    },
    {
      id: "profile",
      title: "AI Gadget",
      image: {
        src: "/assets/images/feature/feature-15-1.png",
        width: 1024,
        height: 995,
      },
      thumb: {
        src: "/assets/images/feature/feature8-2.svg",
        width: 45,
        height: 45,
      },
      heading: "02. Clone voice",
      text: "Each neuron applies an activation function to the weighted sum of its inputs and produces an output",
    },
    {
      id: "contact",
      title: "AI Gadget",
      image: {
        src: "/assets/images/feature/feature-15-2.png",
        width: 1024,
        height: 995,
      },
      thumb: {
        src: "/assets/images/feature/feature8-3.svg",
        width: 36,
        height: 36,
      },
      heading: "03.Download ready files",
      text: "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
    },
  ];

  const activeTab = tabs[activeIndex];

  return (
    <section className="feature-sec8 ibt-section-gapBottom">
      <div className="container5">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-img8">
              <div className="empty4" />
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
                  <h4 className="title">{activeTab.title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-tabs8">
              <div className="sec-title">
                <SubTitleWrapper>how it works</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Discover exceptional features that set our VR
                </TitleSplitWrapper>
              </div>
              <ul className="nav nav-tabs8" role="tablist">
                {tabs.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      type="button"
                      title=""
                      className={`nav-link ${index === activeIndex ? "active" : ""}`}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={index === activeIndex}
                    >
                      <div className="feature-block8">
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
              <Link
                href={`/index14`}
                title=""
                className="ibt-btn ibt-btn-outline"
              >
                <span>Explore more</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
