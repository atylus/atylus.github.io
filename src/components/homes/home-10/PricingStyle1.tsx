import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import { pricingStyle1Plans } from "@/data/pricing";

export default function PricingStyle1() {
  return (
    <section className="pricing-style1 ibt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-content">
              <div className="sec-title">
                <SubTitleWrapper>pricing</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Only pay for what you use.
                </TitleSplitWrapper>
                <p>
                  Triggerfish bluntnose knifefish upside-down catfish kfish
                  convict cichlid cat shark saw shark trout cod.
                </p>
                <p>
                  Pacific hake false trevally queen parrotfish black prickleback
                  moss revally queen parrotfish black
                </p>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="fa fa-check" />
                  Fine-tuning models
                </li>
                <li>
                  <i className="fa fa-check" />
                  Embedding models
                </li>
                <li>
                  <i className="fa fa-check" />
                  InstructGPT
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            {pricingStyle1Plans.map((plan) => (
              <div key={plan.id} className={plan.cardClassName}>
                <div className="price-heade">
                  <h4 className="title">{plan.title}</h4>
                  <span>{plan.subtitle}</span>
                </div>
                <ul className="price-item">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="price-item-price">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
