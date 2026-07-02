import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="contact-sec ibt-section-gap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="contact-content">
              <div className="sec-title white">
                <SubTitleWrapper>iletisime gecin</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Sorularinizi yanitlamak ve size destek olmak icin her zaman
                  haziriz
                </TitleSplitWrapper>
                <p>
                  Ihtiyacinizi dinliyor, dogru cozum yolunu birlikte
                  netlestiriyor ve size en hizli sekilde geri donus sagliyoruz.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Cagri Merkezi</h4>
                      <a href="tel:8003508431" className="nmbr">
                        800 100 975 20 34
                      </a>
                      <a href="mailto:support@atylus.com" className="nmbr">
                        + (123) 1800-234-5678
                      </a>
                    </div>
                    <div className="call-center mb-0">
                      <h4 className="title">Email</h4>
                      <a href="mailto:support@atylus.com" className="gmail">
                        atylus@mail.co
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="contact-info">
                    <div className="call-center">
                      <h4 className="title">Konum</h4>
                      <p>
                        ABD, New York - 1060 <br />
                        First Avenue 1
                      </p>
                    </div>
                    <div className="call-center mb-0">
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
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
