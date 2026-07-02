import Image from "next/image";

export default function ServiceBanner() {
  return (
    <section className="service-banner ibt-section-gapTop">
      <div className="container2">
        <div className="ser-banner-card">
          <Image
            alt="AI Agency & Technology HTML Template"
            src="/assets/images/service/ser-banner.png"
            width={1876}
            height={601}
          />
          <Image
            alt="AI Agency & Technology HTML Template"
            className="ser-banner-icon"
            src="/assets/images/service/ser-icon21.svg"
            width={48}
            height={48}
          />
          <div className="ser-banner-content">
            <h4 className="title">Cross-Platform Compatibility</h4>
            <p>
              Available on iOS and Android devices, ensuring a consistent
              experience.
            </p>
          </div>
          <a href="#" className="ser-btn">
            <i className="icon fontello icon-button-arrow" />
            <i className="icon2 fontello icon-button-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
