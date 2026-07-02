import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";

export default function ProjectSingleFunFacts() {
  return (
    <section className="fun-fact-sec3 ibt-section-gap">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-3 col-lg-0" />
          <div className="col-xl-5 col-lg-6">
            <div className="fun-fact-content3">
              <h4 className="title">Key Outcomes</h4>
              <p>
                Data lies at the heart of neural networks, and our services
                start with understanding your unique data landscape. We work
                closely with you to identify and collect relevant data sources,
                ensuring that your neural network models are built on a solid
                foundation. Our data scientists employ cutting-edge techniques
                to preprocess and clean the data, making it ready for training
                the neural network models.
              </p>
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
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="fun-fact3">
              <div className="fun-fact-counter3">
                <div className="counter-box15">
                  <Counter max={90} extraClass="percent-counter2" />
                  <span className="counter-text">%</span>
                </div>
                <span className="title">
                  Savings in cost on video production
                </span>
              </div>
              <div className="fun-fact-counter3 mb-0">
                <div className="counter-box15">
                  <Counter max={250} extraClass="percent-counter2" />
                  <span className="counter-text">+</span>
                </div>
                <span className="title">Increase in learning </span>
              </div>
            </div>
          </div>
        </div>
        <div className="post-navigation ibt-section-gapTop">
          <div className="post-nav-item">
            <a href="#" title="" className="post-btn">
              Prev project
            </a>
            <div className="post-nav-content">
              <Link href={`/project-single`}>
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/fun1-1.png"
                  width={136}
                  height={106}
                />
              </Link>
              <span className="designation">Development</span>
              <h4 className="name">
                <Link href={`/project-single`}>Health CareAI</Link>
              </h4>
            </div>
          </div>
          <a href="#" title="" className="toggel2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/icon/toggel.svg"
              width={20}
              height={20}
            />
          </a>
          <div className="post-nav-item2">
            <a href="#" title="" className="post-btn2">
              Next project
            </a>
            <div className="post-nav-content2">
              <span className="designation">Development</span>
              <h4 className="name">
                <Link href={`/project-single`}>AutoDrive</Link>
              </h4>
              <Link href={`/project-single`}>
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/project/fun1-2.png"
                  width={136}
                  height={106}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
