import Link from "next/link";

import ContactForm from "@/components/contact/ContactForm";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { useLocale } from "@/compat/next/navigation";
import { getPageMetadata } from "@/data/pages";
import { getContactPageMessages } from "./messages";

export const metadata = getPageMetadata("contact");

export default function Page() {
  const locale = useLocale();
  const messages = getContactPageMessages(locale);

  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">{messages.bannerStaffText}</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">{messages.bannerTitle}</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>{messages.breadcrumbCurrent}</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* contact-sec */}
        <section className="contact-sec2 ibt-section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-content2">
                  <div className="sec-title">
                    <SubTitleWrapper>{messages.eyebrow}</SubTitleWrapper>
                    <TitleSplitWrapper
                      tag="h2"
                      className="title animated-heading"
                    >
                      {messages.title}
                    </TitleSplitWrapper>
                    <p>{messages.description}</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="contact-info">
                        <div className="call-center2">
                          <h4 className="title">{messages.phoneTitle}</h4>
                          <a href={`tel:${messages.phoneNumbers[0].replace(/\s+/g, "")}`} className="nmbr">
                            {messages.phoneNumbers[0]}
                          </a>
                          <a href={`tel:${messages.phoneNumbers[1].replace(/\s+/g, "")}`} className="nmbr">
                            {messages.phoneNumbers[1]}
                          </a>
                        </div>
                        <div className="call-center2 mb-0">
                          <h4 className="title">{messages.emailTitle}</h4>
                          <a href={`mailto:${messages.emailAddress}`} className="gmail">
                            {messages.emailAddress}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="contact-info">
                        <div className="call-center2">
                          <h4 className="title">{messages.locationTitle}</h4>
                          <p>
                            {messages.locationLines[0]} <br />
                            {messages.locationLines[1]}
                          </p>
                        </div>
                        <div className="call-center2 mb-0">
                          <h4 className="title">{messages.socialTitle}</h4>
                          <ul className="social-icon">
                            <li>
                              <a
                                href="https://www.facebook.com/atylus_offical/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.twitter.com/atylus_offical/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/atylus_offical/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/atylus_offical/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-youtube" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-form v2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End contact-sec */}
        {/* googel-map */}
        <section className="googel-map">
          <h2>{messages.mapTitle}</h2>
          <div className="container2">
            <iframe
              src={messages.mapEmbedUrl}
              height={500}
              style={{ border: 0, borderRadius: 25 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        {/* End googel-map */}
      </>
    </>
  );
}
