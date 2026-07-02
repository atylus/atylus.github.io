import Image from "next/image";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
export default function ProjectSingleIntro() {
  return (
    <section className="project-single ibt-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-4">
            <div className="project-img7">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/project/project7-1.png"
                width={181}
                height={67}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-8">
            <div className="project-content7">
              <div className="sec-title mb-0">
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Brief and project description
                </TitleSplitWrapper>
                <p>
                  Integrating neural network models into existing systems or
                  software applications, enabling businesses to leverage AI
                  capabilities seamlessly.
                </p>
                <p className="paragraph">
                  In today&apos;s fast-paced and data-driven world, businesses
                  are constantly seeking innovative ways to gain a competitive
                  edge, make smarter decisions, and deliver exceptional customer
                  experiences.
                </p>
              </div>
              <ul className="ser-detail-list">
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Pacific hake false trevally queen parrotfish black
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Prickleback moss revally queen parrotfish black
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Queen parrotfish black prickleback moss pacific
                </li>
                <li>
                  <i className="fontello icon-button-arrow-down" />
                  Hake false trevally queen
                </li>
              </ul>
              <div className="project-post-meta">
                <div className="post-meta-item">
                  <h4 className="title">Strategy</h4>
                  <p>Creating project Mobile app</p>
                </div>
                <div className="post-meta-item">
                  <h4 className="title">Design</h4>
                  <p>Artificial Intellegance Neural Networks</p>
                </div>
                <div className="post-meta-item m-0">
                  <h4 className="title">Client</h4>
                  <p>AIX Team</p>
                </div>
              </div>
              <a href="#" title="" className="ibt-btn ibt-btn-outline">
                <span>Live project</span>
                <i className="icon-arrow-top" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
