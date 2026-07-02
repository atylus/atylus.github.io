import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/common/Counter";
import { featureItems7 } from "@/data/features";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function FeatureSec7() {
  return (
    <section className="feature-sec7 ibt-section-gapTop" id="fature-down">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="ser-content7">
              <div className="sec-title">
                <SubTitleWrapper>possibilities</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Explore limitless possibilities with our intelligent solutions
                </TitleSplitWrapper>
                <p>
                  ATYLUS is a leading AI agency committed to transforming
                  businesses through cutting-edge artificial intelligence
                  solutions. We specialize in delivering tailored AI strategies
                  that drive innovation, optimize processes, and unlock new
                  opportunities for growth.
                </p>
                <Link
                  href={`/index8`}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>Explore more</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
              <div className="about-counter">
                <div className="counter-box4">
                  <Counter max={270} />
                  <span className="counter-text">k</span>
                </div>
                <span className="solutions">AI Solutions for our clients</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-info7">
              {featureItems7.map((item) => (
                <div key={item.id} className="feature-card7">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src={item.imageSrc}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    className="image-auto"
                  />
                  <div className={item.contentClassName ?? "feature-content7"}>
                    <h4 className="title">
                      <a href="#" title="">
                        {item.title}
                      </a>
                    </h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
