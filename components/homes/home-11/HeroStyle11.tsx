import Image from "next/image";

import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function HeroStyle11() {
  return (
    <section className="hero-style11">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <div className="hero-img15">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/hero/hero11-1.png"
                width={819}
                height={835}
              />
              <div className="blur-content">
                <span>Atylus</span>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-12 col-md-12">
            <div className="hero-content11">
              <h1 className="title">
                Tailored social media strategies and expert digital marketing
                consulting designed to your goals.
              </h1>
              <a href="#" title="" className="ibt-btn ibt-btn-secondary">
                <span>Discover</span>
                <i className="icon-arrow-top" />
              </a>
              <div className="inner-img11">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/hero/video-img11.png"
                  width={420}
                  height={274}
                />
                <div className="hero-video11">
                  <VideoPopupButton
                    videoUrl="https://www.youtube.com/embed/aircAruvnKk"
                    className="video-popup"
                  >
                    <i className="fa fa-play" /> Showreel
                  </VideoPopupButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
