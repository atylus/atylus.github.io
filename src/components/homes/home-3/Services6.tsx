import Link from "next/link";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Services2 from "@/components/services/Services2";

type Services6Props = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function Services6({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: Services6Props) {
  return (
    <section className="service-sec6">
      <div className="title-area">
        <div className="container">
          <div className="row end">
            <div className="col-xl-6 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>{eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {title}
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="sec-btn-box">
                <p>{description}</p>
                <Link
                  href={ctaHref}
                  title=""
                  className="ibt-btn ibt-btn-outline"
                >
                  <span>{ctaLabel}</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="row">
          <Services2 />
        </div>
      </div>
    </section>
  );
}
