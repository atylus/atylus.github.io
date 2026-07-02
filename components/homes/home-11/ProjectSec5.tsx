import Image from "next/image";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function ProjectSec5() {
  return (
    <section className="project-sec5 ibt-section-gap">
      <div className="container4">
        <div className="title-area">
          <div className="row mb-0">
            <div className="col-xl-6 col-lg-12">
              <div className="title-btn3">
                <div className="user-count5">
                  <div className="counter-box16">
                    <Counter max={200} />
                    <span className="counter-text">+</span>
                  </div>
                  <span className="user">
                    Completed <br />
                    projects
                  </span>
                </div>
                <a href="#" title="" className="ibt-btn ibt-btn-outline">
                  <span>More projects</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="sec-title mb-0">
                <SubTitleWrapper>projects</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  The distinctive benefits and competitive advantages that set
                  our service apart
                </TitleSplitWrapper>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="project-card5 v1">
              <div className="project-img5">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro15-1.png"
                  width={652}
                  height={601}
                />
                <a href="#" className="ser-btn">
                  <i className="icon fontello icon-button-arrow" />
                  <i className="icon2 fontello icon-button-arrow" />
                </a>
              </div>
              <div className="project-content5">
                <h4 className="title">
                  Aigency | Building and renovation website develoment
                </h4>
                <p>
                  A neural network consists of interconnected nodes called
                  neurons. Neurons are organized into layers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="project-card5 v2">
              <div className="project-img5">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro15-2.png"
                  width={652}
                  height={601}
                />
                <a href="#" className="ser-btn">
                  <i className="icon fontello icon-button-arrow" />
                  <i className="icon2 fontello icon-button-arrow" />
                </a>
              </div>
              <div className="project-content5">
                <h4 className="title">
                  Neuros | AI startup and modern technologies design
                </h4>
                <p>
                  Each neuron applies an activation function to the weighted sum
                  of its inputs and produces an output
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="project-card5 v1">
              <div className="project-img5">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro15-3.png"
                  width={656}
                  height={601}
                />
                <a href="#" className="ser-btn">
                  <i className="icon fontello icon-button-arrow" />
                  <i className="icon2 fontello icon-button-arrow" />
                </a>
              </div>
              <div className="project-content5">
                <h4 className="title">
                  Biuro | Creative agency website design
                </h4>
                <p>
                  A neural network consists of interconnected nodes called
                  neurons. Neurons are organized into layers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="project-card5 v2">
              <div className="project-img5">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/pro15-4.png"
                  width={652}
                  height={601}
                />
                <a href="#" className="ser-btn">
                  <i className="icon fontello icon-button-arrow" />
                  <i className="icon2 fontello icon-button-arrow" />
                </a>
              </div>
              <div className="project-content5">
                <h4 className="title">
                  Atylus | AI startup and modern technologies design
                </h4>
                <p>
                  Each neuron applies an activation function to the weighted sum
                  of its inputs and produces an output
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
