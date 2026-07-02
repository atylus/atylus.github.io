import Image from "next/image";

import ContactButton from "@/components/common/ContactButton";

export default function ContactBanner3() {
  return (
    <section className="contact-banner3 v2">
      <div className="parallax-wrap">
        <Image
          alt="Banner"
          className="parallax-img"
          src="/assets/images/bg/banner5.png"
          width={1874}
          height={603}
        />
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7 col-md-8">
            <div className="contact-banner-content3">
              <h2 className="title">Future is here. Meet changes!</h2>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <div className="btn-box4">
              <ContactButton
                href="/index2"
                target="_blank"
                rel="noopener noreferrer"
                className="video-popup"
                data-video="https://www.youtube.com/embed/aircAruvnKk"
              >
                Play video
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
