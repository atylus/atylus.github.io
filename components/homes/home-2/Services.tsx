import Link from "next/link";
import Image from "next/image";

import Counter from "@/components/common/Counter";

export default function Services() {
  return (
    <section className="service-sec3">
      <div className="container2">
        <div className="service-content3">
          <div className="ser-card3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/service/ser3-1.png"
              width={710}
              height={401}
            />
            <div className="ser-content3">
              <h4 className="title">
                API integration to your business model for effective working
              </h4>
              <a href="#" title="" className="ser-btn3">
                Explore more
              </a>
            </div>
            <div className="ser-text">
              <a href="#" title="">
                AI Solutions
              </a>
              <a href="#" title="">
                AI Services
              </a>
            </div>
            <Link
              href={`/index2`}
              className="ser-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fontello icon-button-arrow" />
              <i className="icon2 fontello icon-button-arrow" />
            </Link>
          </div>
          <div className="ser-card3 v2">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/service/ser3-2.png"
              width={710}
              height={401}
            />
            <a href="#" className="view-btn">
              <i className="icon fontello icon-button-arrow" />
              <i className="icon2 fontello icon-button-arrow" />
            </a>
            <div className="ser-team">
              <h4 className="title">
                Accompanying documentation for all services and products
              </h4>
              <p>
                Explore limitless possibilities with our intelligent solutions.
                Embrace the power of artificial intelligence today
              </p>
              <div className="ser-team-info">
                <div className="auther-info">
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
                <div className="counter-content">
                  <div className="counter-box3">
                    <Counter max={20} />
                    <span className="counter-text">k+</span>
                  </div>
                  <span className="user">live users </span>
                </div>
              </div>
            </div>
          </div>
          <div className="ser-card3 v1">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/service/ser3-3.png"
              width={420}
              height={401}
            />
            <div className="ser-content">
              <h4 className="title">
                Technical support for the entire service life
              </h4>
              <p>
                Instant assistance for all your queries. Experience seamless
                service with our AI-powered support
              </p>
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/phone2.svg"
                width={48}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
