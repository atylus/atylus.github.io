import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { serviceSec10Cards } from "@/data/services";

export default function ServiceSec10() {
  return (
    <section className="service-sec10 ibt-section-gapTop">
      <div className="title-area">
        <div className="container">
          <div className="row end mb-0">
            <div className="col-xl-6 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>services</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Special neural features for your services
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="sec-btn-box">
                <p>We have all the services to help your business</p>
                <Link
                  href="/service"
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
      </div>
      <div className="container2">
        <div className="row">
          {serviceSec10Cards.map((card) => (
            <div
              key={card.id}
              className={card.colClassName ?? "col-xl-3 col-lg-6 col-md-6"}
            >
              <div className="ser-card10">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src={card.imageSrc}
                  width={card.imageWidth}
                  height={card.imageHeight}
                />
                <Image
                  alt=""
                  className="ser-icon10"
                  src={card.iconSrc}
                  width={card.iconWidth}
                  height={card.iconHeight}
                />
                <h4
                  className={`title ${card.titleClassName ?? ""}`.trim()}
                >
                  {card.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
