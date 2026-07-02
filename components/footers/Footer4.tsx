import Link from "next/link";

import { footerLinkGroupsAlt } from "@/data/footer";
import FooterSubscribeForm from "@/components/footers/FooterSubscribeForm";
import ThemeLogo from "@/components/common/ThemeLogo";

export default function Footer4() {
  return (
    <footer className="footer-style5">
      <div className="footer-top5">
        <div className="container">
          <div className="footer-content5">
            <h2 className="title">
              Stay updated with the latest news and insights—subscribe now!
            </h2>
            <div className="form-box5">
              <FooterSubscribeForm />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area5 ibt-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-widget5 footer-widget">
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
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-menu5">
                <div className="contact-widget5 footer-widget">
                  <h4 className="widget-title">İletişim</h4>
                  <a href="#" className="nmbr">
                    1-800 100 97 20{" "}
                  </a>
                  <a href="mailto:support@atylus.com" className="gmail">
                    atylus @mail.co
                  </a>
                </div>
                {footerLinkGroupsAlt.map((group, i) => (
                  <div key={i} className="footer-links5 footer-widget">
                    <h4 className="widget-title">{group.title}</h4>
                    <ul>
                      {group.links.map((item, i2) => (
                        <li key={item.label + i2}>
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
      <div className="footer-botom5">
        <div className="container">
          <div className="footer-box5">
            <p>
              <a href="#">©Atylus</a> {new Date().getFullYear()}. All rights
              reserved.
            </p>
            <span>
              <a href="#">Terms</a> of use Privacy Environmental Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
