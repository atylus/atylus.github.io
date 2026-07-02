import Image from "next/image";

export default function ServiceSec18() {
  return (
    <section className="service-sec18">
      <div className="container2">
        <div className="row">
          <div className="col-lg-4">
            <div className="service-block18">
              <h4 className="title">
                Over 5,000 companies trust Atylus to power their integrations
                seamlessly.
              </h4>
              <div className="ser-team-info v2">
                <div className="auther-img">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/event/auther1.png"
                    width={58}
                    height={58}
                  />
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/event/auther2.png"
                    width={58}
                    height={58}
                  />
                </div>
                <ul className="rating">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <span>20K+ users</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="ser-img18">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://demo.artureanec.com/themes/atylus/wp-content/uploads/2025/04/0_3d-Render_Abstract_1280x720.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="ser-text18">
                <span>
                  Bring your videos to life with powerful, professional Atylus
                  voiceovers!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
