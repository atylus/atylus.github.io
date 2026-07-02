"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getServiceHref, serviceCatalog } from "@/data/serviceCatalog";
import { mobileMenuItems } from "@/data/mobileMenu";
import { isLinkActive, itemHasActiveDescendant } from "@/utils/menuActive";
import ThemeLogo from "../common/ThemeLogo";

export default function Nav2() {
  const pathname = usePathname();

  const homeSection = mobileMenuItems.find((item) => item.href === "/");
  const servicesSection = mobileMenuItems.find(
    (item) => item.label === "Hizmetler",
  );
  const contactSection = mobileMenuItems.find((item) => item.href === "/contact");

  if (!homeSection || !servicesSection || !contactSection) {
    return null;
  }

  const serviceGroups = serviceCatalog;

  const isHomeActive = itemHasActiveDescendant(pathname, homeSection);
  const isServicesActive = itemHasActiveDescendant(pathname, servicesSection);
  const isContactActive = isLinkActive(pathname, contactSection.href);

  return (
    <>
      <li
        className={
          isHomeActive ? "menu-static-link active" : "menu-static-link"
        }
      >
        <Link href="/" className={isHomeActive ? "active" : undefined}>
          <span className="menu-item">{homeSection.label}</span>
          <span className="menu-item2">{homeSection.label}</span>
        </Link>
      </li>
      <li
        className={
          isServicesActive ? "menu-has-items active" : "menu-has-items"
        }
      >
        <Link
          href={servicesSection.href ?? "/service"}
          className={isServicesActive ? "active" : undefined}
        >
          <span className="menu-item">{servicesSection.label}</span>
          <span className="menu-item2">{servicesSection.label}</span>
        </Link>
        <ul className="mega-sub-menu services-mega-menu">
          <li className="mega-menu-column">
            <div className="services-mega-grid">
              {serviceGroups.map((group) => (
                <div key={group.key} className="services-mega-group">
                  <span className="services-mega-code">{group.shortCode}</span>
                  <h4 className="services-mega-title">{group.title}</h4>
                  <p className="services-mega-copy">{group.description}</p>
                  <ul>
                    {group.items.map((child) => {
                      const href = getServiceHref(child.slug);
                      const isChildActive = isLinkActive(pathname, href);

                      return (
                        <li
                          key={child.slug}
                          className={isChildActive ? "active" : undefined}
                        >
                          <Link
                            href={href}
                            className={isChildActive ? "active" : undefined}
                          >
                            <span>{child.title}</span>
                            <small>{child.description}</small>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </li>
          <li className="mega-menu-column services-mega-aside">
            <div className="services-mega-card">
              <span className="services-mega-code">[U]</span>
              <h4>MCP Server Geliştirme</h4>
              <p>
                Yapay zeka modellerini şirket içi verilerinize ve araçlarınıza
                güvenle bağlayan akışlar tasarlıyoruz.
              </p>
              <Link href="/hizmetler/mcp-server-gelistirme">Detayı İncele</Link>
            </div>
          </li>
        </ul>
      </li>
      <li className="logo3">
        <Link href="/">
          <ThemeLogo alt="logo" size="compact" />
        </Link>
      </li>
      <li>
        <Link
          href={contactSection.href ?? "/contact"}
          className={isContactActive ? "active" : undefined}
        >
          <span className="menu-item">{contactSection.label}</span>
          <span className="menu-item2">{contactSection.label}</span>
        </Link>
      </li>
    </>
  );
}
