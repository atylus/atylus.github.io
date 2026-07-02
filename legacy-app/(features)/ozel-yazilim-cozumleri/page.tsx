import Header1 from "@/components/headers/Header1";
import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(15);
import AboutUsSec2 from "@/components/homes/home-15/AboutUsSec2";
import BrandSec2 from "@/components/homes/home-15/BrandSec2";
import ContactBanner3 from "@/components/homes/home-15/ContactBanner3";
import FeatureSec12 from "@/components/homes/home-15/FeatureSec12";
import FeatureSec13 from "@/components/homes/home-15/FeatureSec13";
import HeroStyle16 from "@/components/homes/home-15/HeroStyle16";
import MarqueeSec from "@/components/homes/home-15/MarqueeSec";
import PricingStyle4 from "@/components/homes/home-15/PricingStyle4";
import ServiceSec25 from "@/components/homes/home-15/ServiceSec25";
import ServiceSec26 from "@/components/homes/home-15/ServiceSec26";
import TestimonialSec4 from "@/components/homes/home-15/TestimonialSec4";
import Blogs from "@/components/homes/home-15/Blogs";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";

export default function Page() {
  return (
    <>
        <Header1 menuClass="header-menu-area3" className="vs-header3" />
        {/*======== / Header ========*/}
        <HeroStyle16 />
        <BrandSec2 />
        <ServiceSec25 />
        <ServiceSec26 />
        <MarqueeSec />
        <AboutUsSec2 />
        <FeatureSec12 />
        <FeatureSec13 />
        <PricingStyle4 />
        <ContactBanner3 />
        <TestimonialSec4 />
        <Blogs />
        <section className="main-sec">
                  <Contact />
                  <Footer1 />
        </section>
    </>
  );
}
