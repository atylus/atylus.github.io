import Link from "next/link";

import ServiceDetails from "@/components/services/ServiceDetails";
import type { ServiceCatalogItem } from "@/types/services";
import { useLocale } from "@/compat/next/navigation";
import { getUiCopy } from "@/i18n/content";
import { getLocalizedPagePath } from "@/i18n/routes";

type ServiceDetailPageProps = {
  service: ServiceCatalogItem;
};

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
  const locale = useLocale();
  const ui = getUiCopy(locale);

  return (
    <>
      <section className="page-banner4">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">{service.heroLabel}</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ {service.title} /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link href={getLocalizedPagePath(locale, "home")} title="">
              {ui.breadcrumbs.home}
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={getLocalizedPagePath(locale, "services")} title="">
              {ui.breadcrumbs.services}
            </Link>
          </li>
          <li>/</li>
          <li>{service.title}</li>
        </ul>
      </section>
      <ServiceDetails service={service} />
    </>
  );
}
