import Link from "next/link";

export default function HeroStyle9() {
  return (
    <section className="hero-style14">
      <div className="container-fluid">
        <div className="row end">
          <div className="col-xl-7 col-lg-12">
            <div className="hero-title">
              <h1 className="gradient-title14">
                Revolutionizing Experiences with <span>VR + AI:</span> The
                Future
              </h1>
            </div>
          </div>
          <div className="col-xl-1" />
          <div className="col-xl-4 col-lg-12">
            <div className="hero-content14">
              <p>
                Highlight the potential benefits of Neural Networks, such as
                improved decision-making, predictive analytics, and automation.
              </p>
              <Link
                href={`/index14`}
                target="_blank"
                rel="noopener noreferrer"
                title=""
                className="ibt-btn ibt-btn-secondary"
              >
                <span>Generate yor vocice for free</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
