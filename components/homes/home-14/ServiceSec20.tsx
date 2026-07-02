import Image from "next/image";

export default function ServiceSec20() {
  return (
    <section className="service-sec20">
      <div className="container2">
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="ser-info20">
              <div className="ser-card20_card1">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/icon14-1.svg"
                  width={45}
                  height={45}
                />
                <h4 className="title">AI-Powered Personalization</h4>
                <p>
                  Adaptive experiences based on user behavior and preferences
                </p>
              </div>
              <div className="ser-card20_card2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/icon14-2.svg"
                  width={39}
                  height={39}
                />
                <h4 className="title">AI+VR 3D</h4>
                <span>Fully interactive</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div className="ser-info20">
              <div className="ser-card20_card3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser20-1.png"
                  width={439}
                  height={263}
                />
                <h4 className="title">
                  A lot if different styles and colors for one AI Gadget
                </h4>
              </div>
              <div className="ser-card20_card4">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/ser20-2.png"
                  width={441}
                  height={265}
                />
                <h4 className="title">
                  360° Spatial Awareness&nbsp;– Complete freedom to explore and
                  interact in a virtual space.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="ser-card20_card5">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser20-3.png"
                width={932}
                height={546}
              />
              <h4 className="title">AI Oculus</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
