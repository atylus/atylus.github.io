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
                Ana Sayfa
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
                    <SubTitleWrapper>iletisime gecin</SubTitleWrapper>
                    <TitleSplitWrapper
                      tag="h2"
                      className="title animated-heading"
                    >
                      Sorularinizi yanitlamak ve ihtiyaclariniza uygun cozum
                      sunmak icin buradayiz
                    </TitleSplitWrapper>
                    <p>
                      Kurumsal yapay zeka, MCP, otomasyon ve ozel yazilim
                      ihtiyaclariniz icin bizimle iletisime gecin. Ekibimiz size
                      en kisa surede geri donus saglar.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="contact-info">
                        <div className="call-center2">
                          <h4 className="title">Telefon</h4>
                          <span className="nmbr">&nbsp;</span>
                          <span className="nmbr">&nbsp;</span>
                        </div>
                        <div className="call-center2 mb-0">
                          <h4 className="title">E-posta</h4>
                          <a href="mailto:info@atylus.com" className="gmail">
                            info@atylus.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="contact-info">
                        <div className="call-center2">
                          <h4 className="title">Konum</h4>
                          <p>
                            Kayseri, Turkiye <br />
                            Merkez
                          </p>
                        </div>
                        <div className="call-center2 mb-0">
                          <h4 className="title">Sosyal Aglar</h4>
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
          <h2>google map</h2>
          <div className="container2">
            <iframe
              src="https://www.google.com/maps?q=Kayseri,Turkiye&z=12&output=embed"
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
