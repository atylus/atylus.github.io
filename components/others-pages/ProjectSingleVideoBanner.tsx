import Image from "next/image";
export default function ProjectSingleVideoBanner() {
  return (
    <section className="video-banner4">
      <h2 className="visually-hidden">video Section</h2>
      <div className="parallax-wrap">
        <Image
          alt="Banner"
          className="parallax-img"
          src="/assets/images/bg/video4-1.png"
          width={1876}
          height={793}
        />
      </div>
      <div className="video-banner-img4">
        <Image
          alt="AI Agency & Technology HTML Template"
          src="/assets/images/logo4.svg"
          width={203}
          height={37}
        />
      </div>
      <div className="video-box6">
        <a
          href="#"
          className="video-popup"
          data-video="https://www.youtube.com/embed/aircAruvnKk"
        >
          <i className="fa fa-play" /> Watch Video
        </a>
      </div>
    </section>
  );
}
