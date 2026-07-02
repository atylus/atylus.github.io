import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function PricingStyle4() {
  const plans = [
    {
      id: "basic-style4",
      cardClassName: "price-card4",
      title: "Basic",
      subtitle: "Great for private individuals",
      features: ["1 User", "Unlimited Projects", "Download prototypes", "1 Gb workspace"],
      priceLabel: "Free",
      priceSuffix: undefined as string | undefined,
      buttonClassName: "ibt-btn ibt-btn-outline-2",
    },
    {
      id: "premium-style4",
      cardClassName: "price-card4 v2",
      title: "Premium",
      subtitle: "14 days free period",
      features: ["3 User", "Unlimited Projects", "Download prototypes", "100 Gb workspace"],
      priceLabel: "$99",
      priceSuffix: "/mo",
      buttonClassName: "ibt-btn ibt-btn-dark",
    },
  ];

  return (
    <section className="pricing-style4 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-content4">
              <div className="sec-title white">
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
              <ul className="pricing-list4">
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
            {plans.map((plan) => (
              <div key={plan.id} className={plan.cardClassName}>
                <div className="price-heade4">
                  <h4 className="title">{plan.title}</h4>
                  <span>{plan.subtitle}</span>
                </div>
                <ul className="price-item4">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="price-item-price4">
                  <h4 className="price">
                    {plan.priceLabel}
                    {plan.priceSuffix ? <span>{plan.priceSuffix}</span> : null}
                  </h4>
                  <a
                    href="#"
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
