import ContactButton from "@/components/common/ContactButton";

type ContactBanner2Props = {
  titlePrefix: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function ContactBanner2({
  titlePrefix,
  title,
  ctaLabel,
  ctaHref,
}: ContactBanner2Props) {
  return (
    <section className="contact-banner2">
      <div className="container4">
        <div className="row align-items-end">
          <div className="col-lg-9 col-md-9">
            <div className="contact-banner-content2">
              <h2 className="title">
                <span>{titlePrefix} </span>
                {title}
              </h2>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="btn-box3">
              <ContactButton href={ctaHref}>
                {ctaLabel}
              </ContactButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
