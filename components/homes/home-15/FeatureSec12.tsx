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
      "Fine-tune powerful base models on your own datasets to capture domain-specific patterns, jargon, and tone without having to build everything from scratch.",
      "Our infrastructure handles data versioning, training runs, and evaluation so your team can focus on iterating on prompts and datasets instead of MLOps plumbing.",
    ],
  },
  {
    id: "embeddings",
    label: "Embedding models",
    paragraphs: [
      "Use high-quality embedding models to power semantic search, recommendations, and personalization that understand meaning instead of just keywords.",
      "Plug our vector APIs into your existing stack to quickly index documents, products, or conversations and query them with fast, low-latency similarity search.",
    ],
  },
  {
    id: "instruct",
    label: "InstructGPT",
    paragraphs: [
      "Guide models with natural-language instructions so non-technical teams can prototype workflows, assistants, and content pipelines in just a few minutes.",
      "Combine instruction-tuned models with your business data to automate support, drafting, and analysis while keeping humans in control of final decisions.",
    ],
  },
];

export default function FeatureSec12() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = featureTabs[activeIndex];

  return (
    <section className="feature-sec12 ibt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-img12">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature12-1.png"
                width={798}
                height={560}
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
