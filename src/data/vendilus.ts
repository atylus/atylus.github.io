import type { SupportedLocale } from "@/i18n/config";
import { getLocalizedPagePath } from "@/i18n/routes";

type Metric = {
  value: number;
  suffix: string;
  label: string;
};

type GalleryItem = {
  id: string;
  imageSrc: string;
  width: number;
  height: number;
  label: string;
};

type LocaleContent = {
  category: string;
  breadcrumbs: {
    home: string;
    projects: string;
  };
  banner: {
    staffText: string;
    title: string;
  };
  intro: {
    title: string;
    summary: string;
    detail: string;
    bullets: [string, string, string, string];
    meta: [string, string, string];
    primaryCta: string;
    secondaryCta: string;
  };
  showcase: {
    label: string;
    heading: string;
    actionLabel: string;
  };
  process: {
    title: string;
    paragraphs: [string, string, string];
    quote: string;
    quoteAuthor: string;
  };
  gallery: {
    items: [GalleryItem, GalleryItem, GalleryItem, GalleryItem];
  };
  outcomes: {
    title: string;
    description: string;
    bullets: [string, string, string, string];
    metrics: [Metric, Metric];
  };
  navigation: {
    previousLabel: string;
    previousTitle: string;
    nextLabel: string;
    nextTitle: string;
  };
};

export type VendilusProjectContent = LocaleContent & {
  slug: "vendilus";
  name: "Vendilus";
  liveUrl: string;
  architectureAnchor: string;
};

const liveUrl = "https://vendilus.atylus.com";

const sharedGallery: LocaleContent["gallery"] = {
  items: [
    {
      id: "observe",
      imageSrc: "/assets/images/project/pro7-5.png",
      width: 897,
      height: 680,
      label: "Observe",
    },
    {
      id: "plan",
      imageSrc: "/assets/images/project/pro7-4.png",
      width: 897,
      height: 680,
      label: "Plan",
    },
    {
      id: "decide",
      imageSrc: "/assets/images/project/pro7-3.png",
      width: 897,
      height: 680,
      label: "Decide",
    },
    {
      id: "act",
      imageSrc: "/assets/images/project/pro7-2.png",
      width: 897,
      height: 680,
      label: "Act",
    },
  ],
};

const contentByLocale: Record<SupportedLocale, LocaleContent> = {
  tr: {
    category: "Retail / E-Commerce",
    breadcrumbs: {
      home: "Ana Sayfa",
      projects: "Projeler",
    },
    banner: {
      staffText: "Vendilus",
      title: "/ Vendilus /",
    },
    intro: {
      title: "E-ticaret ve coklu pazar yeri senkronizasyonu icin MCP merkezli operasyon katmani",
      summary:
        "Vendilus; Trendyol, Amazon, Etsy ve Shopify gibi daginik ticaret kanallarini tek bir karar yuzeyinde toplayan MCP tabanli bir urun tanitimidir.",
      detail:
        "Amac, stok, siparis ve fiyat bilgisini farkli API protokollerinden es zamanli okuyup yapay zeka ajanlarinin anlayacagi ortak bir ProductState semasina donusturmektir. Boylece satici, panel degistirmeden dogrudan asistanina komut vererek operasyon yonetebilir.",
      bullets: [
        "REST, GraphQL, XML ve JSON kaynaklarini tek komut hattinda birlestirir.",
        "Gercek zamanli stok, fiyat ve siparis durumunu normalize ederek sunar.",
        "MCP sunucusu uzerinden LLM baglamina guvenilir ticaret verisi tasir.",
        "Satıcı aksiyonlarini dusuk gecikme ve yuksek izlenebilirlikle orkestre eder.",
      ],
      meta: [
        "MCP urun mimarisi",
        "Pazar yeri entegrasyonu ve senkronizasyon algoritmasi",
        "Vendilus platform tanitimi",
      ],
      primaryCta: "Sistemi incele",
      secondaryCta: "Urun akisini gor",
    },
    showcase: {
      label: "Vendilus",
      heading: "Tum magazalarinizi yoneten yapay zeka asistani",
      actionLabel: "Canli urunu ac",
    },
    process: {
      title: "Referans algoritma",
      paragraphs: [
        "Sistem, kullanicidan gelen 'X urununun tum platformlardaki guncel durumu nedir?' benzeri bir istemi alir ve bunu kanal bagimsiz bir sorgu planina donusturur.",
        "Ardindan MCP gorev katmani, ilgili pazar yeri API'lerine paralel async istekler gonderir. Her kaynak icin gecikme, hata ve eksik veri sinyalleri ayrica izlenir.",
        "Gelen XML ve JSON yanitlari ortak ProductState semasina normalize edilir; son durumda ajan tarafina tek bir baglamsal cevap doner ve oneri uretimi bu veri uzerinden gerceklesir.",
      ],
      quote:
        "Observe, Plan, Decide ve Act akisi; daginik ticaret verisini aksiyon alinabilir bir karar sistemine donusturur.",
      quoteAuthor: "Vendilus MCP Pipeline",
    },
    gallery: sharedGallery,
    outcomes: {
      title: "Beklenen operasyonel ciktilar",
      description:
        "Vendilus, coklu kanal operasyonunda gorunurluk kaybini azaltir ve yapay zeka destekli karar katmanini guvenilir veriyle besler.",
      bullets: [
        "Tum magazalar icin tekil envanter gorunurlugu olusturur.",
        "Fiyat ve stok farklarini erken tespit ederek risk puanlar.",
        "Ajan komutlari icin standartlasmis veri modeli saglar.",
        "Satici operasyonlarini daha az panel gecisiyle hizlandirir.",
      ],
      metrics: [
        {
          value: 4,
          suffix: "+",
          label: "Bagli pazar yeri profili",
        },
        {
          value: 96,
          suffix: "%",
          label: "Stok uyumu hedef gorunurlugu",
        },
      ],
    },
    navigation: {
      previousLabel: "Tum projeler",
      previousTitle: "Atylus proje vitrini",
      nextLabel: "Iletisime gec",
      nextTitle: "Vendilus icin demo planlayin",
    },
  },
  en: {
    category: "Retail / E-Commerce",
    breadcrumbs: {
      home: "Home",
      projects: "Projects",
    },
    banner: {
      staffText: "Vendilus",
      title: "/ Vendilus /",
    },
    intro: {
      title: "An MCP-centered operations layer for e-commerce and multi-marketplace synchronization",
      summary:
        "Vendilus is a product showcase that unifies fragmented commerce channels such as Trendyol, Amazon, Etsy, and Shopify into one decision surface.",
      detail:
        "Its goal is to read stock, order, and pricing data concurrently from different API protocols and normalize that information into a shared ProductState schema that AI agents can reason over.",
      bullets: [
        "Combines REST, GraphQL, XML, and JSON sources in one command surface.",
        "Normalizes real-time stock, price, and order state across channels.",
        "Moves reliable commerce data into LLM context through an MCP server.",
        "Orchestrates seller actions with low latency and strong traceability.",
      ],
      meta: [
        "MCP product architecture",
        "Marketplace synchronization algorithm",
        "Vendilus platform showcase",
      ],
      primaryCta: "Inspect system",
      secondaryCta: "View product flow",
    },
    showcase: {
      label: "Vendilus",
      heading: "The AI assistant that manages all your stores",
      actionLabel: "Open live product",
    },
    process: {
      title: "Reference algorithm",
      paragraphs: [
        "The system accepts prompts such as 'What is the current cross-platform state of product X?' and converts them into a channel-agnostic query plan.",
        "The MCP task layer then issues parallel async requests to the relevant marketplace APIs while tracking latency, errors, and data gaps per source.",
        "Incoming XML and JSON payloads are normalized into a shared ProductState schema so the agent can respond with one consolidated operational answer.",
      ],
      quote:
        "Observe, Plan, Decide, and Act turns fragmented commerce data into an actionable decision system.",
      quoteAuthor: "Vendilus MCP Pipeline",
    },
    gallery: sharedGallery,
    outcomes: {
      title: "Expected operational outcomes",
      description:
        "Vendilus reduces visibility loss across channels and supplies AI decision layers with reliable retail context.",
      bullets: [
        "Creates a unified inventory view across stores.",
        "Scores pricing and stock divergence before it becomes costly.",
        "Provides a standardized data model for agent commands.",
        "Speeds up seller operations with fewer panel switches.",
      ],
      metrics: [
        {
          value: 4,
          suffix: "+",
          label: "Connected marketplace profiles",
        },
        {
          value: 96,
          suffix: "%",
          label: "Target stock alignment visibility",
        },
      ],
    },
    navigation: {
      previousLabel: "All projects",
      previousTitle: "Atylus project showcase",
      nextLabel: "Contact us",
      nextTitle: "Plan a Vendilus demo",
    },
  },
  de: {
    category: "Retail / E-Commerce",
    breadcrumbs: {
      home: "Startseite",
      projects: "Projekte",
    },
    banner: {
      staffText: "Vendilus",
      title: "/ Vendilus /",
    },
    intro: {
      title: "Eine MCP-zentrierte Operationsschicht fuer E-Commerce und Multi-Marketplace-Synchronisierung",
      summary:
        "Vendilus ist eine Produktpraesentation, die verteilte Vertriebskanaele wie Trendyol, Amazon, Etsy und Shopify in einer Entscheidungsoberflaeche zusammenfuehrt.",
      detail:
        "Ziel ist es, Bestands-, Bestell- und Preisdaten parallel aus unterschiedlichen API-Protokollen zu lesen und in ein gemeinsames ProductState-Schema fuer KI-Agenten zu ueberfuehren.",
      bullets: [
        "Vereint REST-, GraphQL-, XML- und JSON-Quellen in einer Befehlsoberflaeche.",
        "Normalisiert Echtzeitdaten fuer Bestand, Preis und Bestellungen kanaluebergreifend.",
        "Bringt verlaessliche Handelsdaten ueber einen MCP-Server in den LLM-Kontext.",
        "Orchestriert Seller-Aktionen mit geringer Latenz und hoher Nachvollziehbarkeit.",
      ],
      meta: [
        "MCP-Produktarchitektur",
        "Marketplace-Synchronisierungsalgorithmus",
        "Vendilus Plattform-Praesentation",
      ],
      primaryCta: "System pruefen",
      secondaryCta: "Produktfluss ansehen",
    },
    showcase: {
      label: "Vendilus",
      heading: "Der KI-Assistent, der alle Ihre Shops steuert",
      actionLabel: "Live-Produkt oeffnen",
    },
    process: {
      title: "Referenzalgorithmus",
      paragraphs: [
        "Das System verarbeitet Anfragen wie 'Wie ist der aktuelle Status von Produkt X auf allen Plattformen?' und uebersetzt sie in einen kanalunabhaengigen Abfrageplan.",
        "Die MCP-Aufgabenschicht sendet daraufhin parallele Async-Anfragen an die relevanten Marketplace-APIs und ueberwacht Latenz, Fehler und Datenluecken je Quelle.",
        "Eingehende XML- und JSON-Antworten werden in ein gemeinsames ProductState-Schema normalisiert, damit der Agent eine konsolidierte operative Antwort liefern kann.",
      ],
      quote:
        "Observe, Plan, Decide und Act verwandelt verteilte Handelsdaten in ein handlungsfaehiges Entscheidungssystem.",
      quoteAuthor: "Vendilus MCP Pipeline",
    },
    gallery: sharedGallery,
    outcomes: {
      title: "Erwartete operative Ergebnisse",
      description:
        "Vendilus reduziert Sichtbarkeitsverluste zwischen Kanaelen und versorgt KI-Entscheidungsschichten mit verlaesslichem Handelskontext.",
      bullets: [
        "Erzeugt eine einheitliche Sicht auf Bestandsdaten ueber alle Shops hinweg.",
        "Erkennt Preis- und Bestandsabweichungen fruehzeitig.",
        "Stellt ein standardisiertes Datenmodell fuer Agentenbefehle bereit.",
        "Beschleunigt Seller-Operationen mit weniger Panel-Wechseln.",
      ],
      metrics: [
        {
          value: 4,
          suffix: "+",
          label: "Verbundene Marketplace-Profile",
        },
        {
          value: 96,
          suffix: "%",
          label: "Zielwert fuer Bestandsabgleich",
        },
      ],
    },
    navigation: {
      previousLabel: "Alle Projekte",
      previousTitle: "Atylus Projektuebersicht",
      nextLabel: "Kontakt",
      nextTitle: "Vendilus Demo planen",
    },
  },
};

export function getVendilusProjectPath(locale: SupportedLocale): string {
  return getLocalizedPagePath(locale, "vendilusProject");
}

export function getVendilusProjectContent(
  locale: SupportedLocale,
): VendilusProjectContent {
  return {
    slug: "vendilus",
    name: "Vendilus",
    liveUrl,
    architectureAnchor: "#vendilus-flow",
    ...contentByLocale[locale],
  };
}
