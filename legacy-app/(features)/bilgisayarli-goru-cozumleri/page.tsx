import Footer5 from "@/components/footers/Footer5";
import Header1 from "@/components/headers/Header1";
import { getDemoMetadata } from "@/data/demo";

export const metadata = getDemoMetadata(16);
import AboutUsSec2 from "@/components/homes/home-16/AboutUsSec2";
import BrandSec2 from "@/components/homes/home-16/BrandSec2";
import ContactBanner3 from "@/components/homes/home-16/ContactBanner3";
import FeatureSec13 from "@/components/homes/home-16/FeatureSec13";
import FeatureSec14 from "@/components/homes/home-16/FeatureSec14";
import FeatureStyle15 from "@/components/homes/home-16/FeatureStyle15";
import MainSec8 from "@/components/homes/home-16/MainSec8";
import MarqueeSec from "@/components/homes/home-16/MarqueeSec";
import PricingStyle5 from "@/components/homes/home-16/PricingStyle5";
import ProjectSec11 from "@/components/homes/home-16/ProjectSec11";
import ForceThemeMode from "@/components/common/ForceDarkForIndex15";

export default function page() {
  return (
    <>
      <ForceThemeMode mode="dark" />
      <div className="wrapper">
        <Header1
          hasLogin
          stickyClass="sticky-active v3 is-sticky"
          className="vs-header2 v15"
        />
        {/*======== / Header ========*/}
        <MainSec8 />
        <BrandSec2 />
        <AboutUsSec2 />
        <FeatureSec13 />
        <MarqueeSec />
        <FeatureSec14 />
        <ProjectSec11 />
        <FeatureStyle15 />
        <ContactBanner3 />
        <PricingStyle5 />
        <Footer5 />
      </div>
    </>
  );
}
