import Header1 from "@/components/headers/Header1";
import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(2);
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/homes/home-2/Blogs";
import Brands from "@/components/homes/home-2/Brands";
import Features from "@/components/homes/home-2/Features";
import Features2 from "@/components/homes/home-2/Features2";
import Features3 from "@/components/homes/home-2/Features3";
import Hero from "@/components/homes/home-2/Hero";
import Marquee from "@/components/homes/home-2/Marquee";
import Partners from "@/components/homes/home-2/Partners";
import Process from "@/components/homes/home-2/Process";
import Project from "@/components/homes/home-2/Project";
import Services from "@/components/homes/home-2/Services";
import Services2 from "@/components/homes/home-2/Services2";
import Testimonials from "@/components/homes/home-2/Testimonials";
import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";

export default function page() {
  return (
    <>
        <Header1 menuClass="header-menu-area3" className="vs-header3" />
        {/*======== / Header ========*/}
        {/* hero-style2 */}
        <Hero />
        {/* End hero-style2 */}
        {/* service-sec3 */}
        <Services />
        {/* End service-sec3 */}
        {/* about-us-sec2 */}
        <About />
        {/* End about-us-sec2 */}
        {/* feature-style2 */}
        <Features />
        {/* End feature-style2 */}
        {/* neural-playground2 */}
        <Brands />
        {/* End neural-playground2 */}
        {/* marquee-sec */}
        <Marquee />
        {/* End marquee-sec */}
        {/* choose-us-sec */}
        <Features2 />
        {/* Endchoose-us-sec */}
        {/* service-sec4 */}
        <Services2 />
        {/* End service-sec4 */}
        {/* feature-sec3 */}
        <Features3 />
        {/* End feature-sec3 */}
        {/* choose-us-sec2 */}
        <Process />
        {/* end choose-us-sec2 */}
        {/* project-sec */}
        <Project />
        {/* End project-sec */}
        {/* testimonial-sec2 */}
        <Testimonials />
        {/* End testimonial-sec2 */}
        {/* blog-sec2 */}
        <Blogs />
        {/* End blog-sec2 */}
        {/* partners-sec */}
        <Partners />
        {/* End partners-sec */}
        {/* contact-banner */}

        <section className="main-sec">
                          <Contact />
                          <Footer1 />
                </section>
    </>
  );
}
