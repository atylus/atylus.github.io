import Link from "next/link";

import { footerLinkGroups } from "@/data/footer";
import ThemeLogo from "@/components/common/ThemeLogo";

export default function Footer2() {
  return (
    <footer className="footer-style2">
      <div className="widget-area2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-widget v2 footer-widget">
                <div className="footer-logo">
                  <ThemeLogo alt="AI Agency & Technology HTML Template" />
                </div>
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
                <h2 className="title">since 2025</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-menu v2">
                <div className="contact-widget footer-widget">
                  <h4 className="widget-title">İletişim</h4>
                  <p>Atylus, New York - 1060 Str. First Avenue 1</p>
                  <a href="tel:+13685678954" className="nmbr">
                    800 100 975 20 34
                  </a>
                  <a href="tel:8003508431" className="nmbr">
                    + (123) 1800-234-5678
                  </a>
                  <a href="mailto:support@atylus.com" className="gmail">
                    support@atylus.co
                  </a>
                </div>
                {footerLinkGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className={`footer-links footer-widget${index === footerLinkGroups.length - 1 ? " m-0" : ""}`}
                  >
                    <h4 className="widget-title">{group.title}</h4>
                    <ul>
                      {group.links.map((item) => (
                        <li key={item.label}>
                          {item.href.startsWith("/") ? (
                            <Link href={item.href} title="">
                              {item.label}
                            </Link>
                          ) : (
                            <a href={item.href} title="">
                              {item.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-botom">
        <div className="container">
          <div className="footer-box">
            <p>
              <a href="#">©Atylus</a> {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <span>
              Kullanım Koşulları <a href="#">Gizlilik Politikası</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
