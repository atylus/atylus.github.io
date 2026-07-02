import Image from "next/image";

import HeroForm4 from "@/components/homes/home-4/HeroForm4";

export default function Hero() {
  return (
    <section className="hero-style4">
      <div className="container2">
        <div className="hero-info4">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="hero-content4">
                <h1 className="title">
                  Elevate engagement with our <span>Intelligent Chatbot</span>{" "}
                  Service
                </h1>
                <HeroForm4 />
                <ul className="required-list">
                  <li>
                    <i className="fontello icon-check-circle" />
                    Free 14-day trial
                  </li>
                  <li>
                    <i className="fontello icon-check-circle" />
                    No credit card required
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-img4">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/hero4.png"
                  width={964}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
