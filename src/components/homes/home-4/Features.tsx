import Link from "next/link";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Features2 from "@/components/features/Features2";

export default function Features() {
  return (
    <section className="feature-sec1 ibt-section-gap">
      <div className="container">
        <div className="title-area">
          <div className="row end mb-0">
            <div className="col-xl-6 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>features</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  The unique selling points &amp; advantages of our service
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="sec-btn-box">
                <p>We have all the services to help your business</p>
                <Link
                  href={`/service`}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>Explore More</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Features2 />
        </div>
      </div>
    </section>
  );
}
