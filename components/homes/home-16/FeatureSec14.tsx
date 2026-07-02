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
      "Adapt foundation models to your brand voice and workflows so responses sound like your team and respect your policies out of the box.",
      "Upload curated examples, configure objectives, and let our training stack handle optimization, monitoring, and rollback for every fine-tuned version.",
    ],
  },
  {
    id: "embeddings",
    label: "Embedding models",
    paragraphs: [
      "Turn unstructured content—documents, tickets, chat logs, and more—into dense vectors that capture meaning and context for every item.",
      "Use these vectors to cluster topics, power faceted search, and surface relevant knowledge instantly inside your existing tools and products.",
    ],
  },
  {
    id: "instruct",
    label: "InstructGPT",
    paragraphs: [
      "Describe tasks in plain language and let the model follow your step-by-step instructions to draft, summarize, and transform content reliably.",
      "Lock in consistent behavior with guardrails, templates, and evaluation prompts so non-technical teammates can build safe AI-powered flows.",
    ],
  },
];

export default function FeatureSec14() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = featureTabs[activeIndex];

  return (
    <section className="feature-sec14">
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
