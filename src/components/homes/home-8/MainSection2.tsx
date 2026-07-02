import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function MainSection2() {
  return (
    <section className="main-section2">
      {/* about-us-sec4 */}
      <div className="about-us-sec4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content4">
                <div className="sec-title white">
                  <SubTitleWrapper>about</SubTitleWrapper>
                  <TitleSplitWrapper
                    tag="h2"
                    className="title animated-heading"
                  >
                    WOW! Meet the next evolution of neural networks
                  </TitleSplitWrapper>
                </div>
                <h4 className="style-text4">
                  Atylus<span>AI</span>
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-info4">
                <p>
                  ATYLUS is a leading AI agency committed to transforming
                  businesses through cutting-edge artificial intelligence
                  solutions. We specialize in delivering tailored AI strategies
                  that drive innovation, optimize processes, and unlock new
                  opportunities for growth.
                </p>
                <p>
                  With a team of experts in machine learning, data science, and
                  advanced analytics, we help companies harness the power of AI
                  to solve complex challenges and gain a competitive edge. From
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
      </div>
      {/* End about-us-sec4 */}
      {/* service-sec13 */}
      <div className="service-sec13 ibt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="ser-card13">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser13-1.png"
                  width={420}
                  height={400}
                />
                <div className="ser-content13">
                  <h4 className="title">
                    <a href="#" title="">
                      AI-Powered Marketing &amp; Personalization
                    </a>
                  </h4>
                  <ul className="ser-list13">
                    <li>Hyper-personalized recommendations</li>
                    <li>AI-driven ad targeting &amp; optimization</li>
                    <li>Sentiment &amp; trend analysis</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ser-card13 v2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser13-2.png"
                  width={420}
                  height={386}
                />
                <div className="ser-content13">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/icon/bord.svg"
                    width={42}
                    height={42}
                  />
                  <h4 className="title">
                    <a href="#" title="">
                      Seamless AI integration for your business success
                    </a>
                  </h4>
                  <p>
                    Seamless integration with existing systems and
                    platforms&amp; Scalable and flexible architecture
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ser-card13 v3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser13-3.png"
                  width={192}
                  height={48}
                />
                <Image
                  alt="AI Agency & Technology HTML Template"
                  className="prdient"
                  src="/assets/images/service/ser13-4.png"
                  width={418}
                  height={559}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End service-sec13 */}
      {/* funfact-sec2 */}
      <div className="fun-fact-sec2 ibt-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="funfact-content3">
                <div className="counter-box13">
                  <Counter max={500} extraClass="percent-counter" />
                  <span className="counter-text">k+</span>
                </div>
                <h4 className="title">Happy &amp; satisfied customers</h4>
                <p>
                  Achieved a 95% customer satisfaction rate across all AI
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="funfact-content3">
                <div className="counter-box13 v2">
                  <span className="counter-text">$</span>
                  <Counter max={150} extraClass="percent-counter" />
                  <span className="counter-text">b</span>
                </div>
                <h4 className="title">Earns with our Atylus product</h4>
                <p>
                  Delivered over $150 billion in cost savings for clients
                  through optimized AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End funfact-sec2 */}
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
