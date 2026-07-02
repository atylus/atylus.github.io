import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(6);
import ChooseUsSec from "@/components/homes/home-6/ChooseUsSec";
import FaqSec from "@/components/homes/home-6/FaqSec";
import FaqSec2 from "@/components/homes/home-6/FaqSec2";
import FeatureStyle1 from "@/components/homes/home-6/FeatureStyle1";
import FunFactSec from "@/components/homes/home-6/FunFactSec";
import HeroStyle2 from "@/components/homes/home-6/HeroStyle2";

import MarqueeSec from "@/components/homes/home-6/MarqueeSec";
import PricingStyle1 from "@/components/homes/home-6/PricingStyle1";
import ServiceSec2 from "@/components/homes/home-6/ServiceSec2";
import TeamSection from "@/components/homes/home-6/TeamSection";
import TestimonialSec2 from "@/components/homes/home-6/TestimonialSec2";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

export default function page() {
  return (
    <>
      <div className="wrapper">
        <Header1 menuClass="header-menu-area3" className="vs-header3" />

        {/*======== / Header ========*/}
        <HeroStyle2 />
        <FunFactSec />
        <ServiceSec2 />
        <MarqueeSec />
        <ChooseUsSec />
        <FeatureStyle1 />
        <FaqSec />
        <FaqSec2 />
        <TestimonialSec2 />
        <PricingStyle1 />
        <TeamSection />
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </div>
    </>
  );
}