import { pricingSec2Plans } from "@/data/pricing";
import SubTitleWrapper from "../common/SubTitleWrapper";

export default function Pricing() {
  const plans = pricingSec2Plans.slice(0, 3);

  return (
    <div className="pricing-sec2 ibt-section-gap">
      <div className="sec-title">
        <SubTitleWrapper>pricing</SubTitleWrapper>
        <h2 className="title animated-heading">
          Choose the plan that fits your needs
        </h2>
      </div>
      <div className="row">
        {plans.map((plan) => (
          <div key={plan.id} className="col-xxl-4 col-xl-6 col-md-6">
            <div className={plan.cardClassName}>
              {plan.badge ? (
                <span className="Popular">{plan.badge}</span>
              ) : null}
              <div className="price-heade2">
                <h4 className="title">{plan.title}</h4>
                <span>{plan.subtitle}</span>
              </div>
              <ul className="price-item2">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="price-item-price2">
                <h4 className="price">
                  {plan.priceLabel}
                  {plan.priceSuffix ? <span>{plan.priceSuffix}</span> : null}
                </h4>
                <a href="#" title="" className={plan.buttonClassName}>
                  <span>Get started</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
