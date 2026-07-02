import Link from "next/link";
import Image from "next/image";

export default function ServiceSec16() {
  return (
    <section className="service-sec16">
      <div className="container2">
        <div className="row">
          <div className="col-lg-6">
            <div className="ser-block16">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/flask.svg"
                width={62}
                height={70}
              />
              <h4 className="title">
                Tailor-Made chemical synthesis Solutions for Specialized
                Applications
              </h4>
              <ul className="ser-list">
                <li>Synthesis of specialized compounds and reagents</li>
                <li>Tailored solutions for specific research needs</li>
                <li>Advanced data analysis services</li>
                <li>Comprehensive interpretation and reporting</li>
              </ul>
              <Link
                href={`/index10`}
                title=""
                className="ibt-btn ibt-btn-outline"
              >
                <span>Explore more</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ser-block16">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/flask2.svg"
                width={68}
                height={73}
              />
              <h4 className="title">
                Innovative prototyping and scalable growth solutions
              </h4>
              <ul className="ser-list">
                <li>Development of prototypes for new products</li>
                <li>Scale-up services for commercial production</li>
                <li>Hands-on training for laboratory techniques</li>
                <li>Workshops on emerging technologies a</li>
              </ul>
              <Link
                href={`/index10`}
                title=""
                className="ibt-btn ibt-btn-outline"
              >
                <span>Explore more</span>
                <i className="icon-arrow-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
