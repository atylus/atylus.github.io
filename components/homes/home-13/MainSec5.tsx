import Link from "next/link";
import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

export default function MainSec5() {
  return (
    <section className="main-sec5">
      {/* hero-style13 */}
      <div className="hero-style13">
        <div className="container">
          <div className="hero-content13">
            <h1 className="title">
              Bridging top talent with innovative opportunities at the Atylus IT
              dervices
            </h1>
            <p>
              Our startup development services are designed to accelerate your
              journey from concept to launch, providing you with the technical
              expertise and strategic guidance needed to succeed.
            </p>
            <Link
              href={`/index13`}
              target="_blank"
              rel="noopener noreferrer"
              title=""
              className="ibt-btn ibt-btn-secondary"
            >
              <span>Discover</span>
              <i className="icon-arrow-top" />
            </Link>
          </div>
        </div>
      </div>
      {/* End hero-style13 */}
      {/* service-sec19 */}
      <div className="service-sec19">
        <div className="container2">
          <div className="ser-box19">
            <div className="ser-info19">
              <div className="service-block19">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-1.png"
                  width={365}
                  height={569}
                />
                <h4 className="title">Achievements of our startup</h4>
              </div>
            </div>
            <div className="ser-info19">
              <div className="service-block19 v1">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-2.png"
                  width={365}
                  height={499}
                />
                <h4 className="title2">Atylus</h4>
              </div>
              <div className="ser-content19">
                <div className="ser-counter19">
                  <div className="counter-box19 m-0">
                    <Counter max={150} />
                    <span className="counter-text">K</span>
                  </div>
                  <span className="sub-title">Active users every day</span>
                </div>
              </div>
            </div>
            <div className="ser-info19">
              <div className="service-block19 v1">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-3.png"
                  width={365}
                  height={274}
                />
              </div>
              <div className="service-block19 m-0">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-4.png"
                  width={365}
                  height={376}
                />
                <h4 className="title">Professional team &amp; tech</h4>
              </div>
            </div>
            <div className="ser-info19">
              <div className="service-block19 v1">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-5.png"
                  width={365}
                  height={499}
                />
              </div>
              <div className="service-block19 m-0">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-6.png"
                  width={365}
                  height={228}
                />
              </div>
            </div>
            <div className="ser-info19 m-0">
              <div className="service-block19 v2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser19-7.png"
                  width={365}
                  height={564}
                />
                <h4 className="title">Programming &amp; development</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End service-sec19 */}
      {/* about-us-sec8 */}
      <div className="about-us-sec8 ibt-section-gap">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-4">
              <div className="about-counter6">
                <div className="about-counter-content6">
                  <div className="counter-box15">
                    <Counter max={1500} extraClass="percent-counter2" />
                    <span className="counter-text">k+</span>
                  </div>
                  <span className="title">Research per year</span>
                </div>
                <div className="about-counter-content6">
                  <div className="counter-box15">
                    <Counter max={99.9} extraClass="percent-counter3" />
                    <span className="counter-text">%</span>
                  </div>
                  <span className="title">The quality of results</span>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="about-content6">
                <div className="sec-title white mb-0">
                  <SubTitleWrapper>about us</SubTitleWrapper>
                  <TitleSplitWrapper
                    tag="h2"
                    className="title animated-heading"
                  >
                    AI consulting powered by Neuros for transformative business
                    solutions.
                  </TitleSplitWrapper>
                  <p>
                    Artificial Intelligence refers to the development of
                    computer systems that can perform tasks that would typically
                    require human intelligence. It involves the creation of
                    algorithms and models that enable machines to learn, reason,
                    perceive, and make decisions.
                  </p>
                  <p className="paragraph">
                    There are generally two types of AI: Narrow or Weak AI,
                    which is designed to perform specific tasks, and General or
                    Strong AI, which possesses human-level intelligence and can
                    handle a wide range of tasks.
                  </p>
                  <Link
                    href={`/index13`}
                    title=""
                    className="ibt-btn ibt-btn-outline"
                  >
                    <span>Explore more</span>
                    <i className="icon-arrow-top" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End about-us-sec8 */}
      {/* science-lab */}
      <div className="science-lab2 ibt-section-gapBottom">
        <div className="container-fluid">
          <div className="science-content2">
            <h2 className="title">
              [ Empowering businesses <span> with smart IT solutions</span> ]
            </h2>
          </div>
        </div>
      </div>
      {/* End science-lab */}
      {/* video-banner2 */}
      <div className="video-banner2">
        <div className="video-banner-img2">
          <Image
            alt="AI Agency & Technology HTML Template"
            src="/assets/images/logo4.svg"
            width={203}
            height={37}
          />
          <div className="video-box4">
            <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
              <i className="fa fa-play" /> Watch Video
            </VideoPopupButton>
          </div>
        </div>
      </div>
      {/* End video-banner2 */}
    </section>
  );
}
