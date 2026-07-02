import Image from "next/image";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ServiceSec25() {
  return (
    <section className="service-sec25 ibt-section-gapTop">
      <div className="container">
        <div className="title-area">
          <div className="row end">
            <div className="col-lg-5 col-md-7">
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>services</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Unique, ownable intelligence
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-lg-7 col-md-5">
              <div className="sec-btn-box">
                <a href="#" className="ibt-btn ibt-btn-outline-2">
                  <span>Explore more</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="ser-card25">
              <Image
                alt="AI Agency & Technology HTML Template"
                className="layer"
                src="/assets/images/service/ser25-1.png"
                width={650}
                height={472}
              />
              <h2 className="title">
                <a href="#" title="">
                  Build, compare, and ship Generation apps in minutes
                </a>
              </h2>
              <Image
                alt="AI Agency & Technology HTML Template"
                className="user-img"
                src="/assets/images/service/ser-user25-1.png"
                width={87}
                height={79}
              />
              <div className="ser-counter25">
                <div className="counter-box10">
                  <Counter max={20} extraClass="percent-counter" />
                  <span className="counter-text">K</span>
                </div>
                <span className="title2">happy customers</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-card25">
              <Image
                alt="AI Agency & Technology HTML Template"
                className="layer"
                src="/assets/images/service/ser25-2.png"
                width={364}
                height={472}
              />
              <div className="ser-content25">
                <h2 className="title3">
                  <a href="#" title="">
                    Explore Scale Spellbook
                  </a>
                </h2>
                <p>
                  Triggerfish bluntnose knifefish upside-down catfish kfish
                  convict.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="ser-card25_card3">
              <div className="service-ai">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ai-logo.svg"
                  width={48}
                  height={49}
                />
                <span>Open AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
