import ContactButton from "@/components/common/ContactButton";

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-8">
            <div className="contact-banner-content">
              <h2 className="title">
                Elevate your business with our innovative solutions
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="btn-box2">
              <ContactButton
                href="/index7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
