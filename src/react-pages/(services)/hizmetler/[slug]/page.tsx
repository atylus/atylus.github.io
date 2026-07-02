import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceDetails from "@/components/services/ServiceDetails";
import {
  getServiceBySlug,
  getServiceHref,
  serviceCatalogItems,
} from "@/data/serviceCatalog";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return serviceCatalogItems.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Hizmet bulunamadi | Atylus",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: getServiceHref(service.slug),
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

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
            <Link href="/service" title="">
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
