import Image from "next/image";

export default function Services2() {
  return (
    <section className="service-sec4">
      <div className="container2">
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-11">
            <div className="service-content4">
              <div className="empty3" />
              <h4 className="title">
                We work and integrate with this services
              </h4>
              <div className="service-box4">
                <div className="social-link2">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/icon/socila6.svg"
                    width={50}
                    height={52}
                  />
                  <span>Slack</span>
                </div>
                <div className="social-link2">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/icon/social1.svg"
                    width={57}
                    height={53}
                  />
                  <span>Duolingo</span>
                </div>
                <div className="social-link2">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/icon/social2.svg"
                    width={57}
                    height={60}
                  />
                  <span>Messanger</span>
                </div>
                <div className="social-link2">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/icon/social3.svg"
                    width={56}
                    height={58}
                  />
                  <span>Skype</span>
                </div>
                <div className="social-link2">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/icon/social4.svg"
                    width={59}
                    height={59}
                  />
                  <span>Telegram</span>
                </div>
                <div className="social-link2">
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
      </div>
    </section>
  );
}
