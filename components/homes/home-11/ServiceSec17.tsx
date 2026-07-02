import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ServiceSec17() {
  return (
    <section className="service-sec17 ibt-section-gapBottom">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>capabilities</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Elevate your brand with our tailored solutions
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="ser-card17">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/icon13-1.svg"
                width={130}
                height={131}
              />
              <h4 className="title">Social Media</h4>
              <p>
                Compelling content that connects with your audience, driving
                community engagement and building lasting brand loyalty.
              </p>
              <ul className="ser-list17">
                <li>Content Creation and Curation</li>
                <li>Social Media Strategy</li>
                <li>Community Management</li>
                <li>Creative Workshops</li>
                <li>High Client Retention Rate</li>
                <li>Global Brand Partnerships</li>
                <li>Award-Winning Campaigns</li>
              </ul>
              <Link href={`/service`} title="" className="ser-btn17">
                Services full list
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="ser-card17">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/icon13-2.svg"
                width={152}
                height={147}
              />
              <h4 className="title">UI/UX design</h4>
              <p>
                Crafting content that connects with your audience, driving
                engagement and building lasting brand loyalty with Neuros
                creatrive agency.
              </p>
              <ul className="ser-list17">
                <li>User Research &amp; Analysis</li>
                <li>Wireframing &amp; Prototyping</li>
                <li>Visual Design</li>
                <li>UI/UX Consulting</li>
                <li>Design Systems &amp; Guidelines</li>
                <li>Accessibility Design</li>
                <li>Performance Optimization</li>
              </ul>
              <Link href={`/service`} title="" className="ser-btn17">
                Services full list
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="ser-card17">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/icon13-3.svg"
                width={146}
                height={154}
              />
              <h4 className="title">Development</h4>
              <p>
                We specialize in creating custom software, applications, and
                websites that are scalable, secure, and optimized for
                performance
              </p>
              <ul className="ser-list17">
                <li>Custom Software Development</li>
                <li>Mobile App Development</li>
                <li>API Development &amp; Integration</li>
                <li>Content Management Systems (CMS)</li>
                <li>Database Design &amp; Management</li>
                <li>DevOps &amp; Continuous Integration</li>
                <li>Maintenance &amp; Support</li>
              </ul>
              <Link href={`/service`} title="" className="ser-btn17">
                Services full list
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
