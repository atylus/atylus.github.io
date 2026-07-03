import Link from "next/link";

import ContactForm from "@/components/contact/ContactForm";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("contact");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="staff-text">İletişim</div>
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ İletişim /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>İletişim</li>
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
                    <SubTitleWrapper>get in touch</SubTitleWrapper>
                    <TitleSplitWrapper
                      tag="h2"
                      className="title animated-heading"
                    >
                      We are always ready to help you and answer your questions
                    </TitleSplitWrapper>
                    <p>
                      Pacific hake false trevally queen parrotfish black
                      prickleback mosshead warbonnet sweeper! Greenling sleeper.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="contact-info">
                        <div className="call-center2">
                          <h4 className="title">Call Center</h4>
                          <a href="tel:8003508431" className="nmbr">
                            800 100 975 20 34
                          </a>
                          <a href="tel:+13685678954" className="nmbr">
                            +1 (368) 567 89 54
                          </a>
                        </div>
                        <div className="call-center2 mb-0">
                          <h4 className="title">Email</h4>
                          <a href="mailto:support@atylus.com" className="gmail">
                            atylus@mail.co
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="contact-info">
                        <div className="call-center2">
                          <h4 className="title">Our Location</h4>
                          <p>
                            USA, New York - 1060 <br />
                            Str. First Avenue 1
                          </p>
                        </div>
                        <div className="call-center2 mb-0">
                          <h4 className="title">Social network</h4>
                          <ul className="social-icon">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://www.twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="http://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title=""
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/"
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
          <h2>googel map</h2>
          <div className="container2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112345678!2d-122.41941568468176!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a1234567%3A0xabcdef1234567890!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1695901234567!5m2!1sen!2sus"
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
