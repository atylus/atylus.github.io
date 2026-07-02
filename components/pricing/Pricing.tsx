import Image from "next/image";
import { pricingSec3BottomPlans } from "@/data/pricing";
import SubTitleWrapper from "../common/SubTitleWrapper";

export default function Pricing() {
  return (
    <section className="pricing-sec3 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>pricing</SubTitleWrapper>
          <h2 className="title animated-heading">
            Choose the plan that fits your needs
          </h2>
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
                    <a
                      href={plan.id === "premium-bottom" ? "#!" : "#"}
                      className={plan.buttonClassName}
                    >
                      <span>Get started</span>
                      <i className="icon-arrow-top" />
                    </a>
                  </div>
                </div>
                <div className="price-img3">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src={plan.gradientSrc}
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
