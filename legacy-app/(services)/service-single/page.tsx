import ServiceDetails from "@/components/services/ServiceDetails";
import { getServiceBySlug } from "@/data/serviceCatalog";

function getFallbackService() {
  const service = getServiceBySlug("risk-ve-anomali-analizi");

  if (!service) {
    throw new Error("Fallback service catalog item is missing.");
  }

  return service;
}

const fallbackService = getFallbackService();

export const metadata = {
  title: fallbackService.seoTitle,
  description: fallbackService.seoDescription,
};

export default function ServiceSinglePage() {
  return <ServiceDetails service={fallbackService} />;
}
