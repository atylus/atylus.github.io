import Link from "next/link";
import Image from "next/image";
import VideoPopupButton from "@/components/common/VideoPopupButton";

export default function MainSec9() {
  return (
    <section className="main-sec9">
      {/* hero-style18 */}
      <div className="hero-style18">
        <div className="container">
          <div className="hero-content18">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/logo5.svg"
              width={81}
              height={15}
            />
            <h1 className="title">
              Crafting Intelligent Content for a Dynamic Digital Future
            </h1>
            <p>
              Showcase successful case studies or client testimonials that
              demonstrate the effectiveness of your services
            </p>
            <div className="hero-btn18">
              <Link
                href={`/project-single`}
                target="_blank"
                rel="noopener noreferrer"
                className="ibt-btn ibt-btn-secondary"
              >
                <span>Discover</span>
                <i className="icon-arrow-top" />
              </Link>
              <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                <i className="fa fa-play" /> Watch Video
              </VideoPopupButton>
            </div>
          </div>
        </div>
      </div>
      {/* End hero-style18 */}
      {/* service-sec27 */}
      <div className="service-sec27">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-6">
              <div className="ser-card27">
                <h4 className="title">
                  We provide the best services around the World
                </h4>
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser27-1.png"
                  width={767}
                  height={722}
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="ser-card27_card3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser27-2.png"
                  width={427}
                  height={722}
                />
                <div className="ser-content27">
                  <h4 className="title">AI Integration and Deployment</h4>
                  <p>
                    Assist in seamlessly integrating AI solutions into your
                    existing systems and deploying them at scale.
                  </p>
                </div>
                <ul className="ser-link27">
                  <li>
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/service/ser-link27-1.png"
                      width={52}
                      height={53}
                    />
                  </li>
                  <li>
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/service/ser-link27-2.png"
                      width={46}
                      height={48}
                    />
                  </li>
                  <li>
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/service/ser-link27-3.png"
                      width={53}
                      height={53}
                    />
                  </li>
                  <li>
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/service/ser-link27-4.png"
                      width={54}
                      height={54}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End service-sec27 */}
    </section>
  );
}
