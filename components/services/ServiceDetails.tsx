import Link from "next/link";
import Image from "next/image";
import Faqs from "./Faqs";
import Pricing from "./Pricing";
import SubTitleWrapper from "../common/SubTitleWrapper";
import { getServiceHref, serviceCatalogItems } from "@/data/serviceCatalog";
import type { ServiceCatalogItem } from "@/types/services";

type ServiceDetailsProps = {
  service: ServiceCatalogItem;
};

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  return (
    <section className="service-single-sec ibt-section-gapTop">
      <button className="sidebar-toggle" />
      <div className="sidebar-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="side-bar2">
              <button className="sidebar-close" />
              <div className="ser-widget side-widget">
                {serviceCatalogItems.map((relatedService) => {
                  const isActive = relatedService.slug === service.slug;

                  return (
                    <Link
                      key={relatedService.slug}
                      href={getServiceHref(relatedService.slug)}
                      title={relatedService.title}
                      className={isActive ? "active" : undefined}
                    >
                      {relatedService.title}
                    </Link>
                  );
                })}
              </div>
              <div className="brochure-widget side-widget">
                <SubTitleWrapper>/ download /</SubTitleWrapper>
                <h4 className="title">Services brochure</h4>
                <a href="#" className="ibt-btn ibt-btn-outline">
                  <span>Download</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
              <div className="strategy-widget side-widget">
                <Image
                  alt={service.title}
                  src="/assets/images/event/shades.png"
                  width={304}
                  height={385}
                />
                <div className="strategy-content">
                  <h4 className="title">{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="ser-detail">
              <h2 className="title animated-heading">{service.detailTitle}</h2>
              <p>{service.detailIntro}</p>
              <p className="paragraph">{service.detailParagraphs[0]}</p>
              <Image
                alt={service.title}
                src="/assets/images/service/ser-detal.png"
                width={989}
                height={642}
              />
              <p className="paragraph">{service.detailParagraphs[1]}</p>
              <ul className="ser-detail-list">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>
                    <i className="fontello icon-button-arrow-down" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <Pricing />
              <div className="faq-sec4 ibt-section-gapBottom">
                <div className="faq-content4">
                  <div className="sec-title">
                    <SubTitleWrapper>faq</SubTitleWrapper>
                    <h2 className="title animated-heading">
                      Open questions from our customers
                    </h2>
                  </div>
                  <Faqs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
