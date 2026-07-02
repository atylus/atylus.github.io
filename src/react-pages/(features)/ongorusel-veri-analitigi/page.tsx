import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(7);
import HeroStyle7 from "@/components/homes/home-7/HeroStyle7";
import MarqueeSec from "@/components/homes/home-7/MarqueeSec";
import NeuralPlayground from "@/components/homes/home-7/NeuralPlayground";
import ProjectSec3 from "@/components/homes/home-7/ProjectSec3";
import ServiceSec11 from "@/components/homes/home-7/ServiceSec11";
import ChooseSec from "@/components/homes/home-7/ChooseSec";
import ServiceSec4 from "@/components/homes/home-7/ServiceSec4";
import ChooseUsSec4 from "@/components/homes/home-7/ChooseUsSec4";
import PricingStyle1 from "@/components/homes/home-7/PricingStyle1";
import TestimonialsSec from "@/components/homes/home-7/TestimonialsSec";
import FaqSec from "@/components/homes/home-7/FaqSec";
import BlogSec from "@/components/homes/home-7/BlogSec";
import PartnersSec from "@/components/homes/home-7/PartnersSec";
import ContactBanner from "@/components/homes/home-7/ContactBanner";

export default function Page() {
  return (
    <>
      <div className="wrapper">
        <Header1
          className="vs-header7"
          menuClass="header-menu-area m-0"
          navClass="main-menu menu-style1 v4"
        />
        {/*======== / Header ========*/}
        {/* hero-style7 */}
        <HeroStyle7 />
        {/* End hero-style7 */}
        {/* project-sec3 */}
        <ProjectSec3 />
        {/* End project-sec3 */}
        {/* neural-playground */}
        <NeuralPlayground />
        {/* End neural-playground */}
        {/* service-sec11 */}
        <ServiceSec11 />
        {/* End service-sec11 */}
        {/* marquee-sec */}
        <MarqueeSec />
        {/* End marquee-sec */}
        {/* choose-us-sec */}
        <ChooseSec />
        {/* End choose-us-sec */}
        {/* service-sec4 */}
        <ServiceSec4 />
        {/* End service-sec4 */}
        {/* choose-us-sec4 */}
        <ChooseUsSec4 />
        {/* End choose-us-sec4 */}
        {/* pricing-style1 */}
        <PricingStyle1 />
        {/* End pricing-style1 */}
        {/* testimonials-sec */}
        <TestimonialsSec />
        {/* End testimonials-sec */}
        {/* faq-sec */}
        <FaqSec />
        {/* End faq-sec */}
        {/* blog-sec */}
        <BlogSec />
        {/* End blog-sec */}
        {/* partners-sec */}
        <PartnersSec />
        {/* End partners-sec */}
        {/* contact-banner */}
        <ContactBanner />
        {/* End contact-banner */}
        {/* footer-style2 */}
        <Footer2 />
        {/* footer-style12 */}
        {/* Scroll Button */}
      </div>
    </>
  );
}
