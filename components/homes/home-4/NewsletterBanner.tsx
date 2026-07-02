"use client";
import Image from "next/image";

export default function NewsletterBanner() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription functionality
  };
  return (
    <section className="newsletter-banner">
      <div className="parallax-wrap">
        <Image
          alt="Banner"
          className="parallax-img"
          src="/assets/images/bg/banner2-1.png"
          width={1879}
          height={637}
        />
      </div>
      <div className="container2">
        <div className="newsletter-content ibt-section-gap">
          <h2 className="title">
            Elevate your experience with Interactive conversations and exclusive
            updates
          </h2>
          <p>
            Halosaur duckbilled barracudina, goosefish gar pleco, chum salmon
            armoured catfish gudgeon sawfish whitefish orbicular batfish
            mummichog paradise fish!
          </p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="input-box">
              <input type="text" placeholder="" required />
              <label>Enter your email</label>
            </div>
            <button className="ibt-btn ibt-btn-dark">
              <span>Subscribe</span>
              <i className="icon-arrow-top" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
