import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { pricingSec3BottomPlans } from "@/data/pricing";

export default function PricingSec6() {
  return (
    <section className="pricing-sec6 ibt-section-gap">
      <div className="container">
        <div className="sec-title white">
          <SubTitleWrapper>pricing plans</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Choose a plan and start work with Atylus
          </TitleSplitWrapper>
        </div>
        <div className="row">
          {pricingSec3BottomPlans.map((plan) => (
            <div key={plan.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="price-content3">
                <div className={plan.cardClassName}>
                  {plan.badge ? (
                    <span className="Popular">{plan.badge}</span>
                  ) : null}
                  <div className="price-heade3">
                    <h4 className="title">{plan.title}</h4>
                    <span>{plan.subtitle}</span>
                  </div>
                  <ul className="price-item2">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <div className="price-item-price3">
                    <h4 className="price">
                      {plan.priceLabel}
                      {plan.priceSuffix ? (
                        <span>{plan.priceSuffix}</span>
                      ) : null}
                    </h4>
                    <Link
                      href={plan.id === "premium-bottom" ? "#!" : "#"}
                      className={plan.buttonClassName}
                    >
                      <span>Get started</span>
                      <i className="icon-arrow-top" />
                    </Link>
                  </div>
                </div>
                <div className="price-img3">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src={`${plan.gradientSrc}`}
                    width={plan.gradientWidth}
                    height={plan.gradientHeight}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
