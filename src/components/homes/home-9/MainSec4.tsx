import Services1 from "@/components/services/Services1";
import Link from "next/link";

export default function MainSec4() {
  return (
    <section className="main-sec4">
      {/* her-style9 */}
      <div className="hero-style9">
        <div className="container-fluid">
          <div className="row end">
            <div className="col-lg-8">
              <div className="hero-title">
                <h1 className="gradient-title9">
                  Human-like <span>Atylus</span> voiceovers – no more robotic
                  speech!
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-content9">
                <p>
                  Highlight the potential benefits of Neural Networks, such as
                  improved decision-making, predictive analytics, and
                  automation.
                </p>
                <Link
                  href={`/index9`}
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
      </div>
      {/* End hero-style9 */}
      {/* service-sec14 */}
      <Services1 />
      {/* End service-sec14 */}
    </section>
  );
}
