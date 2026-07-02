import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(13);
import BlogSec2 from "@/components/homes/home-13/BlogSec2";
import FaqSec3 from "@/components/homes/home-13/FaqSec3";
import FeatureStyle1 from "@/components/homes/home-13/FeatureStyle1";
import MainSec5 from "@/components/homes/home-13/MainSec5";
import PartnersSec from "@/components/homes/home-13/PartnersSec";
import ServiceSec15 from "@/components/homes/home-13/ServiceSec15";
import TeamSection from "@/components/homes/home-13/TeamSection";
import TestimonialSec2 from "@/components/homes/home-13/TestimonialSec2";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";

export default function page() {
  return (
    <>
      <>
        <Header1 menuClass="header-menu-area3" className="vs-header3" />
        {/*======== / Header ========*/}
        <MainSec5 />
        <ServiceSec15 />
        <FeatureStyle1 />
        <TeamSection />
        <FaqSec3 />
        <TestimonialSec2 />
        <BlogSec2 />
        <PartnersSec />
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </>
    </>
  );
}
