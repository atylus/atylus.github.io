import Link from "next/link";
import Features2 from "@/components/features/Features2";

import Services2 from "@/components/services/Services2";

import TestimonialsSec from "@/components/testimonials/TestimonialsSec";
import Pricing from "@/components/pricing/Pricing";
import Brands from "@/components/homes/home-1/Brands";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("service");

export default function page() {
  return (
    <>
      <section className="page-banner3">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Neural</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ Hizmetler /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link href={`/`} title="">
              Ana Sayfa
            </Link>
          </li>
          <li>/</li>
          <li>Hizmetler</li>
        </ul>
      </section>
      <section className="service-sec6 ibt-section-gap">
        <div className="container2">
          <div className="row">
            <Services2 />
          </div>
        </div>
      </section>

      <section className="marquee-sec">
        <h2 style={{ display: "none" }}>Marquee Section</h2>
        <div className="marquee">
          <div className="marquee-inner">
            <span>/ Neural Networks in shaping the future of technology.</span>
            <span>/ Neural Networks in shaping the future of technology.</span>
          </div>
        </div>
      </section>
      <section className="feature-sec10 ibt-section-gap">
        <div className="container">
          <div className="sec-title">
            <SubTitleWrapper>features</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              The unique selling points &amp; advantages of our service
            </TitleSplitWrapper>
          </div>
          <div className="row">
            <Features2 />
          </div>
        </div>
      </section>
      <TestimonialsSec parentClass="testimonials-sec v2" />
      <Pricing />
      <Brands parentClass="neural-playground7 ibt-section-gapBottom" />
    </>
  );
}
