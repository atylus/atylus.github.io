import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function Features4() {
  return (
    <section className="feature-style4 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="feature-img4">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/feature/feature4-5.png"
                width={1094}
                height={944}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-content4">
              <div className="sec-title">
                <SubTitleWrapper>features</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Awesome things in working with Atylus
                </TitleSplitWrapper>
                <p className="para">
                  Triggerfish bluntnose knifefish upside-down catfish kfish
                  convict cichlid cat shark saw shark trout cod.
                </p>
                <p>
                  Queen parrotfish black prickleback moss pacific hake false
                  trevally queen parrotfish black prickleback moss revally
                </p>
              </div>
              <div className="app-features">
                <div className="feature-block4">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/feature/feature4-1.png"
                    width={72}
                    height={73}
                  />
                  <h4 className="title">Natural Language Processing (NLP)</h4>
                  <p>
                    Pacific hake false trevally queen parrotfish black
                    prickleback moss revally queen parrotfish black prickleback
                    moss.
                  </p>
                </div>
                <div className="feature-block4">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/feature/feature4-2.png"
                    width={70}
                    height={70}
                  />
                  <h4 className="title">Customizable Dashboards</h4>
                  <p>
                    Queen parrotfish black prickleback moss pacific hake false
                    trevally queen parrotfish black prickleback moss revally
                  </p>
                </div>
                <div className="feature-block4 mb-0">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/feature/feature4-3.png"
                    width={79}
                    height={70}
                  />
                  <h4 className="title">Natural Language Processing (NLP)</h4>
                  <p>
                    Triggerfish bluntnose knifefish upside-down catfish kfish
                    convict cichlid cat shark saw shark trout cod.
                  </p>
                </div>
              </div>
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
    </section>
  );
}
