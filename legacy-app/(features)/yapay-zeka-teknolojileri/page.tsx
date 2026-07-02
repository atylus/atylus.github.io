import Header1 from "@/components/headers/Header1";
import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(14);
import AboutUsSec5 from "@/components/homes/home-14/AboutUsSec5";
import BlogSec from "@/components/homes/home-14/BlogSec";
import FaqSec from "@/components/homes/home-14/FaqSec";
import FeatureSec8 from "@/components/homes/home-14/FeatureSec8";
import FeatureSec9 from "@/components/homes/home-14/FeatureSec9";
import HeroStyle9 from "@/components/homes/home-14/HeroStyle9";
import NeuralPlayground from "@/components/homes/home-14/NeuralPlayground";
import PartnersSec from "@/components/homes/home-14/PartnersSec";
import ProjectSec7 from "@/components/homes/home-14/ProjectSec7";
import ServiceBanner from "@/components/homes/home-14/ServiceBanner";
import ServiceSec20 from "@/components/homes/home-14/ServiceSec20";
import Footer1 from "@/components/footers/Footer1";
import Contact from "@/components/contact/Contact";

export default function page() {
  return (
    <>
      <>
        <Header1 menuClass="header-menu-area3" className="vs-header3" />
        {/*======== / Header ========*/}
        <HeroStyle9 />
        <ServiceSec20 />
        <NeuralPlayground />
        <ProjectSec7 />
        <AboutUsSec5 />
        <FeatureSec8 />
        <FeatureSec9 />
        <ServiceBanner />
        <FaqSec />
        <BlogSec />
        <PartnersSec />
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </>
    </>
  );
}
