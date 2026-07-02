import Link from "next/link";
import Brands from "@/components/homes/home-1/Brands";
import TestimonialsSec from "@/components/homes/home-1/Testimonials";
import Team from "@/components/others-pages/Team";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("team");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner */}
        <section className="page-banner">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">Staff</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ Creative team /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Creative team</li>
          </ul>
        </section>
        {/* End page-banner */}
        {/* team-section2 */}
        <Team />
        {/* End team-section2 */}
        {/* testimonials-sec */}
        <TestimonialsSec />
        {/* End testimonials-sec */}
        {/* neural-playground */}
        <Brands parentClass="neural-playground7 ibt-section-gap" />
        {/* End neural-playground */}
      </>
    </>
  );
}
