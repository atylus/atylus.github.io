import type { Metadata } from "next";

type PageMetaKey =
  | "about-us"
  | "hakkimizda"
  | "team"
  | "team-single"
  | "project"
  | "project2"
  | "project-single"
  | "gallery-grid"
  | "gallery-masonry"
  | "faq"
  | "pricing"
  | "typography"
  | "contact"
  | "service"
  | "service-single"
  | "shop"
  | "shop-single"
  | "cart"
  | "checkout"
  | "account"
  | "blog"
  | "blog2"
  | "blog-single";

const BASE_TITLE = "Atylus AI Agency & Technology";

const pageMetaMap: Record<PageMetaKey, { title: string; description: string }> =
  {
    "about-us": {
      title: `About Us | ${BASE_TITLE}`,
      description:
        "Learn more about Atylus AI Agency & Technology, our mission, team and expertise in AI-powered digital solutions.",
    },
    hakkimizda: {
      title:
        "Atylus Hakkimizda | Yapay Zeka Ajansi - Kurumsal AI, MCP ve Otonom Sistemler",
      description:
        "Atylus; kurumsal AI agent, MCP, karar destek sistemleri ve is akisi otomasyonu gelistiren yeni nesil yapay zeka ajansidir.",
    },
    team: {
      title: `Creative Team | ${BASE_TITLE}`,
      description:
        "Meet the creative team behind Atylus AI Agency & Technology, including AI specialists, designers and engineers.",
    },
    "team-single": {
      title: `Team Member Details | ${BASE_TITLE}`,
      description:
        "Detailed profile of a single Atylus team member, including role, social links, and professional background.",
    },
    project: {
      title: `Projects Grid | ${BASE_TITLE}`,
      description:
        "Explore Atylus AI Agency & Technology projects showcasing AI products, research and client case studies.",
    },
    project2: {
      title: `Projects List | ${BASE_TITLE}`,
      description:
        "Browse an alternative view of Atylus AI projects, including AI platforms, apps and experiments.",
    },
    "project-single": {
      title: `Project Details | ${BASE_TITLE}`,
      description:
        "In-depth case study page for a single Atylus AI project, including overview, process and results.",
    },
    "gallery-grid": {
      title: `Gallery Grid | ${BASE_TITLE}`,
      description:
        "Visual gallery grid of Atylus AI Agency & Technology shots, UI layouts and creative assets.",
    },
    "gallery-masonry": {
      title: `Gallery Masonry | ${BASE_TITLE}`,
      description:
        "Masonry-style gallery of Atylus visuals and project screenshots in an organic layout.",
    },
    faq: {
      title: `FAQ | ${BASE_TITLE}`,
      description:
        "Frequently asked questions about Atylus AI Agency & Technology, licensing and template features.",
    },
    pricing: {
      title: `Pricing | ${BASE_TITLE}`,
      description:
        "Compare Atylus AI Agency & Technology pricing plans and choose the right option for your project.",
    },
    typography: {
      title: `Typography | ${BASE_TITLE}`,
      description:
        "Typography and UI elements reference page for the Atylus AI Agency & Technology Next.js template.",
    },
    contact: {
      title: `Contact | ${BASE_TITLE}`,
      description:
        "Get in touch with Atylus AI Agency & Technology using our contact details and inquiry form.",
    },
    service: {
      title: `Services | ${BASE_TITLE}`,
      description:
        "Overview of Atylus AI Agency & Technology services, including AI strategy, development, and integration.",
    },
    "service-single": {
      title: `Service Details | ${BASE_TITLE}`,
      description:
        "Detailed view for a single Atylus AI service such as Artificial Intelligence (AI) systems.",
    },
    shop: {
      title: `Shop | ${BASE_TITLE}`,
      description:
        "Atylus AI Agency & Technology shop listing AI-related products, digital items and subscriptions.",
    },
    "shop-single": {
      title: `Product Details | ${BASE_TITLE}`,
      description:
        "Single product page with details, gallery, pricing and related AI items in the Atylus shop.",
    },
    cart: {
      title: `Shopping Cart | ${BASE_TITLE}`,
      description:
        "Review items in your Atylus AI Agency & Technology shopping cart before checkout.",
    },
    checkout: {
      title: `Checkout | ${BASE_TITLE}`,
      description:
        "Checkout page for completing your order in the Atylus AI Agency & Technology shop demo.",
    },
    account: {
      title: `My Account | ${BASE_TITLE}`,
      description:
        "Account dashboard for managing profile details and orders in the Atylus shop demo.",
    },
    blog: {
      title: `Blog | ${BASE_TITLE}`,
      description:
        "Atylus AI Agency & Technology blog listing articles on AI, design and technology.",
    },
    blog2: {
      title: `Blog Classic | ${BASE_TITLE}`,
      description:
        "Alternative blog layout showcasing Atylus AI Agency & Technology articles and news.",
    },
    "blog-single": {
      title: `Blog Details | ${BASE_TITLE}`,
      description:
        "Single blog article page for Atylus AI Agency & Technology with full content and comments area.",
    },
  };

export function getPageMetadata(key: PageMetaKey): Metadata {
  const { title, description } = pageMetaMap[key];
  return {
    title,
    description,
    openGraph: { title, description },
  };
}
