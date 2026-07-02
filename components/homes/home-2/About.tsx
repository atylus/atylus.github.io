import Link from "next/link";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function About() {
  return (
    <section className="about-us-sec2 ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content2">
              <div className="sec-title">
                <SubTitleWrapper>about</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Explore limitless possibilities with our intelligent solutions
                </TitleSplitWrapper>
              </div>
              <div className="about-counter">
                <div className="counter-box4">
                  <Counter max={270} />
                  <span className="counter-text">k</span>
                </div>
                <span className="solutions">AI Solutions for our clients</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-info2">
              <p>
                ATYLUS is a leading AI agency committed to transforming
                businesses through cutting-edge artificial intelligence
                solutions. We specialize in delivering tailored AI strategies
                that drive innovation, optimize processes, and unlock new
                opportunities for growth.
              </p>
              <p>
                With a team of experts in machine learning, data science, and
                advanced analytics, we help companies harness the power of AI to
                solve complex challenges and gain a competitive edge. From
                predictive analytics and intelligent automation to natural
                language processing and computer vision, ATYLUS empowers
                organizations to thrive in the digital age with intelligent,
                scalable, and sustainable solutions.
              </p>
              <Link
                href={`/service`}
                title=""
                className="ibt-btn ibt-btn-outline"
              >
                <span>Explore More</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
