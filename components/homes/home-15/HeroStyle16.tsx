import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function HeroStyle16() {
  return (
    <section className="hero-style16">
      <div className="container2">
        <div className="row">
          <div className="col-lg-5">
            <div className="hero-img16">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/hero/hero15-1.png"
                width={699}
                height={844}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-content16">
              <h1 className="title">
                <span>Artificial Intelligence</span>
                <br />
                in nowadays life
              </h1>
              <p>
                Mummichog paradise fish! Triggerfish bango guppy opah sunfish
                bluntnose knifefish upside-down catfish cobia spookfish convict
                cichlid.
              </p>
              <div className="hero-btn16">
                <a href="#" className="ibt-btn ibt-btn-outline-2">
                  <span>Discover</span>
                  <i className="icon-arrow-top" />
                </a>
                <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
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
