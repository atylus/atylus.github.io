import Link from "next/link";
import Image from "next/image";

export default function HeroSection10() {
  return (
    <section className="hero-section10">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="hero-content10">
              <div className="hero-info10">
                <h1 className="title">
                  Driving innovation with state-of-the-art laboratory science
                  solutions.
                </h1>
                <p>
                  Empowering innovation through state-of-the-art laboratory
                  science. Discover the future of research and development with
                  our advanced solutions
                </p>
                <Link
                  href={`/index10`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title=""
                  className="ibt-btn ibt-btn-secondary"
                >
                  <span>Discover</span>
                  <i className="icon-arrow-top" />
                </Link>
              </div>
              <div className="hero-contact10">
                <span className="sub-title">Call us today:</span>
                <a href="tel:8003508431" title="">
                  +1 800 684 32 59
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="hero-img10">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/hero/hero10-1.png"
                width={1194}
                height={774}
              />
              <span>Science solutions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
