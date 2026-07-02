import Link from "next/link";

import ServiceDetails from "@/components/services/ServiceDetails";
import type { ServiceCatalogItem } from "@/types/services";

type ServiceDetailPageProps = {
  service: ServiceCatalogItem;
};

export default function ServiceDetailPage({
  service,
}: ServiceDetailPageProps) {
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
            <Link href="/" title="">
              Ana Sayfa
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/hizmetler/" title="">
              Hizmetler
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
