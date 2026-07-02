import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ProjectSec11() {
  return (
    <section className="project-sec11 ibt-section-gapTop">
      <div className="container2">
        <div className="sec-title text-center white">
          <SubTitleWrapper>gallery</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Atylus AI-powered showcases spotlight which created by our neural
            network
          </TitleSplitWrapper>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="project-info11">
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-1.png"
                    width={420}
                    height={555}
                  />
                </a>
                <h4 className="title">
                  <a href="#" title="">
                    SmartTrader: Predictive Stock Market Analysis using Neural
                    Networks
                  </a>
                </h4>
              </div>
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-2.png"
                    width={420}
                    height={555}
                  />
                </a>
              </div>
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-3.png"
                    width={420}
                    height={415}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="project-info11">
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-4.png"
                    width={420}
                    height={415}
                  />
                </a>
              </div>
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-5.png"
                    width={420}
                    height={555}
                  />
                </a>
              </div>
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-6.png"
                    width={420}
                    height={555}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="project-info11">
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-7.png"
                    width={420}
                    height={555}
                  />
                </a>
              </div>
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-8.png"
                    width={419}
                    height={633}
                  />
                </a>
              </div>
              <div className="project-block11 v2">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-9.png"
                    width={420}
                    height={555}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="project-info11">
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-10.png"
                    width={419}
                    height={633}
                  />
                </a>
              </div>
              <div className="project-block11">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-11.png"
                    width={420}
                    height={415}
                  />
                </a>
              </div>
              <div className="project-block11 v3">
                <a href="#">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project12-12.png"
                    width={419}
                    height={633}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pro-btn11">
          <a href="#" className="ibt-btn ibt-btn-outline-2">
            <span>Explore more</span>
            <i className="icon-arrow-top" />
          </a>
        </div>
      </div>
    </section>
  );
}
