import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function AboutUsSec7() {
  return (
    <section className="about-us-sec7">
      <div className="container2">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-content7">
              <h4 className="style-text7">
                Atylus<span>AI</span>
              </h4>
              <div className="sec-title mb-0">
                <SubTitleWrapper>about</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Step into the new era of neural networks
                </TitleSplitWrapper>
                <div className="about-info2">
                  <p>
                    Artificial Intelligence refers to the development of
                    computer systems that can perform tasks that would typically
                    require human intelligence. It involves the creation of
                    algorithms and models that enable machines to learn, reason,
                    perceive, and make decisions.
                  </p>
                  <p>
                    There are generally two types of AI: Narrow or Weak AI,
                    which is designed to perform specific tasks, and General or
                    Strong AI, which possesses human-level intelligence and can
                    handle a wide range of tasks.
                  </p>
                  <Link
                    href={`/index11`}
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
          <div className="col-lg-6">
            <div className="about-info7">
              <div className="sec-title white">
                <SubTitleWrapper>mission</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Fueling growth with cutting-edge and strategic marketing
                  solutions
                </TitleSplitWrapper>
                <p>
                  Our mission is to empower businesses with innovative marketing
                  strategies that drive growth, enhance brand visibility, and
                  foster lasting customer relationships. We are committed to
                  delivering data-driven insights, creative solutions, and
                  exceptional service to help our clients achieve their goals
                  and stay ahead in a competitive market
                </p>
              </div>
              <div className="about-img7">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/about1-1.png"
                  width={951}
                  height={469}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
