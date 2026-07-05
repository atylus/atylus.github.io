import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import ContactForm from "@/components/contact/ContactForm";
import { useLocale } from "@/compat/next/navigation";
import { getUiCopy } from "@/i18n/content";

export default function Contact() {
  const locale = useLocale();
  const ui = getUiCopy(locale);

  return (
    <div className="contact-sec ibt-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-content">
              <div className="sec-title white">
                <SubTitleWrapper>{ui.contact.eyebrow}</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  {ui.contact.title}
                </TitleSplitWrapper>
                <p>{ui.contact.description}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">{ui.contact.phone}</h4>
                      <span className="nmbr">&nbsp;</span>
                      <span className="nmbr">&nbsp;</span>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">{ui.contact.email}</h4>
                      <a href="mailto:info@atylus.com" className="gmail">
                        info@atylus.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">{ui.contact.location}</h4>
                      <p>
                        {ui.contact.locationLines[0]} <br />
                        {ui.contact.locationLines[1]}
                      </p>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">{ui.contact.social}</h4>
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
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
