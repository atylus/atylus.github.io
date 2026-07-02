import Link from "next/link";

import { footerLinkGroups } from "@/data/footer";
import ThemeLogo from "@/components/common/ThemeLogo";

export default function Footer1() {
  return (
    <footer className="footer-style1">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <h2 className="title">Yapay Zeka Sistemleri ile Tanışın</h2>
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
            <div className="col-xl-8 col-lg-6">
              <div className="about-widget footer-widget">
                <div className="footer-logo">
                  <ThemeLogo alt="AI Agency & Technology HTML Template" />
                </div>
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
                <h2 className="title">2025'ten bu yana</h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="footer-menu">
                {footerLinkGroups.map((group) => (
                  <div key={group.title} className="footer-links footer-widget">
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
              <a href="#">©Atylus</a> {new Date().getFullYear()}. Tüm hakları
              saklıdır.
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
