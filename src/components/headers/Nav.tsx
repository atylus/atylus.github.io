"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getServiceHref, getServiceCatalog } from "@/data/serviceCatalog";
import { getResourceCatalog } from "@/data/resourceCatalog";
import { getMobileMenuItems } from "@/data/mobileMenu";
import { getUiCopy } from "@/i18n/content";
import { useLocale } from "@/compat/next/navigation";
import { isLinkActive, itemHasActiveDescendant } from "@/utils/menuActive";

export default function Nav() {
  const pathname = usePathname();
  const locale = useLocale();
  const ui = getUiCopy(locale);

  const mobileMenuItems = getMobileMenuItems(locale);
  const homeSection = mobileMenuItems.find((item) => item.href === `/${locale}/`);
  const servicesSection = mobileMenuItems.find(
    (item) => item.label === ui.nav.services,
  );
  const resourcesSection = mobileMenuItems.find(
    (item) => item.label === ui.nav.resources,
  );
  const contactSection = mobileMenuItems.find(
    (item) => item.label === ui.nav.contact,
  );

  if (
    !homeSection ||
    !servicesSection ||
    !resourcesSection ||
    !contactSection
  ) {
    return null;
  }

  const serviceGroups = getServiceCatalog(locale);
  const resourceGroups = getResourceCatalog(locale);

  const isHomeActive = itemHasActiveDescendant(pathname, homeSection);
  const isServicesActive = itemHasActiveDescendant(pathname, servicesSection);
  const isResourcesActive = itemHasActiveDescendant(pathname, resourcesSection);
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
                      const href = getServiceHref(locale, child.key);
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
              <h4>{getServiceCatalog(locale).at(-1)?.items.at(-1)?.title}</h4>
              <p>
                {getServiceCatalog(locale).at(-1)?.items.at(-1)?.description}
              </p>
              <Link href={getServiceHref(locale, "mcp-server-gelistirme")}>
                {ui.nav.inspectDetail}
              </Link>
            </div>
          </li>
        </ul>
      </li>
      <li
        className={
          isResourcesActive ? "menu-has-items active" : "menu-has-items"
        }
      >
        <Link
          href={resourcesSection.href ?? "#"}
          className={isResourcesActive ? "active" : undefined}
        >
          <span className="menu-item">{resourcesSection.label}</span>
          <span className="menu-item2">{resourcesSection.label}</span>
        </Link>
        <ul className="mega-sub-menu services-mega-menu">
          <li className="mega-menu-column">
            <div className="services-mega-grid">
              {resourceGroups.map((group) => (
                <div key={group.key} className="services-mega-group">
                  <span className="services-mega-code">{group.shortCode}</span>
                  <h4 className="services-mega-title">{group.title}</h4>
                  <p className="services-mega-copy">{group.description}</p>
                  <ul>
                    {group.items.map((child) => {
                      const isChildActive = isLinkActive(pathname, child.href);

                      return (
                        <li
                          key={`${group.key}-${child.label}`}
                          className={isChildActive ? "active" : undefined}
                        >
                          <Link
                            href={child.href}
                            className={isChildActive ? "active" : undefined}
                          >
                            <span>{child.label}</span>
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
              <span className="services-mega-code">[K]</span>
              <h4>{ui.nav.resourceHubTitle}</h4>
              <p>{ui.nav.resourceHubDescription}</p>
              <Link href={resourceGroups[0]?.items[0]?.href ?? "#"}>
                {ui.nav.viewAllResources}
              </Link>
            </div>
          </li>
        </ul>
      </li>
      <li className={isContactActive ? "active" : undefined}>
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
