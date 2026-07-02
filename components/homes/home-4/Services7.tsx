import Image from "next/image";

export default function Services7() {
  return (
    <section className="service-sec7 mb-0">
      <div className="container2">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="service-content7">
              <h4 className="title">
                We work and integrate with this services
              </h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service-box7">
              <div className="social-link3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/socila6.svg"
                  width={50}
                  height={52}
                />
                <span>Slack</span>
              </div>
              <div className="social-link3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/social2.svg"
                  width={57}
                  height={60}
                />
                <span>Messanger</span>
              </div>
              <div className="social-link3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/social3.svg"
                  width={56}
                  height={58}
                />
                <span>Skype</span>
              </div>
              <div className="social-link3">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/social4.svg"
                  width={59}
                  height={59}
                />
                <span>Telegram</span>
              </div>
              <div className="social-link3 m-0">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/icon/social5.svg"
                  width={54}
                  height={55}
                />
                <span>Discord</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
