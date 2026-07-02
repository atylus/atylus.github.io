export type NavLeaf = {
  label: string;
  href: string;
  description?: string;
};

export type CatalogGroup = {
  key: string;
  shortCode: string;
  title: string;
  description: string;
  items: NavLeaf[];
};

export type FooterLinkGroup = {
  title: string;
  links: NavLeaf[];
};

export type MobileMenuItem = {
  label: string;
  href: string;
  liClassName?: string;
  children?: MobileMenuItem[];
};

export type ProjectItem = {
  id: string;
  category: string;
  title: string;
  description: string;
};

export type ProjectModernItem = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

export const siteMetadata = {
  name: "Atylus",
  title: "Atylus AI Agency & Technology",
  description:
    "Atylus; yapay zeka sistemleri, karar destek mekanizmalari, MCP entegrasyonlari ve teknik dokumantasyon altyapisi ureten bir teknoloji markasidir.",
  defaultOgImage: "/assets/images/logo-dark.svg",
} as const;

export const serviceGroups: CatalogGroup[] = [
  {
    key: "analitik",
    shortCode: "[A]",
    title: "Analitik",
    description: "Veriyi sinyale, sinyali yonetsel karara donusturen analitik katman.",
    items: [
      {
        label: "Risk ve Anomali Analizi",
        href: "/hizmetler/risk-ve-anomali-analizi/",
        description: "Anomaliler buyumeden once tespit edin.",
      },
      {
        label: "Davranis ve Segmentasyon",
        href: "/hizmetler/davranis-ve-segmentasyon/",
        description: "Niyeti kumelendirip kararlari kisisellestirin.",
      },
      {
        label: "Karar Panolari",
        href: "/hizmetler/karar-panolari/",
        description: "Gercek zamanli yonetici netligi saglayin.",
      },
    ],
  },
  {
    key: "teknoloji",
    shortCode: "[T]",
    title: "Teknoloji",
    description: "Marka dili ve is hedefleriyle uyumlu uygulama ve modelleme katmani.",
    items: [
      {
        label: "Uretken Yapay Zeka",
        href: "/hizmetler/uretken-yapay-zeka/",
        description: "Marka diliyle uyumlu icerikler ve akilli otomasyonlar uretin.",
      },
    ],
  },
  {
    key: "operasyonel-fayda",
    shortCode: "[U]",
    title: "Operasyonel Fayda",
    description: "Kurumsal ekipleri dogrudan hizlandiran teslimatlar ve entegrasyonlar.",
    items: [
      {
        label: "Chatbot Gelistirme",
        href: "/hizmetler/chatbot-gelistirme/",
        description: "Destek, satis ve ic ekipler icin entegre chatbotlar.",
      },
      {
        label: "MCP Server Gelistirme",
        href: "/hizmetler/mcp-server-gelistirme/",
        description:
          "Yapay zeka modellerini sirket ici verilerinize ve araclarniza guvenle baglayin.",
      },
    ],
  },
];

export const resourceGroups: CatalogGroup[] = [
  {
    key: "learn",
    shortCode: "[O]",
    title: "Ogren",
    description: "Kullanim senaryolari ve urun bilgisi icin egitim odakli icerikler.",
    items: [
      {
        label: "Blog",
        href: "/blog/",
        description: "Ipuclari, guncellemeler ve teknik icerikler.",
      },
      {
        label: "Kilavuzlar",
        href: "/reference/migration-blueprint/",
        description: "Goc, deployment ve icerik mimarisi kilavuzlari.",
      },
      {
        label: "Dokumantasyon",
        href: "/",
        description: "Starlight tabanli merkezi bilgi mimarisi.",
      },
    ],
  },
  {
    key: "knowledge",
    shortCode: "[E]",
    title: "Bilgi Merkezi",
    description: "Karar vermeyi hizlandiran teknik ve operasyonel icgoruler.",
    items: [
      {
        label: "Degisiklik Gunlugu",
        href: "/reference/content-model/",
        description: "Yapilan mimari kararlari tek yerde izleyin.",
      },
    ],
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkimizda", href: "/hakkimizda/" },
      { label: "Projeler", href: "/projects/" },
      { label: "Iletisim", href: "/contact/" },
    ],
  },
  {
    title: "Hizmetler",
    links: serviceGroups.flatMap((group) =>
      group.items.map((item) => ({ label: item.label, href: item.href })),
    ),
  },
  {
    title: "Kaynaklar",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Dokumantasyon", href: "/" },
      { label: "Icerik Modeli", href: "/reference/content-model/" },
    ],
  },
];

export const mobileMenuItems: MobileMenuItem[] = [
  {
    label: "Ana Sayfa",
    href: "/",
  },
  {
    label: "Hizmetler",
    href: "/hizmetler/",
    children: serviceGroups.map((group) => ({
      label: `${group.shortCode} ${group.title}`,
      href: "#",
      liClassName: "sub-menu",
      children: group.items.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    })),
  },
  {
    label: "Kaynaklar",
    href: "/",
    children: resourceGroups.map((group) => ({
      label: `${group.shortCode} ${group.title}`,
      href: "#",
      liClassName: "sub-menu",
      children: group.items.map((item) => ({
        label: item.label,
        href: item.href,
      })),
    })),
  },
  {
    label: "Iletisim",
    href: "/contact/",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "deepvision",
    category: "Development",
    title: "DeepVision: Enhancing Image Recognition with Neural Networks",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
  {
    id: "nlpgenius",
    category: "Integration",
    title: "NLPGenius: Natural Language Processing Powered by Neural Networks",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
  {
    id: "autodrive",
    category: "Design Core",
    title: "AutoDrive: Autonomous Vehicle Navigation with Advanced Neural Networks",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
  {
    id: "cognicraft",
    category: "Design Core",
    title: "CogniCraft Innovations: Shaping the Future through Cutting-Edge AI Endeavors",
    description: "The inputs are multiplied by their respective weights, summed up.",
  },
];

export const projectsModern: ProjectModernItem[] = [
  {
    id: "deepvision",
    imageSrc: "/assets/images/project/project2-1.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
  {
    id: "nlpgenius",
    imageSrc: "/assets/images/project/project2-4.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
  {
    id: "autodrive",
    imageSrc: "/assets/images/project/project2-3.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
  {
    id: "cognicraft",
    imageSrc: "/assets/images/project/project2-4.png",
    imageWidth: 1790,
    imageHeight: 320,
  },
];

export function isLinkActive(pathname: string, href: string) {
  if (!href || href === "#") {
    return false;
  }
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}`);
}

export function hasActiveLeaf(
  pathname: string,
  items: Array<NavLeaf | MobileMenuItem>,
): boolean {
  return items.some((item): boolean => {
    if ("children" in item && item.children?.length) {
      return hasActiveLeaf(pathname, item.children);
    }

    return isLinkActive(pathname, item.href);
  });
}

export function getProjectById(projectId: string) {
  return projects.find((project) => project.id === projectId);
}
