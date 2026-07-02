import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ServiceSec11() {
  return (
    <section className="service-sec11 ibt-section-gapBottom">
      <div className="title-area">
        <div className="container">
          <div className="row end m-0">
            <div className="col-xl-7 col-lg-9">
              <div className="sec-title mb-0">
                <SubTitleWrapper>services</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Meet key benefits and competitive advantages of our service
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-5 col-lg-3">
              <div className="sec-btn-box">
                <Link
                  href={`/service`}
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
      </div>
      <div className="container5">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="ser-card11">
              <div className="empty2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-icon11-1.svg"
                  width={63}
                  height={63}
                />
                <div className="ser-content11">
                  <h4 className="title">
                    <a href="#" title="">
                      AI Strategy &amp; Consulting
                    </a>
                  </h4>
                  <p>
                    AI-driven business transformation Custom AI roadmap
                    development AI ethics &amp; compliance advisory
                  </p>
                  <Link
                    href={`/service`}
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
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="ser-card11 v2">
              <div className="empty2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-icon11-2.svg"
                  width={61}
                  height={61}
                />
                <div className="ser-content11">
                  <h4 className="title">
                    <a href="#" title="">
                      Machine Learning &amp; Data Science
                    </a>
                  </h4>
                  <p>
                    AI image generators can translate images from one domain to
                    another, such as transforming a daytime scene
                  </p>
                  <Link
                    href={`/service`}
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
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="ser-card11 v3">
              <div className="empty2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-icon11-3.svg"
                  width={73}
                  height={65}
                />
                <div className="ser-content11">
                  <h4 className="title">
                    <a href="#" title="">
                      Image-to-text generation
                    </a>
                  </h4>
                  <p>
                    Some AI image generators have the ability to generate
                    textual descriptions or captions based on an input image.
                  </p>
                  <Link
                    href={`/service`}
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
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="ser-card11 v4">
              <div className="empty2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser-icon11-4.png"
                  width={59}
                  height={67}
                />
                <div className="ser-content11">
                  <h4 className="title">
                    <a href="#" title="">
                      AI Development &amp; Integration
                    </a>
                  </h4>
                  <p>
                    Some AI image generators have the ability to generate
                    textual descriptions or captions based on an input image.
                  </p>
                  <Link
                    href={`/service`}
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
        </div>
      </div>
    </section>
  );
}
