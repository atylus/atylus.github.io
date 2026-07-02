 "use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const voices = [
  {
    name: "William US",
    flagSrc: "/assets/images/event/language.png",
  },
  {
    name: "Sarah UK",
    flagSrc: "/assets/images/event/language2.png",
  },
  {
    name: "Enrico ES",
    flagSrc: "/assets/images/event/language4.png",
    extraClass: "language",
  },
  {
    name: "Adam GE",
    flagSrc: "/assets/images/event/language5.png",
  },
  {
    name: "Mykolay UA",
    flagSrc: "/assets/images/event/language8.png",
  },
  {
    name: "Jane FR",
    flagSrc: "/assets/images/event/language3.png",
    extraClass: "language",
  },
  {
    name: "Chan CH",
    flagSrc: "/assets/images/event/language6.png",
  },
  {
    name: "Lee JP",
    flagSrc: "/assets/images/event/language13.png",
  },
];

export default function LanuguageSec() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="lanuguage-sec2 ibt-section-gapTop">
      <div className="container">
        <div className="title-area">
          <div className="row end">
            <div className="col-xl-7 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>examples</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Generate a high-quality, professional voice for your
                  commercial needs
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12">
              <div className="sec-btn-box">
                <Link
                  href={`/index9`}
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
        <div className="world-languages2">
          {voices.map((voice, index) => (
            <a
              href="#"
              title={voice.name}
              key={voice.name}
              className={voice.extraClass}
              onClick={(e) => handleClick(index, e)}
            >
              <div className="inner-item">
                <i
                  className={`fontello ${
                    activeIndex === index ? "icon-volume" : "icon-volume-muted"
                  }`}
                />
                <span>{voice.name}</span>
              </div>
              <Image
                alt="AI Agency & Technology HTML Template"
                src={voice.flagSrc}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
