import ContactBanner2 from "@/components/homes/home-3/ContactBanner2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-3/About";
import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(3);
import Brands from "@/components/homes/home-3/Brands";
import Features from "@/components/homes/home-3/Features";
import Marquee from "@/components/homes/home-3/Marquee";
import Partners from "@/components/homes/home-3/Partners";
import Project from "@/components/homes/home-3/Project";
import Services5 from "@/components/homes/home-3/Services5";
import Services6 from "@/components/homes/home-3/Services6";
import Services7 from "@/components/homes/home-3/Services7";
import Team from "@/components/homes/home-3/Team";
import Contact from "@/components/contact/Contact";

export default function page() {
  return (
    <>
      <div className="wrapper-clip">
        <Header1 menuClass="header-menu-area3" className="vs-header3" />
        {/*======== / Header ========*/}
        {/* contact-banner */}
        <ContactBanner2 />
        {/* End contact-banner */}
        {/* service-sec5 */}
        <Services5 />
        {/* End service-sec5 */}
        {/* neural-playground */}
        <Brands />
        {/* End neural-playground */}
        {/* service-sec6 */}
        <Services6 />
        {/* End service-sec6 */}
        {/* service-sec7 */}
        <Services7 />
        {/* End service-sec7 */}
        {/* marquee-sec */}
        <Marquee />
        {/* End marquee-sec */}
        {/* feature-style1 */}
        <Features />
        {/* End feature-style1 */}
        {/* about-us-sec */}
        <About />
        {/* End about-us-sec */}
        {/* project-sec2 */}
        <Project />
        {/* End project-sec2 */}
        {/* team-section */}
        <Team />
        {/* End team-section */}
        {/* partners-sec */}
        <Partners />
        {/* End partners-sec */}
        {/* main-sec */}
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
        {/* End main-sec */}
      </div>
    </>
  );
}
