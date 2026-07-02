import { footerResourceLinks, footerServiceLinks } from "@/data/footer";
import ThemeLogo from "@/components/common/ThemeLogo";

export default function Footer3({
  parentClass = "footer-style4",
}: {
  parentClass?: string;
}) {
  return (
    <footer className={parentClass}>
      <div className="footer-top4">
        <div className="container">
          <div className="footer-content4">
            <h2 className="title">Join Atylus and increase your productivity</h2>
            <a href="#" title="" className="ibt-btn ibt-btn-outline">
              <span>Bize Ulaşın</span>
              <i className="icon-arrow-top" />
            </a>
          </div>
        </div>
      </div>
      <div className="widget-area ibt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-widget4 footer-widget">
                <div className="footer-logo">
                  <ThemeLogo alt="AI Agency & Technology HTML Template" />
                </div>
                <p>
                  <a href="#">©Atylus</a> {new Date().getFullYear()}. Tüm
                  hakları saklıdır.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-menu4">
                <div className="location-widget4 footer-widget">
                  <h4 className="widget-title">Location</h4>
                  <p>Atylus, USA, New York - 1060 Str. First Avenue 1</p>
                  <h5 className="title">Folow us</h5>
                  <ul className="social-icon">
                    <li>
                      <a href="#" title="">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contact-widget4 footer-widget">
                  <h4 className="widget-title">Phone</h4>
                  <a href="tel:+13685678954" title="" className="nmbr">
                    +1 (368) 567 89 54
                  </a>
                  <a href="tel:8003508431" title="" className="nmbr">
                    + 800 350 84 31
                  </a>
                  <h5 className="widget-title">Email</h5>
                  <a href="mailto:support@atylus.com" title="" className="gmail">
                    support@atylus.com
                  </a>
                </div>
                <div className="footer-links footer-widget">
                  <h4 className="widget-title">Hizmetler</h4>
                  <ul>
                    {footerServiceLinks.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} title="">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-links footer-widget">
                  <h4 className="widget-title">Kaynaklar</h4>
                  <ul>
                    {footerResourceLinks.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} title="">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
