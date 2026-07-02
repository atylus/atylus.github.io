"use client";

import Image from "next/image";
import { useState } from "react";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const featureTabs = [
  {
    id: "fine-tuning",
    label: "Fine-tuning models",
    paragraphs: [
      "Ship fine-tuned assistants that understand your product, support tone, and internal acronyms without manually hard-coding hundreds of rules.",
      "Track quality over time with evaluation sets and scoring so you can see exactly how each new dataset or training run improves real outputs.",
    ],
  },
  {
    id: "embeddings",
    label: "Embedding models",
    paragraphs: [
      "Index millions of records with compact vector representations and query them in real time to surface surprisingly relevant results.",
      "Power chat-with-your-data, smart search bars, and discovery experiences that feel personalized even on first use.",
    ],
  },
  {
    id: "instruct",
    label: "InstructGPT",
    paragraphs: [
      "Wire instruction-following models into your tools so teams can generate drafts, outlines, and ideas that match your guidelines on the first pass.",
      "Use examples, style hints, and negative instructions to keep generations on-brand while still leaving room for creativity and exploration.",
    ],
  },
];

export default function FeatureSec14() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = featureTabs[activeIndex];

  return (
    <section className="feature-sec14 v2 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-img14">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature14-1.png"
                width={847}
                height={602}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-content12">
              <div className="sec-title white">
                <SubTitleWrapper>features</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Easy to integrate using our API access
                </TitleSplitWrapper>
              </div>
              <ul className="nav nav-tabs" role="tablist">
                {featureTabs.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      type="button"
                      className={`nav-link ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={index === activeIndex}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                <div
                  key={activeTab.id}
                  className="tab-pane fade show active ibt-tab-fade"
                >
                  {activeTab.paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                  <a href="#" className="ibt-btn ibt-btn-outline-2">
                    <span>Explore more</span>
                    <i className="icon-arrow-top" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
