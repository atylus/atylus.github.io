import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function PricingStyle1() {
  return (
    <section className="pricing-style1 ibt-section-gapBottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="pricing-content">
              <div className="sec-title">
                <SubTitleWrapper>pricing</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">Only pay for what you use.
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
            <div className="price-card">
              <div className="price-heade">
                <h4 className="title">Basic</h4>
                <span>Great for private individuals</span>
              </div>
              <ul className="price-item">
                <li>1 User</li>
                <li>Unlimited Projects</li>
                <li>Download prototypes</li>
                <li>1 Gb workspace</li>
              </ul>
              <div className="price-item-price">
                <h4 className="price">Free</h4>
                <a href="#" title="" className="ibt-btn ibt-btn-outline">
                  <span>Get started</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
            </div>
            <div className="price-card v2">
              <div className="price-heade">
                <h4 className="title">Premium</h4>
                <span>14 days free period</span>
              </div>
              <ul className="price-item">
                <li>3 User</li>
                <li>Unlimited Projects</li>
                <li>Download prototypes</li>
                <li>100 Gb workspace</li>
              </ul>
              <div className="price-item-price">
                <h4 className="price">
                  $99<span>/mo</span>
                </h4>
                <a href="#" title="" className="ibt-btn ibt-btn-dark">
                  <span>Get started</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
