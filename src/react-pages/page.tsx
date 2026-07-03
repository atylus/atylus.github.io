import ContactBanner2 from "@/components/homes/home-3/ContactBanner2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-3/About";
import { getDemoMetadata } from "@/data/demo";
import { useLocale } from "@/compat/next/navigation";
import { getHomePageMessages } from "@/react-pages/messages/home";

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
  const locale = useLocale();
  const messages = getHomePageMessages(locale);
  const featureItems = messages.features.items.map((item, index) => ({
    ...item,
    href: [
      "/yapay-zeka-teknolojileri",
      "/ozel-yazilim-cozumleri",
      "/yapay-sinir-agi-gelistirme",
      "/yazilim-gelistirme-surecleri",
      "/yapay-zeka-danismanligi",
      "/bilgisayarli-goru-cozumleri",
      "/yapay-zeka-sistem-entegrasyonu",
      "/ongorusel-veri-analitigi",
    ][index],
    iconSrc: [
      "/assets/images/feature/feature1.svg",
      "/assets/images/feature/feature2.svg",
      "/assets/images/feature/feature3.svg",
      "/assets/images/feature/feature4.svg",
      "/assets/images/feature/feature5.svg",
      "/assets/images/feature/feature6.svg",
      "/assets/images/feature/feature7.svg",
      "/assets/images/feature/feature8.svg",
    ][index],
    iconWidth: [24, 24, 28, 26, 26, 32, 26, 30][index],
    iconHeight: [24, 24, 28, 26, 27, 32, 26, 30][index],
  }));

  return (
    <>
      <div className="wrapper-clip">
        <Header1 menuClass="header-menu-area3" className="vs-header3" />
        {/*======== / Header ========*/}
        {/* contact-banner */}
        <ContactBanner2 {...messages.banner} />
        {/* End contact-banner */}
        {/* service-sec5 */}
        <Services5 {...messages.heroServices} />
        {/* End service-sec5 */}
        {/* neural-playground */}
        <Brands title={messages.brands.title} />
        {/* End neural-playground */}
        {/* service-sec6 */}
        <Services6 {...messages.services} />
        {/* End service-sec6 */}
        {/* service-sec7 */}
        <Services7 title={messages.integration.title} />
        {/* End service-sec7 */}
        {/* marquee-sec */}
        <Marquee items={messages.marquee.items} />
        {/* End marquee-sec */}
        {/* feature-style1 */}
        <Features
          eyebrow={messages.features.eyebrow}
          title={messages.features.title}
          items={featureItems}
        />
        {/* End feature-style1 */}
        {/* about-us-sec */}
        <About {...messages.about} />
        {/* End about-us-sec */}
        {/* project-sec2 */}
        <Project
          eyebrow={messages.projects.eyebrow}
          title={messages.projects.title}
          ctaLabel={messages.projects.ctaLabel}
          ctaHref={messages.projects.ctaHref}
          items={messages.projects.items}
        />
        {/* End project-sec2 */}
        {/* team-section */}
        <Team {...messages.team} />
        {/* End team-section */}
        {/* partners-sec */}
        <Partners
          eyebrow={messages.partners.eyebrow}
          title={messages.partners.title}
        />
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
