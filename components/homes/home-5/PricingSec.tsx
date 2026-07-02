import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { pricingSec2Plans } from "@/data/pricing";

export default function PricingSec() {
  return (
    <section className="pricing-sec2">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>pricing</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Choose the plan that fits your needs
          </TitleSplitWrapper>
        </div>
        <div className="row">
          {pricingSec2Plans.map((plan) => (
            <div
              key={plan.id}
              className="col-xl-3 col-lg-4 col-md-6"
            >
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
                  <a
                    href="#"
                    title=""
                    className={plan.buttonClassName}
                  >
                    <span>Get started</span>
                    <i className="icon-arrow-top" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
