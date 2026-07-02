import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/common/Counter";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function HeroStyle5() {
  return (
    <section className="hero-style5">
      <div className="container2">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-info5">
              <div className="hero-content5">
                <h1 className="title">
                  Transforming industries with cutting-edge AI solutions,
                  empowering businesses
                </h1>
                <a href="#" title="" className="ibt-btn ibt-btn-secondary">
                  <span>Discover</span>
                  <i className="icon-arrow-top" />
                </a>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="hero-block">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/hero/hero5-2.png"
                      width={420}
                      height={275}
                    />
                    <div className="hero-block-content">
                      <h4 className="title">How we’re making an impact</h4>
                      <div className="counter-box9">
                        <Counter max={500} extraClass="percent-counter" />
                        <span className="counter-text">K</span>
                      </div>
                      <span className="sub-title">Active users every day</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="hero-block v2">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/hero/hero5-3.png"
                      width={420}
                      height={274}
                    />
                    <div className="hero-block-content">
                      <h4 className="title">
                        Transforming the way you think with Atylus Startup
                      </h4>
                      <Link
                        href={`/index5`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title=""
                        className="ser-btn3"
                      >
                        Explore more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img5">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images//hero/hero5-1.png"
                width={907}
                height={855}
              />
              <h4 className="title">Innovating with Neural Networks</h4>
              <div className="exp-box">
                <div className="video-img">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/event/video.png"
                    width={190}
                    height={157}
                  />
                  <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                    <i className="fa fa-play" /> <span>Watch Video</span>
                  </VideoPopupButton>
                </div>
                <div className="counter-box2">
                  <Counter max={350} />
                  <span className="counter-text">+</span>
                </div>
                <p>Creative specialist in our team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
