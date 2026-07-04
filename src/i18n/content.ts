import type { SupportedLocale } from "./config";
import type { MarketingPageKey } from "./routes";

type SeoEntry = {
  title: string;
  description: string;
};

type UiCopy = {
  siteTitle: string;
  siteDescription: string;
  nav: {
    home: string;
    services: string;
    resources: string;
    contact: string;
    inspectDetail: string;
    resourceHubTitle: string;
    resourceHubDescription: string;
    viewAllResources: string;
    contactCta: string;
  };
  footer: {
    title: string;
    cta: string;
    since: string;
    rightsReserved: string;
    terms: string;
    privacy: string;
    language: string;
    languageAria: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    locationLines: [string, string];
    social: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
  };
  sidebar: {
    contacts: string;
    close: string;
    followUs: string;
  };
  breadcrumbs: {
    home: string;
    services: string;
    blog: string;
    docs: string;
  };
  pageMeta: Record<MarketingPageKey | "blog" | "docs", SeoEntry>;
};

export const uiCopyByLocale: Record<SupportedLocale, UiCopy> = {
  tr: {
    siteTitle: "Atylus | Kurumsal Yapay Zeka ve MCP Cozumleri",
    siteDescription:
      "Atylus; kurumsal yapay zeka, MCP sunuculari, karar sistemleri ve operasyon otomasyonu tasarlayan teknoloji partneridir.",
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      resources: "Kaynaklar",
      contact: "Iletisim",
      inspectDetail: "Detayi Incele",
      resourceHubTitle: "Kaynak Merkezi",
      resourceHubDescription:
        "Kilavuzlar, teknik notlar ve dokumantasyonu tek bir merkezde topluyoruz.",
      viewAllResources: "Tum Bilgileri Gor",
      contactCta: "Bize Ulasin",
    },
    footer: {
      title: "Yapay Zeka Sistemleri ile Tanisin",
      cta: "Bize Ulasin",
      since: "2025'ten bu yana",
      rightsReserved: "Tum haklari saklidir.",
      terms: "Kullanim Kosullari",
      privacy: "Gizlilik Politikasi",
      language: "Dil",
      languageAria: "Dili degistir",
    },
    contact: {
      eyebrow: "iletisime gecin",
      title:
        "Sorularinizi yanitlamak ve ihtiyaciniza uygun cozum sunmak icin buradayiz",
      description:
        "Kurumsal yapay zeka, MCP, otomasyon ve ozel yazilim ihtiyaclariniz icin bizimle iletisime gecin. Ekibimiz size en kisa surede geri donus saglar.",
      phone: "Telefon",
      email: "E-posta",
      location: "Konum",
      locationLines: ["Kayseri, Turkiye", "Merkez"],
      social: "Sosyal Aglar",
      formTitle: "Iletisime Gecin",
      formName: "Ad soyad",
      formEmail: "E-posta",
      formSubject: "Konu",
      formMessage: "Mesajinizi yazin...",
      formSubmit: "Mesaj Gonder",
    },
    sidebar: {
      contacts: "Iletisim",
      close: "kapat",
      followUs: "Bizi takip edin:",
    },
    breadcrumbs: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      blog: "Blog",
      docs: "Dokumantasyon",
    },
    pageMeta: {
      home: {
        title: "Atylus | Kurumsal Yapay Zeka, MCP ve Otomasyon Cozumleri",
        description:
          "Kurumsal yapay zeka, MCP server gelistirme, chatbot, karar destek ve otomasyon cozumleri ile operasyonlarinizi olceklendirir.",
      },
      about: {
        title: "Hakkimizda | Atylus",
        description:
          "Atylus'un kurumsal yapay zeka, MCP ve veri odakli urunlestirme yaklasimini kesfedin.",
      },
      contact: {
        title: "Iletisim | Atylus",
        description:
          "Atylus ile kurumsal yapay zeka, MCP ve otomasyon projeleriniz icin iletisime gecin.",
      },
      services: {
        title: "Hizmetler | Atylus",
        description:
          "Atylus hizmetleri; analitik, uretken yapay zeka, chatbot, MCP server ve surec orkestrasyonu alanlarinda kurumsal cozumler sunar.",
      },
      projects: {
        title: "Projeler | Atylus",
        description:
          "Atylus'un kurumsal yapay zeka ve otomasyon odakli proje ciktilarini inceleyin.",
      },
      vendilusProject: {
        title: "Vendilus | Atylus",
        description:
          "Vendilus'in coklu pazar yeri senkronizasyonu, MCP mimarisi ve yapay zeka destekli operasyon modelini inceleyin.",
      },
      faq: {
        title: "SSS | Atylus",
        description:
          "Kurumsal yapay zeka projeleri, is birligi modeli ve teknik teslimatlar hakkinda sik sorulan sorular.",
      },
      pricing: {
        title: "Fiyatlandirma | Atylus",
        description:
          "Atylus'un hizmet paketlerini ve kurumsal teslim modellerini inceleyin.",
      },
      team: {
        title: "Ekip | Atylus",
        description:
          "Atylus ekibini, uzmanlik alanlarini ve teslim odakli calisma modelini taniyin.",
      },
      teamMember: {
        title: "Ekip Uyesi | Atylus",
        description:
          "Atylus ekip uyelerinin rol, deneyim ve yetkinlik detaylari.",
      },
      galleryGrid: {
        title: "Galeri Grid | Atylus",
        description:
          "Atylus projelerinden secilmis gorseller ve tasarim yuzeyleri.",
      },
      galleryMasonry: {
        title: "Galeri Masonry | Atylus",
        description:
          "Atylus'un tasarim ve proje gorsellerini masonry yerlesim ile inceleyin.",
      },
      computerVisionSolutions: {
        title: "Bilgisayarli Goru Cozumleri | Atylus",
        description:
          "Bilgisayarli goruyu operasyonel kullanim senaryolarina tasiyan Atylus cozumleri.",
      },
      predictiveAnalytics: {
        title: "Ongorusel Veri Analitigi | Atylus",
        description:
          "Tahminleme, erken uyari ve karar destek icin ongorusel analitik cozumleri.",
      },
      customSoftwareSolutions: {
        title: "Ozel Yazilim Cozumleri | Atylus",
        description:
          "Kurumsal ihtiyaclara gore tasarlanan ozel yazilim ve entegrasyon cozumleri.",
      },
      neuralNetworkDevelopment: {
        title: "Yapay Sinir Agi Gelistirme | Atylus",
        description:
          "Veri yogun kullanim senaryolari icin ozel modelleme ve neural network gelistirme.",
      },
      aiConsulting: {
        title: "Yapay Zeka Danismanligi | Atylus",
        description:
          "Kurumsal yapay zeka yol haritasi, mimari ve urunlestirme danismanligi.",
      },
      aiSystemIntegration: {
        title: "Yapay Zeka Sistem Entegrasyonu | Atylus",
        description:
          "AI servislerini mevcut veri, CRM ve operasyon sistemlerinize entegre edin.",
      },
      aiTechnologies: {
        title: "Yapay Zeka Teknolojileri | Atylus",
        description:
          "Atylus'un kullandigi yapay zeka altyapilari, araclari ve teknoloji yaklasimi.",
      },
      softwareDevelopmentProcesses: {
        title: "Yazilim Gelistirme Surecleri | Atylus",
        description:
          "Atylus'un yazilim ve yapay zeka teslim sureclerini adim adim inceleyin.",
      },
      blog: {
        title: "Blog | Atylus",
        description:
          "Atylus blogunda Astro, Starlight, SEO ve kurumsal yapay zeka odakli teknik icerikleri okuyun.",
      },
      docs: {
        title: "Dokumantasyon | Atylus",
        description:
          "Atylus dokumantasyonu; migration blueprint, icerik modeli ve teknik referanslari kapsar.",
      },
    },
  },
  en: {
    siteTitle: "Atylus | Enterprise AI and MCP Solutions",
    siteDescription:
      "Atylus designs enterprise AI systems, MCP servers, decision tooling, and workflow automation platforms.",
    nav: {
      home: "Home",
      services: "Services",
      resources: "Resources",
      contact: "Contact",
      inspectDetail: "Inspect Detail",
      resourceHubTitle: "Resource Hub",
      resourceHubDescription:
        "We gather guides, technical notes, and documentation in one structured hub.",
      viewAllResources: "View All Resources",
      contactCta: "Contact Us",
    },
    footer: {
      title: "Meet Enterprise AI Systems",
      cta: "Contact Us",
      since: "Since 2025",
      rightsReserved: "All rights reserved.",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
      language: "Language",
      languageAria: "Change language",
    },
    contact: {
      eyebrow: "get in touch",
      title:
        "We are here to answer your questions and shape the right solution for your needs",
      description:
        "Reach out to discuss enterprise AI, MCP, automation, and custom software initiatives. Our team will get back to you shortly.",
      phone: "Phone",
      email: "Email",
      location: "Location",
      locationLines: ["Kayseri, Turkiye", "Head Office"],
      social: "Social Media",
      formTitle: "Get in Touch",
      formName: "Full name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Write your message...",
      formSubmit: "Send Message",
    },
    sidebar: {
      contacts: "Contact",
      close: "close",
      followUs: "Follow us:",
    },
    breadcrumbs: {
      home: "Home",
      services: "Services",
      blog: "Blog",
      docs: "Documentation",
    },
    pageMeta: {
      home: {
        title: "Atylus | Enterprise AI, MCP, and Automation Solutions",
        description:
          "Scale operations with enterprise AI, MCP server development, chatbots, decision support systems, and workflow automation.",
      },
      about: {
        title: "About | Atylus",
        description:
          "Learn how Atylus approaches enterprise AI, MCP infrastructure, and data-driven product delivery.",
      },
      contact: {
        title: "Contact | Atylus",
        description:
          "Talk to Atylus about enterprise AI, MCP, and automation initiatives.",
      },
      services: {
        title: "Services | Atylus",
        description:
          "Explore Atylus services across analytics, generative AI, chatbots, MCP servers, and workflow orchestration.",
      },
      projects: {
        title: "Projects | Atylus",
        description:
          "Review selected enterprise AI and automation delivery surfaces from Atylus.",
      },
      vendilusProject: {
        title: "Vendilus | Atylus",
        description:
          "Explore Vendilus, its multi-marketplace synchronization model, MCP architecture, and AI-driven operations layer.",
      },
      faq: {
        title: "FAQ | Atylus",
        description:
          "Frequently asked questions about enterprise AI projects, collaboration models, and technical delivery.",
      },
      pricing: {
        title: "Pricing | Atylus",
        description:
          "Review Atylus delivery packages and service engagement models.",
      },
      team: {
        title: "Team | Atylus",
        description:
          "Meet the Atylus team and its delivery-focused expertise.",
      },
      teamMember: {
        title: "Team Member | Atylus",
        description:
          "Role, experience, and capability details for an Atylus team member.",
      },
      galleryGrid: {
        title: "Gallery Grid | Atylus",
        description:
          "Selected visuals and project surfaces from Atylus work.",
      },
      galleryMasonry: {
        title: "Gallery Masonry | Atylus",
        description:
          "Explore Atylus design and project visuals in a masonry layout.",
      },
      computerVisionSolutions: {
        title: "Computer Vision Solutions | Atylus",
        description:
          "Operational computer vision solutions tailored to enterprise workflows.",
      },
      predictiveAnalytics: {
        title: "Predictive Data Analytics | Atylus",
        description:
          "Predictive analytics services for forecasting, early warning, and decision support.",
      },
      customSoftwareSolutions: {
        title: "Custom Software Solutions | Atylus",
        description:
          "Custom software and integration delivery for enterprise-specific needs.",
      },
      neuralNetworkDevelopment: {
        title: "Neural Network Development | Atylus",
        description:
          "Specialized model development for data-intensive enterprise scenarios.",
      },
      aiConsulting: {
        title: "AI Consulting | Atylus",
        description:
          "Architecture, roadmap, and productization consulting for enterprise AI.",
      },
      aiSystemIntegration: {
        title: "AI System Integration | Atylus",
        description:
          "Integrate AI systems with your data, CRM, and operational layers.",
      },
      aiTechnologies: {
        title: "AI Technologies | Atylus",
        description:
          "The AI technologies, tools, and delivery stack behind Atylus.",
      },
      softwareDevelopmentProcesses: {
        title: "Software Development Processes | Atylus",
        description:
          "Understand the software and AI delivery processes used by Atylus.",
      },
      blog: {
        title: "Blog | Atylus",
        description:
          "Read technical content on Astro, Starlight, SEO, and enterprise AI on the Atylus blog.",
      },
      docs: {
        title: "Documentation | Atylus",
        description:
          "Browse Atylus documentation covering migration blueprints, content models, and technical references.",
      },
    },
  },
  de: {
    siteTitle: "Atylus | Unternehmens-KI- und MCP-Loesungen",
    siteDescription:
      "Atylus entwickelt Unternehmens-KI, MCP-Server, Entscheidungssysteme und Workflow-Automatisierung.",
    nav: {
      home: "Startseite",
      services: "Leistungen",
      resources: "Ressourcen",
      contact: "Kontakt",
      inspectDetail: "Details ansehen",
      resourceHubTitle: "Ressourcen-Hub",
      resourceHubDescription:
        "Wir buendeln Leitfaeden, technische Notizen und Dokumentation in einem zentralen Hub.",
      viewAllResources: "Alle Ressourcen anzeigen",
      contactCta: "Kontakt aufnehmen",
    },
    footer: {
      title: "Lernen Sie Unternehmens-KI kennen",
      cta: "Kontakt aufnehmen",
      since: "Seit 2025",
      rightsReserved: "Alle Rechte vorbehalten.",
      terms: "Nutzungsbedingungen",
      privacy: "Datenschutz",
      language: "Sprache",
      languageAria: "Sprache wechseln",
    },
    contact: {
      eyebrow: "kontakt",
      title:
        "Wir sind hier, um Ihre Fragen zu beantworten und die passende Loesung fuer Ihren Bedarf zu gestalten",
      description:
        "Sprechen Sie mit uns ueber Unternehmens-KI, MCP, Automatisierung und individuelle Softwareinitiativen. Unser Team meldet sich kurzfristig zurueck.",
      phone: "Telefon",
      email: "E-Mail",
      location: "Standort",
      locationLines: ["Kayseri, Turkei", "Zentrale"],
      social: "Soziale Netzwerke",
      formTitle: "Kontakt aufnehmen",
      formName: "Vollstaendiger Name",
      formEmail: "E-Mail",
      formSubject: "Betreff",
      formMessage: "Schreiben Sie Ihre Nachricht...",
      formSubmit: "Nachricht senden",
    },
    sidebar: {
      contacts: "Kontakt",
      close: "schliessen",
      followUs: "Folgen Sie uns:",
    },
    breadcrumbs: {
      home: "Startseite",
      services: "Leistungen",
      blog: "Blog",
      docs: "Dokumentation",
    },
    pageMeta: {
      home: {
        title: "Atylus | Unternehmens-KI-, MCP- und Automatisierungsloesungen",
        description:
          "Skalieren Sie Prozesse mit Unternehmens-KI, MCP-Server-Entwicklung, Chatbots, Entscheidungssystemen und Workflow-Automatisierung.",
      },
      about: {
        title: "Ueber uns | Atylus",
        description:
          "Erfahren Sie, wie Atylus Unternehmens-KI, MCP-Infrastruktur und datengetriebene Lieferung angeht.",
      },
      contact: {
        title: "Kontakt | Atylus",
        description:
          "Sprechen Sie mit Atylus ueber Unternehmens-KI, MCP und Automatisierung.",
      },
      services: {
        title: "Leistungen | Atylus",
        description:
          "Entdecken Sie Atylus Leistungen in den Bereichen Analytik, Generative KI, Chatbots, MCP-Server und Workflow-Orchestrierung.",
      },
      projects: {
        title: "Projekte | Atylus",
        description:
          "Ausgewaehlte Unternehmens-KI- und Automatisierungsprojekte von Atylus.",
      },
      vendilusProject: {
        title: "Vendilus | Atylus",
        description:
          "Entdecken Sie Vendilus mit Multi-Marketplace-Synchronisierung, MCP-Architektur und KI-gestuetzter Operationsschicht.",
      },
      faq: {
        title: "FAQ | Atylus",
        description:
          "Hauefige Fragen zu Unternehmens-KI-Projekten, Zusammenarbeitsmodellen und technischer Lieferung.",
      },
      pricing: {
        title: "Preise | Atylus",
        description:
          "Ueberblick ueber Pakete und Leistungsmodelle von Atylus.",
      },
      team: {
        title: "Team | Atylus",
        description:
          "Lernen Sie das Atylus Team und seine umsetzungsorientierte Expertise kennen.",
      },
      teamMember: {
        title: "Teammitglied | Atylus",
        description:
          "Rollen-, Erfahrungs- und Faehigkeitsdetails eines Atylus Teammitglieds.",
      },
      galleryGrid: {
        title: "Galerie Grid | Atylus",
        description:
          "Ausgewaehlte Visuals und Projektoverlaeufe von Atylus.",
      },
      galleryMasonry: {
        title: "Galerie Masonry | Atylus",
        description:
          "Entdecken Sie Design- und Projektvisuals von Atylus im Masonry-Layout.",
      },
      computerVisionSolutions: {
        title: "Computer Vision Loesungen | Atylus",
        description:
          "Computer-Vision-Loesungen fuer operative Unternehmens-Workflows.",
      },
      predictiveAnalytics: {
        title: "Praediktive Datenanalytik | Atylus",
        description:
          "Praediktive Analytik fuer Forecasting, Fruehwarnung und Entscheidungsunterstuetzung.",
      },
      customSoftwareSolutions: {
        title: "Individuelle Softwareloesungen | Atylus",
        description:
          "Individuelle Software- und Integrationslieferungen fuer unternehmensspezifische Anforderungen.",
      },
      neuralNetworkDevelopment: {
        title: "Neuronale Netzwerk-Entwicklung | Atylus",
        description:
          "Spezialisierte Modellentwicklung fuer datenintensive Unternehmensszenarien.",
      },
      aiConsulting: {
        title: "KI-Beratung | Atylus",
        description:
          "Architektur-, Roadmap- und Produktisierungsberatung fuer Unternehmens-KI.",
      },
      aiSystemIntegration: {
        title: "KI-Systemintegration | Atylus",
        description:
          "Integrieren Sie KI-Systeme in Daten-, CRM- und Betriebsschichten.",
      },
      aiTechnologies: {
        title: "KI-Technologien | Atylus",
        description:
          "Technologien, Werkzeuge und Delivery-Stack hinter Atylus.",
      },
      softwareDevelopmentProcesses: {
        title: "Softwareentwicklungsprozesse | Atylus",
        description:
          "Verstehen Sie die Software- und KI-Lieferprozesse von Atylus.",
      },
      blog: {
        title: "Blog | Atylus",
        description:
          "Lesen Sie technische Inhalte zu Astro, Starlight, SEO und Unternehmens-KI im Atylus Blog.",
      },
      docs: {
        title: "Dokumentation | Atylus",
        description:
          "Durchsuchen Sie die Atylus Dokumentation mit Migrationsblueprints, Content-Modellen und technischen Referenzen.",
      },
    },
  },
};

export function getUiCopy(locale: SupportedLocale) {
  return uiCopyByLocale[locale];
}

export function getPageSeo(
  locale: SupportedLocale,
  key: MarketingPageKey | "blog" | "docs",
) {
  return uiCopyByLocale[locale].pageMeta[key];
}
