import Image from "next/image";

import Counter from "@/components/common/Counter";

export default function ServiceSec12() {
  return (
    <section className="service-sec12">
      <div className="container2">
        <div className="outer-box12">
          <div className="ser-card12">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/service/ser12-1.png"
              width={673}
              height={561}
            />
            <div className="ser-content12">
              <div className="ser-text12">
                <a href="#" title="">
                  Solutions
                </a>
                <a href="#" title="">
                  Plugins
                </a>
              </div>
              <h4 className="title">
                Transform customer support with intelligent AI chatbots for
                seamless and effortless service
              </h4>
              <ul className="social-icon2">
                <li>
                  <a href="#" title="">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/icon/social2-1.svg"
                      width={52}
                      height={53}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/icon/social2-2.svg"
                      width={46}
                      height={48}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/icon/social2-3.svg"
                      width={53}
                      height={53}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/icon/social2-4.svg"
                      width={54}
                      height={54}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="ser-btn">
              <i className="icon fontello icon-button-arrow" />
              <i className="icon2 fontello icon-button-arrow" />
            </a>
          </div>
          <div className="ser-card12">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/service/ser12-2.png"
              width={673}
              height={561}
            />
            <div className="ser-content12 v2">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/icon/icon12.svg"
                width={55}
                height={55}
              />
              <h4 className="title">
                All-in-One AI solutions dashboard for smarter business insights
                &amp; innovation.
              </h4>
              <p>
                Explore our comprehensive AI solutions dashboard designed to
                provide actionable business insights and drive innovation
              </p>
            </div>
            <a href="#" className="ser-btn">
              <i className="icon fontello icon-button-arrow" />
              <i className="icon2 fontello icon-button-arrow" />
            </a>
          </div>
          <div className="ser-info12">
            <div className="ser-counter12">
              <div className="counter-box12">
                <Counter max={500} extraClass="percent-counter" />
                <span className="counter-text">K+</span>
              </div>
              <span className="client2">Happy clients</span>
            </div>
            <div className="inner-block12">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser12-3.png"
                width={494}
                height={358}
              />
              <div className="inner-content12">
                <h4 className="title">
                  Unlock your full potential with effortless OpenAI integration
                  solutions
                </h4>
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/event/ai.png"
                  width={136}
                  height={36}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
