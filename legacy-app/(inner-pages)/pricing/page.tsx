import Link from "next/link";
import Image from "next/image";
import {
  pricingSec2Plans,
  pricingSec3BottomPlans,
  pricingSec3TopPlans,
  pricingStyle1Plans,
} from "@/data/pricing";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("pricing");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Price</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Pricing plans /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Pricing plans</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* pricing-sec3 */}
        <section className="pricing-sec3 ibt-section-gap">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-5">
                <div className="pricing-content">
                  <div className="sec-title">
                    <SubTitleWrapper>pricing</SubTitleWrapper>
                    <TitleSplitWrapper
                      tag="h2"
                      className="title animated-heading"
                    >
                      Choose the plan that fits your needs
                    </TitleSplitWrapper>
                    <p>
                      Triggerfish bluntnose knifefish upside-down catfish kfish
                      convict cichlid cat shark saw shark trout cod.
                    </p>
                    <p>
                      Pacific hake false trevally queen parrotfish black
                      prickleback moss revally queen parrotfish black
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
              <div className="col-xl-6 col-lg-7">
                <div className="row">
                  {pricingSec3TopPlans.map((plan) => (
                    <div key={plan.id} className="col-lg-6 col-md-6">
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
                            {plan.priceSuffix ? (
                              <span>{plan.priceSuffix}</span>
                            ) : null}
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
            </div>
          </div>
        </section>
        {/* End pricing-sec3 */}
        {/* pricing-style1 */}
        <section className="pricing-style1 v2 ibt-section-gapBottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="pricing-content">
                  <div className="sec-title">
                    <SubTitleWrapper>pricing</SubTitleWrapper>
                    <TitleSplitWrapper
                      tag="h2"
                      className="title animated-heading"
                    >
                      Only pay for what you use.
                    </TitleSplitWrapper>
                    <p>
                      Triggerfish bluntnose knifefish upside-down catfish kfish
                      convict cichlid cat shark saw shark trout cod.
                    </p>
                    <p>
                      Pacific hake false trevally queen parrotfish black
                      prickleback moss revally queen parrotfish black
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
                        {plan.priceSuffix ? (
                          <span>{plan.priceSuffix}</span>
                        ) : null}
                      </h4>
                      <a href="#" title="" className={plan.buttonClassName}>
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
        {/* End pricing-style1 */}
        {/* pricing-sec */}
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
                <div key={plan.id} className="col-xl-3 col-lg-6 col-md-6">
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
                        {plan.priceSuffix ? (
                          <span>{plan.priceSuffix}</span>
                        ) : null}
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
        </section>
        {/* End pricing-sec */}
        {/* pricing-sec3 */}
        <section className="pricing-sec3 ibt-section-gap">
          <div className="container">
            <div className="sec-title">
              <SubTitleWrapper>pricing</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Choose the plan that fits your needs
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
                        <a
                          href={plan.id === "premium-bottom" ? "#!" : "#"}
                          className={plan.buttonClassName}
                          title=""
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
        {/* End pricing-sec3 */}
      </>
    </>
  );
}
