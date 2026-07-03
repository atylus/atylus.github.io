import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";

type Services5Props = {
  badges: string[];
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  counterValue: string;
  counterTitle: string;
  secondaryTitle: string;
  secondaryDescription: string;
  videoLabel: string;
};

export default function Services5({
  badges,
  title,
  description,
  ctaLabel,
  ctaHref,
  counterValue,
  counterTitle,
  secondaryTitle,
  secondaryDescription,
  videoLabel,
}: Services5Props) {
  return (
    <section className="service-sec5">
      <div className="container2">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="ser-card5">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser5-1.png"
                width={623}
                height={599}
              />
              <div className="ser-content5">
                <div className="ser-text3">
                  <a href={ctaHref} title="">
                    {badges[0]}
                  </a>
                  <a href={ctaHref} title="">
                    {badges[1]}
                  </a>
                </div>
                <h4 className="title">{title}</h4>
                <p>{description}</p>
                <a href={ctaHref} title="" className="ser-btn3">
                  {ctaLabel}
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-6 col-md-12">
            <div className="ser-card5 v2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser5-2.png"
                width={1241}
                height={599}
              />
              <div className="ser-counter">
                <div className="counter-box6">
                  <span className="percent-counter">{counterValue}</span>
                </div>
                <span className="title">{counterTitle}</span>
              </div>
              <h4 className="profection">{secondaryTitle}</h4>
              <p className="profection-text">{secondaryDescription}</p>
              <div className="ser-video-box">
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                  <i className="fa fa-play" /> {videoLabel}
                </VideoPopupButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
