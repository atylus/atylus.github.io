import Image from "next/image";
import VideoPopupButton from "../common/VideoPopupButton";
import Counter from "../common/Counter";

export default function Services() {
  return (
    <section className="service-sec22">
      <div className="container2">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="ser-card22">
              <div className="ser-content22">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  className="cross"
                  src="/assets/images/layers/corss2.png"
                  width={274}
                  height={94}
                />
                <h4 className="title">Mission</h4>
                <p>
                  Certainly, crafting a clear and inspiring mission statement is
                  essential for a development company. It should reflect your
                  company&apos;s values, purpose, and long-term objectives.
                  Here&apos;s a sample mission statement for a development
                  company,
                </p>
                <p>
                  At XXLando our mission is to empower businesses and
                  organizations through innovative development solutions. We are
                  committed to delivering exceptional, tailored software,
                  websites, and applications that not only meet our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            <div className="ser-card22 v2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/event/ser22-2.png"
                width={1254}
                height={599}
              />
              <div className="inner-content2">
                <h4 className="profection">
                  we create a professional product using artificial intelligence
                </h4>
                <div className="ser-counter22">
                  <div className="counter-box22">
                    <Counter extraClass="percent-counter" max={500} />
                    <span className="counter-text">+</span>
                  </div>
                  <span className="title">
                    Created <br />
                    projects
                  </span>
                </div>
              </div>
              <div className="ser-video-box">
                <VideoPopupButton
                  videoUrl="https://www.youtube.com/embed/aircAruvnKk"
                  className="video-popup"
                >
                  <i className="fa fa-play" /> Watch Video
                </VideoPopupButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
