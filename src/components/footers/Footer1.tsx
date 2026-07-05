import Link from "next/link";

import { getFooterGroups } from "@/data/footer";
import ThemeLogo from "@/components/common/ThemeLogo";
import FooterLocaleSwitcher from "@/components/common/FooterLocaleSwitcher";
import { useLocale } from "@/compat/next/navigation";
import { getUiCopy } from "@/i18n/content";
import { getLocalizedPagePath } from "@/i18n/routes";

export default function Footer1() {
  const locale = useLocale();
  const ui = getUiCopy(locale);
  const footerLinkGroups = getFooterGroups(locale);

  return (
    <footer className="footer-style1">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <h2 className="title">{ui.footer.title}</h2>
            <Link
              href={getLocalizedPagePath(locale, "contact")}
              title=""
              className="ibt-btn ibt-btn-outline"
            >
              <span>{ui.footer.cta}</span>
              <i className="icon-arrow-top" />
            </Link>
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
                <h2 className="title">{ui.footer.since}</h2>
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
              <div className="mt-4 d-flex justify-content-lg-end justify-content-start">
                <FooterLocaleSwitcher ariaLabel={ui.footer.languageAria} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-botom">
        <div className="container">
          <div className="footer-box">
            <p>
              <Link href={`/${locale}/`}>©Atylus</Link> {new Date().getFullYear()}.{" "}
              {ui.footer.rightsReserved}
            </p>
            <span>
              {ui.footer.terms}{" "}
              <a href="#">{ui.footer.privacy}</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
