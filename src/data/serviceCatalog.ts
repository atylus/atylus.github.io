import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type SupportedLocale,
} from "@/i18n/config";
import { SERVICE_SECTION_SEGMENTS } from "@/i18n/routes";
import type {
  ServiceCatalogCategory,
  ServiceCatalogItem,
  ServiceCategoryKey,
  ServiceItemKey,
} from "@/types/services";

type LocalizedServiceCopy = {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroLabel: string;
  detailTitle: string;
  detailIntro: string;
  detailParagraphs: [string, string];
  bullets: string[];
};

type LocalizedCategoryCopy = {
  title: string;
  description: string;
};

type ServiceDefinition = {
  key: ServiceItemKey;
  category: ServiceCategoryKey;
  copy: Record<SupportedLocale, LocalizedServiceCopy>;
};

type CategoryDefinition = {
  key: ServiceCategoryKey;
  shortCode: string;
  copy: Record<SupportedLocale, LocalizedCategoryCopy>;
};

const categoryDefinitions: CategoryDefinition[] = [
  {
    key: "analitik",
    shortCode: "[A]",
    copy: {
      tr: {
        title: "Analitik",
        description:
          "Veriyi sinyale, sinyali yonetsel karara donusturen analitik katman.",
      },
      en: {
        title: "Analytics",
        description:
          "An analytics layer that turns raw data into signals and signals into measurable decisions.",
      },
      de: {
        title: "Analytik",
        description:
          "Eine Analytikschicht, die Daten in Signale und Signale in messbare Entscheidungen ueberfuehrt.",
      },
    },
  },
  {
    key: "teknoloji",
    shortCode: "[T]",
    copy: {
      tr: {
        title: "Teknoloji",
        description:
          "Marka dili ve is hedefleriyle uyumlu uygulama ve modelleme katmani.",
      },
      en: {
        title: "Technology",
        description:
          "Application and modeling capabilities aligned with brand language and business goals.",
      },
      de: {
        title: "Technologie",
        description:
          "Anwendungs- und Modellierungsschicht im Einklang mit Markensprache und Geschaeftszielen.",
      },
    },
  },
  {
    key: "verim",
    shortCode: "[Y]",
    copy: {
      tr: {
        title: "Verim",
        description:
          "Maliyet, sure ve hata oranlarini optimize eden surec tasarimi.",
      },
      en: {
        title: "Efficiency",
        description:
          "Process design focused on reducing cost, cycle time and error rates.",
      },
      de: {
        title: "Effizienz",
        description:
          "Prozessdesign zur Optimierung von Kosten, Durchlaufzeit und Fehlerquote.",
      },
    },
  },
  {
    key: "mantik",
    shortCode: "[L]",
    copy: {
      tr: {
        title: "Mantik",
        description:
          "Karar, kural ve deney akislarini aciklanabilir sistemlere tasiyan katman.",
      },
      en: {
        title: "Logic",
        description:
          "A layer that converts decision, policy and experimentation flows into explainable systems.",
      },
      de: {
        title: "Logik",
        description:
          "Eine Schicht, die Entscheidungs-, Regel- und Experimentierfluesse in erklaerbare Systeme ueberfuehrt.",
      },
    },
  },
  {
    key: "operasyonel-fayda",
    shortCode: "[U]",
    copy: {
      tr: {
        title: "Operasyonel Fayda",
        description:
          "Kurumsal ekipleri dogrudan hizlandiran teslimatlar ve entegrasyonlar.",
      },
      en: {
        title: "Operational Value",
        description:
          "Deliverables and integrations that directly accelerate enterprise teams.",
      },
      de: {
        title: "Operativer Nutzen",
        description:
          "Lieferobjekte und Integrationen, die Unternehmensteams direkt beschleunigen.",
      },
    },
  },
];

const serviceDefinitions: ServiceDefinition[] = [
  {
    key: "risk-ve-anomali-analizi",
    category: "analitik",
    copy: {
      tr: {
        slug: "risk-ve-anomali-analizi",
        title: "Risk ve Anomali Analizi",
        description: "Anomaliler buyumeden once tespit edin.",
        seoTitle: "Risk ve Anomali Analizi | Atylus Hizmetler",
        seoDescription:
          "Risk ve anomali analizi ile operasyonel sapmalari erken tespit edin ve kurumsal kararlari daha guvenli hale getirin.",
        heroLabel: "Analitik",
        detailTitle:
          "Risk ve anomali analizi ile veriyi, karari ve operasyonu tek akista yonetin",
        detailIntro:
          "Risk ve anomali analizi, kurum icindeki sapmalari gercek zamanli sinyallere donusturerek kritik aksiyonlarin gecikmeden alinmasini saglar.",
        detailParagraphs: [
          "Bu servis; finansal hareketler, operasyonel loglar, davranissal veriler ve islem akislari icinde normal dokuya uymayan desenleri tespit eder. Boylece ekipler sorun buyumeden once mudahale edebilir.",
          "Atylus bu hizmette aciklanabilir kurallar, alarm onceliklendirme ve kurumsal entegrasyon katmanlarini bir araya getirir. Sonuc; daha dusuk risk, daha yuksek gorunurluk ve daha hizli karar mekanizmasidir.",
        ],
        bullets: [
          "Finansal ve operasyonel anomalileri erken gorur.",
          "Alarm yorgunlugunu azaltan onceliklendirme mantigi kurar.",
          "Yonetim panolari icin surekli risk sinyali uretir.",
          "Kurumsal ekiplerin olaylara daha hizli yanit vermesini saglar.",
        ],
      },
      en: {
        slug: "risk-and-anomaly-analysis",
        title: "Risk and Anomaly Analysis",
        description: "Detect anomalies before they scale into operational damage.",
        seoTitle: "Risk and Anomaly Analysis | Atylus Services",
        seoDescription:
          "Detect risky deviations early, surface anomalies in real time, and support safer enterprise decisions with AI-driven analysis.",
        heroLabel: "Analytics",
        detailTitle:
          "Manage data, decisions, and operations in one flow with risk and anomaly analysis",
        detailIntro:
          "Risk and anomaly analysis turns abnormal patterns into actionable signals so teams can respond before minor drift becomes major loss.",
        detailParagraphs: [
          "The service scans financial events, operational logs, user behavior, and workflow traces for signals that do not match the expected baseline. This allows teams to intervene earlier and with more confidence.",
          "Atylus combines explainable detection logic, alert prioritization, and enterprise integrations in the same flow. The outcome is stronger visibility, faster decisions, and lower operational exposure.",
        ],
        bullets: [
          "Surfaces financial and operational anomalies early.",
          "Reduces alert fatigue with prioritization logic.",
          "Feeds decision dashboards with continuous risk signals.",
          "Improves incident response speed for enterprise teams.",
        ],
      },
      de: {
        slug: "risiko-und-anomalieanalyse",
        title: "Risiko- und Anomalieanalyse",
        description:
          "Erkennen Sie Anomalien, bevor sie zu betrieblichem Schaden fuehren.",
        seoTitle: "Risiko- und Anomalieanalyse | Atylus Leistungen",
        seoDescription:
          "Erkennen Sie riskante Abweichungen fruehzeitig, visualisieren Sie Anomalien in Echtzeit und unterstuetzen Sie sichere Unternehmensentscheidungen.",
        heroLabel: "Analytik",
        detailTitle:
          "Steuern Sie Daten, Entscheidungen und Betrieb mit Risiko- und Anomalieanalyse in einem Fluss",
        detailIntro:
          "Die Risiko- und Anomalieanalyse wandelt auffaellige Muster in verwertbare Signale um, damit Teams handeln koennen, bevor aus kleinen Abweichungen groessere Schaeden werden.",
        detailParagraphs: [
          "Der Service analysiert Finanzereignisse, Betriebsprotokolle, Nutzerverhalten und Prozessspuren auf Muster, die nicht zum erwarteten Normalzustand passen. So koennen Teams frueher und fundierter eingreifen.",
          "Atylus verbindet erklaerbare Erkennungslogik, Alarmpriorisierung und Unternehmensintegrationen in einem gemeinsamen Fluss. Das Ergebnis sind mehr Transparenz, schnellere Entscheidungen und geringeres operatives Risiko.",
        ],
        bullets: [
          "Erkennt finanzielle und operative Anomalien fruehzeitig.",
          "Reduziert Alarmmuedigkeit durch Priorisierungslogik.",
          "Speist Entscheidungs-Dashboards mit kontinuierlichen Risikosignalen.",
          "Beschleunigt die Reaktion auf Vorfaelle in Unternehmensteams.",
        ],
      },
    },
  },
  {
    key: "davranis-ve-segmentasyon",
    category: "analitik",
    copy: {
      tr: {
        slug: "davranis-ve-segmentasyon",
        title: "Davranis ve Segmentasyon",
        description: "Niyeti kumelendirip kararlari kisisellestirin.",
        seoTitle: "Davranis ve Segmentasyon | Atylus Hizmetler",
        seoDescription:
          "Davranis ve segmentasyon servisleri ile musteri niyetini modelleyin, teklif ve operasyon akisini kisisellestirin.",
        heroLabel: "Analitik",
        detailTitle:
          "Davranis ve segmentasyon ile musteri ve operasyon sinyallerini daha akilli yonetin",
        detailIntro:
          "Davranis ve segmentasyon servisleri, farkli kullanici ve islem tiplerini ayrisarak daha isabetli otomasyonlar kurgulamanizi saglar.",
        detailParagraphs: [
          "Atylus, olay bazli davranis sinyallerini bir araya getirerek benzer niyet ve risk profiline sahip segmentler olusturur. Bu segmentler; teklif, yonlendirme, uyari ve hizmet seviyelerini farklilastirmak icin kullanilir.",
          "Bu yaklasim sayesinde ekipler tum kullanicilara ayni operasyonu uygulamak yerine, ihtiyac ve degere gore degisen daha hassas akislari hayata gecirir.",
        ],
        bullets: [
          "Musteri niyeti ve davranis paternlerini gorunur kilar.",
          "Teklif ve iletisim akisini kisilestirir.",
          "Risk bazli segmentlerle operasyon onceligi belirler.",
          "Veri odakli deney ve optimizasyon altyapisi kurar.",
        ],
      },
      en: {
        slug: "behavior-and-segmentation",
        title: "Behavior and Segmentation",
        description: "Cluster intent and personalize operational decisions.",
        seoTitle: "Behavior and Segmentation | Atylus Services",
        seoDescription:
          "Model customer intent, build actionable segments, and personalize offers and workflows with behavior-based intelligence.",
        heroLabel: "Analytics",
        detailTitle:
          "Manage customer and operational signals more intelligently with behavior and segmentation",
        detailIntro:
          "Behavior and segmentation services help you distinguish user and process types so automation can react with more precision.",
        detailParagraphs: [
          "Atylus combines event-based behavioral signals to build segments with similar intent, value, and risk profiles. Those segments can drive offers, routing, alerting, and service-level differentiation.",
          "Instead of applying the same workflow to every user, teams can run more sensitive, value-aware operations that adapt to the situation in real time.",
        ],
        bullets: [
          "Makes customer intent and behavior patterns visible.",
          "Personalizes offer and communication flows.",
          "Uses risk-based segments to prioritize operations.",
          "Builds a measurable foundation for experimentation and optimization.",
        ],
      },
      de: {
        slug: "verhalten-und-segmentierung",
        title: "Verhalten und Segmentierung",
        description:
          "Bilden Sie Absichten in Segmenten ab und personalisieren Sie Entscheidungen.",
        seoTitle: "Verhalten und Segmentierung | Atylus Leistungen",
        seoDescription:
          "Modellieren Sie Kundenabsichten, erstellen Sie verwertbare Segmente und personalisieren Sie Angebote und Workflows.",
        heroLabel: "Analytik",
        detailTitle:
          "Steuern Sie Kunden- und Betriebssignale intelligenter mit Verhalten und Segmentierung",
        detailIntro:
          "Verhaltens- und Segmentierungsservices helfen dabei, Nutzer- und Prozesstypen sauber zu unterscheiden, damit Automatisierung praeziser reagieren kann.",
        detailParagraphs: [
          "Atylus kombiniert ereignisbasierte Verhaltenssignale, um Segmente mit aehnlichen Absichts-, Wert- und Risikoprofilen zu bilden. Diese Segmente steuern Angebote, Routing, Alarme und Service-Level.",
          "Statt denselben Ablauf fuer alle zu verwenden, koennen Teams wertorientierte und situationsabhaengige Operationen in Echtzeit ausrollen.",
        ],
        bullets: [
          "Macht Kundenabsichten und Verhaltensmuster sichtbar.",
          "Personalisiert Angebots- und Kommunikationsfluesse.",
          "Setzt risikobasierte Segmente fuer Priorisierung ein.",
          "Schafft eine messbare Basis fuer Experimente und Optimierung.",
        ],
      },
    },
  },
  {
    key: "karar-panolari",
    category: "analitik",
    copy: {
      tr: {
        slug: "karar-panolari",
        title: "Karar Panolari",
        description: "Gercek zamanli yonetici netligi saglayin.",
        seoTitle: "Karar Panolari | Atylus Hizmetler",
        seoDescription:
          "Gercek zamanli karar panolari ile KPI, anomali ve aksiyon onceliklerini tek ekranda toplayin.",
        heroLabel: "Analitik",
        detailTitle:
          "Gercek zamanli karar panolari ile yonetsel netligi tek ekranda toplayin",
        detailIntro:
          "Karar panolari, yonetim ekiplerinin KPI, risk ve aksiyon onceliklerini tek gorunumde okuyabilmesi icin tasarlanir.",
        detailParagraphs: [
          "Atylus; operasyonel veri, AI sinyalleri ve alarm ciktilarini tek bir yonetim katmaninda birlestirir. Boylece kritik metrikler gecikmeli raporlar yerine canli akista izlenebilir.",
          "Pano tasarimi sadece veri gorsellestirmesi degil, karar akisini hizlandiran bir operasyon arayuzu olarak ele alinir. Bu sayede ekipler ne oldugunu degil, ne yapmalari gerektigini daha hizli gorur.",
        ],
        bullets: [
          "KPI, risk ve AI sinyallerini tek yerde toplar.",
          "Yonetim ekipleri icin aksiyon odakli gorunurluk saglar.",
          "Canli veri uzerinde karar alma surecini kisaltir.",
          "Alarm ve durum degisimlerini operasyonla baglar.",
        ],
      },
      en: {
        slug: "decision-dashboards",
        title: "Decision Dashboards",
        description: "Create real-time management clarity.",
        seoTitle: "Decision Dashboards | Atylus Services",
        seoDescription:
          "Combine KPIs, anomaly signals, and action priorities into a single decision dashboard for management teams.",
        heroLabel: "Analytics",
        detailTitle:
          "Bring management clarity into one interface with real-time decision dashboards",
        detailIntro:
          "Decision dashboards are designed so leadership teams can read KPIs, risk, and action priorities in a single operational view.",
        detailParagraphs: [
          "Atylus unifies operational data, AI signals, and alert outputs in one management layer. Critical metrics can be monitored in a live stream instead of waiting for delayed reporting cycles.",
          "Dashboard design is treated as an operational decision interface, not just data visualization. Teams can understand not only what is happening, but what should happen next.",
        ],
        bullets: [
          "Combines KPIs, risk, and AI signals in one place.",
          "Creates action-oriented visibility for leadership teams.",
          "Shortens decision time on live operational data.",
          "Connects alert states with downstream operations.",
        ],
      },
      de: {
        slug: "entscheidungs-dashboards",
        title: "Entscheidungs-Dashboards",
        description: "Schaffen Sie Echtzeit-Klarheit fuer das Management.",
        seoTitle: "Entscheidungs-Dashboards | Atylus Leistungen",
        seoDescription:
          "Fuehren Sie KPIs, Anomaliesignale und Aktionsprioritaeten in einem einzigen Entscheidungs-Dashboard zusammen.",
        heroLabel: "Analytik",
        detailTitle:
          "Binden Sie Fuehrungsklarheit mit Echtzeit-Entscheidungs-Dashboards in eine Oberflaeche ein",
        detailIntro:
          "Entscheidungs-Dashboards ermoeglichen es Fuehrungsteams, KPIs, Risiken und Aktionsprioritaeten in einer operativen Ansicht zu lesen.",
        detailParagraphs: [
          "Atylus vereint operative Daten, KI-Signale und Alarmereignisse in einer Managementschicht. Kritische Kennzahlen koennen in Echtzeit statt nur ueber verzoegerte Reports beobachtet werden.",
          "Das Dashboard wird nicht nur als Visualisierung, sondern als operative Entscheidungsoberflaeche gebaut. Teams erkennen dadurch schneller, was als naechstes zu tun ist.",
        ],
        bullets: [
          "Fuehrt KPI-, Risiko- und KI-Signale an einem Ort zusammen.",
          "Schafft aktionsorientierte Transparenz fuer Fuehrungsteams.",
          "Verkuerzt Entscheidungszeiten auf Live-Daten.",
          "Verbindet Alarmzustaende mit operativen Folgeschritten.",
        ],
      },
    },
  },
  {
    key: "uretken-yapay-zeka",
    category: "teknoloji",
    copy: {
      tr: {
        slug: "uretken-yapay-zeka",
        title: "Uretken Yapay Zeka",
        description:
          "Marka diliyle uyumlu icerikler ve akilli otomasyonlar uretin.",
        seoTitle: "Uretken Yapay Zeka | Atylus Hizmetler",
        seoDescription:
          "Uretken yapay zeka servisleri ile kurumunuza ozel icerik, asistan ve otomasyon akislari tasarlayin.",
        heroLabel: "Teknoloji",
        detailTitle:
          "Uretken yapay zeka ile kurumunuza ozel icerik ve otomasyon katmani olusturun",
        detailIntro:
          "Uretken yapay zeka servisleri, marka tonu ve kurumsal baglamla uyumlu yardimci sistemler olusturmanizi saglar.",
        detailParagraphs: [
          "Atylus, LLM tabanli sistemleri sadece genel amacli arayuzler olarak degil; bilgi erisimi, icerik uretimi ve surec destek katmani olarak kurumunuza ozel hale getirir.",
          "Bu servis; bilgi tabanlari, onay akislari, insan denetimi ve guvenlik politikalarini birlikte ele alarak uretken AI kullanimini olculu ve operasyonel hale getirir.",
        ],
        bullets: [
          "Kurumsal bilgiyle beslenen AI asistanlari kurar.",
          "Icerik, destek ve operasyon akislari icin otomasyon katmani ekler.",
          "Insan denetimi ve guvenlik kurallarini sisteme dahil eder.",
          "LLM kullanimini olculebilir is ciktilarina baglar.",
        ],
      },
      en: {
        slug: "generative-ai",
        title: "Generative AI",
        description:
          "Produce brand-aligned content and intelligent automation flows.",
        seoTitle: "Generative AI | Atylus Services",
        seoDescription:
          "Design enterprise-grade assistants, content systems, and automation flows powered by generative AI.",
        heroLabel: "Technology",
        detailTitle:
          "Build a content and automation layer tailored to your organization with generative AI",
        detailIntro:
          "Generative AI services help you launch assistants and content systems that align with your brand tone and institutional context.",
        detailParagraphs: [
          "Atylus adapts LLM-based systems into enterprise-ready layers for knowledge access, content generation, and workflow support instead of leaving them as generic chat interfaces.",
          "The service combines knowledge bases, approval flows, human oversight, and security policies to make generative AI controlled, measurable, and operational.",
        ],
        bullets: [
          "Builds AI assistants grounded in enterprise knowledge.",
          "Adds automation layers for content, support, and operations.",
          "Includes human review and policy controls in the system.",
          "Connects LLM usage to measurable business output.",
        ],
      },
      de: {
        slug: "generative-ki",
        title: "Generative KI",
        description:
          "Erzeugen Sie markenkonforme Inhalte und intelligente Automatisierungen.",
        seoTitle: "Generative KI | Atylus Leistungen",
        seoDescription:
          "Entwickeln Sie unternehmensfaehige Assistenten, Content-Systeme und Automatisierungsfluesse mit generativer KI.",
        heroLabel: "Technologie",
        detailTitle:
          "Erstellen Sie mit generativer KI eine auf Ihr Unternehmen zugeschnittene Content- und Automatisierungsschicht",
        detailIntro:
          "Generative KI Services helfen dabei, Assistenten und Content-Systeme zu entwickeln, die zur Markensprache und zum Unternehmenskontext passen.",
        detailParagraphs: [
          "Atylus formt LLM-basierte Systeme zu einer Unternehmensschicht fuer Wissenszugriff, Content-Erstellung und Workflow-Unterstuetzung, statt sie als allgemeine Chat-Oberflaechen zu belassen.",
          "Der Service verbindet Wissensdatenbanken, Freigabeprozesse, menschliche Kontrolle und Sicherheitsrichtlinien, damit generative KI steuerbar und betrieblich nutzbar wird.",
        ],
        bullets: [
          "Baut KI-Assistenten auf Basis von Unternehmenswissen.",
          "Fuegt Automatisierung fuer Content, Support und Betrieb hinzu.",
          "Integriert menschliche Kontrolle und Richtlinien in das System.",
          "Verknuepft LLM-Nutzung mit messbaren Geschaeftsergebnissen.",
        ],
      },
    },
  },
  {
    key: "hizmet-basina-maliyet-azaltma",
    category: "verim",
    copy: {
      tr: {
        slug: "hizmet-basina-maliyet-azaltma",
        title: "Hizmet Basina Maliyet Azaltma",
        description: "Akilli otomasyonla siparis basi maliyeti dusurun.",
        seoTitle: "Hizmet Basina Maliyet Azaltma | Atylus Hizmetler",
        seoDescription:
          "Siparis, destek ve operasyon akislari icin maliyet azaltan akilli otomasyon modelleri kurun.",
        heroLabel: "Verim",
        detailTitle:
          "Akilli otomasyonla hizmet basina maliyeti kontrollu sekilde azaltin",
        detailIntro:
          "Bu hizmet, manuel is yukunu azaltarak birim hizmet maliyetini daha olculebilir sekilde dusurmeyi hedefler.",
        detailParagraphs: [
          "Atylus; siparis, destek, onay ve takip akislari icinde tekrar eden adimlari otomatiklestirerek her islem basina dusen zamani ve emegi azaltir.",
          "Boylece ekipler kapasiteyi ayni oranda buyutmeksizin daha fazla hacmi yonetebilir, maliyet baskisini daha saglikli kontrol eder.",
        ],
        bullets: [
          "Tekrarlanan adimlari otomatiklestirir.",
          "Birim hizmet maliyetini izlenebilir hale getirir.",
          "Ayni ekiple daha fazla hacim yonetilmesini saglar.",
          "Operasyonel kapasiteyi olceklendirir.",
        ],
      },
      en: {
        slug: "cost-reduction-per-service",
        title: "Cost Reduction Per Service",
        description:
          "Reduce per-order and per-service cost through intelligent automation.",
        seoTitle: "Cost Reduction Per Service | Atylus Services",
        seoDescription:
          "Lower service delivery costs by automating repetitive work across support, order, and operational flows.",
        heroLabel: "Efficiency",
        detailTitle:
          "Reduce cost per service in a controlled way with intelligent automation",
        detailIntro:
          "This service focuses on lowering unit service cost by reducing manual workload with measurable automation.",
        detailParagraphs: [
          "Atylus automates repetitive tasks across order, support, approval, and follow-up flows so each transaction consumes less time and human effort.",
          "Teams can manage more volume without scaling headcount at the same pace, giving the business healthier control over cost pressure.",
        ],
        bullets: [
          "Automates repetitive operational steps.",
          "Makes per-service cost measurable and visible.",
          "Supports more throughput with the same team size.",
          "Improves operational scalability.",
        ],
      },
      de: {
        slug: "kostenreduktion-pro-service",
        title: "Kostenreduktion pro Service",
        description:
          "Senken Sie Kosten pro Auftrag und Service mit intelligenter Automatisierung.",
        seoTitle: "Kostenreduktion pro Service | Atylus Leistungen",
        seoDescription:
          "Reduzieren Sie Lieferkosten, indem Sie wiederkehrende Arbeit in Support-, Bestell- und Betriebsablaeufen automatisieren.",
        heroLabel: "Effizienz",
        detailTitle:
          "Senken Sie die Kosten pro Service kontrolliert mit intelligenter Automatisierung",
        detailIntro:
          "Dieser Service zielt darauf ab, die Stueckkosten von Services durch messbare Automatisierung und weniger manuelle Arbeit zu senken.",
        detailParagraphs: [
          "Atylus automatisiert wiederkehrende Schritte in Bestell-, Support-, Freigabe- und Nachverfolgungsablaeufen, damit pro Vorgang weniger Zeit und Personalaufwand benoetigt werden.",
          "So koennen Teams mehr Volumen bewältigen, ohne die Teamgroesse im selben Tempo zu erhoehen, und den Kostendruck besser kontrollieren.",
        ],
        bullets: [
          "Automatisiert wiederkehrende operative Schritte.",
          "Macht Kosten pro Service messbar und sichtbar.",
          "Ermoeglicht mehr Volumen mit derselben Teamgroesse.",
          "Verbessert die Skalierbarkeit des Betriebs.",
        ],
      },
    },
  },
  {
    key: "hiz-ve-dongu-suresi",
    category: "verim",
    copy: {
      tr: {
        slug: "hiz-ve-dongu-suresi",
        title: "Hiz ve Dongu Suresi",
        description: "Talep ile sonuc arasindaki sureyi kisaltin.",
        seoTitle: "Hiz ve Dongu Suresi | Atylus Hizmetler",
        seoDescription:
          "Talep, onay ve teslim adimlarini hizlandirarak operasyonel dongu surelerini kisaltin.",
        heroLabel: "Verim",
        detailTitle:
          "Talep ile sonuc arasindaki sureyi veri odakli otomasyonla kisaltin",
        detailIntro:
          "Dongu suresi optimizasyonu, musteri veya ic ekip taleplerinin daha hizli sonuclanmasi icin surec tikanikliklarini ortadan kaldirir.",
        detailParagraphs: [
          "Atylus surec icindeki gecikme noktalarini haritalandirir, onay ve yonlendirme mekanizmalarini otomasyon ile yeniden kurgular ve kritik bekleme surelerini azaltir.",
          "Bunun sonucu olarak ekipler hem musteri deneyimini hem de ic operasyon akisini daha hizli ve daha tutarli bir seviyeye ceker.",
        ],
        bullets: [
          "Surec tikanikliklarini gorunur hale getirir.",
          "Onay ve yonlendirme akisini hizlandirir.",
          "Teslim ve geri donus surelerini kisaltir.",
          "Musteri ve ic ekip deneyimini iyilestirir.",
        ],
      },
      en: {
        slug: "speed-and-cycle-time",
        title: "Speed and Cycle Time",
        description: "Shorten the time between request and outcome.",
        seoTitle: "Speed and Cycle Time | Atylus Services",
        seoDescription:
          "Accelerate approval, routing, and delivery steps to reduce operational cycle times.",
        heroLabel: "Efficiency",
        detailTitle:
          "Shorten the time between request and outcome with data-driven automation",
        detailIntro:
          "Cycle time optimization removes process bottlenecks so customer and internal requests reach resolution faster.",
        detailParagraphs: [
          "Atylus maps delay points in the workflow, redesigns approval and routing logic with automation, and reduces critical waiting periods.",
          "As a result, teams improve both customer experience and internal operating flow with faster and more consistent execution.",
        ],
        bullets: [
          "Makes process bottlenecks visible.",
          "Accelerates approval and routing flows.",
          "Shortens delivery and response times.",
          "Improves both customer and internal team experience.",
        ],
      },
      de: {
        slug: "geschwindigkeit-und-durchlaufzeit",
        title: "Geschwindigkeit und Durchlaufzeit",
        description:
          "Verkuerzen Sie die Zeit zwischen Anfrage und Ergebnis.",
        seoTitle: "Geschwindigkeit und Durchlaufzeit | Atylus Leistungen",
        seoDescription:
          "Beschleunigen Sie Freigabe-, Routing- und Lieferprozesse, um operative Durchlaufzeiten zu reduzieren.",
        heroLabel: "Effizienz",
        detailTitle:
          "Verkuerzen Sie die Zeit zwischen Anfrage und Ergebnis mit datengetriebener Automatisierung",
        detailIntro:
          "Die Optimierung der Durchlaufzeit beseitigt Engpaesse, damit Kunden- und interne Anfragen schneller abgeschlossen werden.",
        detailParagraphs: [
          "Atylus kartiert Verzoegerungspunkte im Ablauf, gestaltet Freigabe- und Routinglogik mit Automatisierung neu und reduziert kritische Wartezeiten.",
          "Dadurch verbessern Teams sowohl die Kundenerfahrung als auch den internen Betriebsfluss durch schnellere und konstantere Abwicklung.",
        ],
        bullets: [
          "Macht Prozessengpaesse sichtbar.",
          "Beschleunigt Freigabe- und Routingfluesse.",
          "Verkuerzt Liefer- und Reaktionszeiten.",
          "Verbessert die Erfahrung fuer Kunden und interne Teams.",
        ],
      },
    },
  },
  {
    key: "kalite-ve-hata-azaltma",
    category: "verim",
    copy: {
      tr: {
        slug: "kalite-ve-hata-azaltma",
        title: "Kalite ve Hata Azaltma",
        description: "Koruma katmanlariyla hata oranlarini azaltin.",
        seoTitle: "Kalite ve Hata Azaltma | Atylus Hizmetler",
        seoDescription:
          "Kalite kontrol, guardrail ve kural katmanlari ile operasyonel hata oranlarini azaltin.",
        heroLabel: "Verim",
        detailTitle:
          "Koruma katmanlari ile kaliteyi standartlastirin ve hata oranlarini dusurun",
        detailIntro:
          "Kalite ve hata azaltma servisleri, surec icinde tekrar eden yanlisliklari kontrol altina alip standart ciktinin korunmasini saglar.",
        detailParagraphs: [
          "Atylus; kural motorlari, guardrail yapilari ve istisna yonetimi ile hassas operasyonlarda hata kaynaklarini azaltir. Boylece manuel denetim yukunu da hafifletir.",
          "Ozellikle olceklenme surecinde kalite standardini korumak isteyen ekipler icin bu katman dogrudan operasyonel dayaniklilik saglar.",
        ],
        bullets: [
          "Kritik sureclerde hata kaynaklarini azaltir.",
          "Guardrail ve kural katmani ile standardizasyon saglar.",
          "Manuel kalite kontrol yukunu hafifletir.",
          "Olceklenirken kalite seviyesini korur.",
        ],
      },
      en: {
        slug: "quality-and-error-reduction",
        title: "Quality and Error Reduction",
        description: "Reduce error rates with protective control layers.",
        seoTitle: "Quality and Error Reduction | Atylus Services",
        seoDescription:
          "Lower operational error rates with quality controls, guardrails, and explainable policy layers.",
        heroLabel: "Efficiency",
        detailTitle:
          "Standardize quality and reduce error rates with protection layers",
        detailIntro:
          "Quality and error reduction services control recurring mistakes inside the workflow and preserve a reliable output standard.",
        detailParagraphs: [
          "Atylus reduces error sources in sensitive operations with rule engines, guardrail structures, and exception handling logic. This also reduces the burden of manual review.",
          "For teams scaling operations without sacrificing reliability, this layer creates direct operational resilience.",
        ],
        bullets: [
          "Reduces error sources in critical workflows.",
          "Adds standardization through guardrails and policy logic.",
          "Lowers the burden of manual quality control.",
          "Preserves service quality during scale-up.",
        ],
      },
      de: {
        slug: "qualitaet-und-fehlerreduktion",
        title: "Qualitaet und Fehlerreduktion",
        description:
          "Reduzieren Sie Fehlerquoten mit Schutz- und Kontrollschichten.",
        seoTitle: "Qualitaet und Fehlerreduktion | Atylus Leistungen",
        seoDescription:
          "Senken Sie operative Fehlerquoten mit Qualitaetskontrollen, Guardrails und erklaerbaren Regelwerken.",
        heroLabel: "Effizienz",
        detailTitle:
          "Standardisieren Sie Qualitaet und senken Sie Fehlerquoten mit Schutzschichten",
        detailIntro:
          "Services fuer Qualitaet und Fehlerreduktion kontrollieren wiederkehrende Fehler im Ablauf und sichern einen verlaesslichen Ausgabestandard.",
        detailParagraphs: [
          "Atylus reduziert Fehlerquellen in sensiblen Prozessen durch Regelwerke, Guardrails und Ausnahmelogik. Gleichzeitig sinkt der Aufwand fuer manuelle Qualitaetspruefung.",
          "Gerade fuer Teams, die Wachstum mit Stabilitaet verbinden wollen, schafft diese Schicht direkte operative Belastbarkeit.",
        ],
        bullets: [
          "Reduziert Fehlerquellen in kritischen Prozessen.",
          "Sorgt fuer Standardisierung durch Guardrails und Regeln.",
          "Entlastet manuelle Qualitaetskontrollen.",
          "Erhaelt die Servicequalitaet beim Skalieren.",
        ],
      },
    },
  },
  {
    key: "is-akisi-orkestrasyonu",
    category: "mantik",
    copy: {
      tr: {
        slug: "is-akisi-orkestrasyonu",
        title: "Is Akisi Orkestrasyonu",
        description: "Olcekli olay tabanli orkestrasyon.",
        seoTitle: "Is Akisi Orkestrasyonu | Atylus Hizmetler",
        seoDescription:
          "Agent tabanli ve olay gudumlu is akislari ile kurumsal surecleri orkestre edin.",
        heroLabel: "Mantik",
        detailTitle:
          "Agent tabanli is akisi orkestrasyonu ile operasyonlari koordine edin",
        detailIntro:
          "Is akisi orkestrasyonu, farkli sistem ve ekipler arasindaki surec koordinasyonunu daha akilli ve izlenebilir hale getirir.",
        detailParagraphs: [
          "Atylus; tetikleyiciler, karar noktalar, bagimli adimlar ve insan onaylari arasindaki baglantilari olay tabanli bir akisa tasir. Bu sayede surecler parcali degil, senkron calisir.",
          "Ozellikle coklu sistem entegrasyonu olan organizasyonlarda orkestrasyon katmani hata, gecikme ve koordinasyon kaybini azaltir.",
        ],
        bullets: [
          "Sistemler arasi surec baglantisini senkronize eder.",
          "Olay tabanli akislari izlenebilir hale getirir.",
          "Insan onayi ve AI kararini ayni akista toplar.",
          "Koordinasyon kaybini ve gecikmeyi azaltir.",
        ],
      },
      en: {
        slug: "workflow-orchestration",
        title: "Workflow Orchestration",
        description: "Scalable event-driven orchestration.",
        seoTitle: "Workflow Orchestration | Atylus Services",
        seoDescription:
          "Orchestrate enterprise workflows with event-driven, agent-based process coordination.",
        heroLabel: "Logic",
        detailTitle:
          "Coordinate operations through agent-based workflow orchestration",
        detailIntro:
          "Workflow orchestration makes coordination between systems and teams more intelligent, traceable, and resilient.",
        detailParagraphs: [
          "Atylus moves triggers, decision points, dependent tasks, and human approvals into an event-driven flow. Processes become synchronized instead of fragmented.",
          "In organizations with multi-system integration, the orchestration layer reduces delay, coordination loss, and execution errors.",
        ],
        bullets: [
          "Synchronizes process links between systems.",
          "Makes event-driven flows traceable.",
          "Combines human approvals and AI decisions in one flow.",
          "Reduces coordination loss and delay.",
        ],
      },
      de: {
        slug: "workflow-orkestrierung",
        title: "Workflow-Orchestrierung",
        description: "Skalierbare ereignisgesteuerte Orchestrierung.",
        seoTitle: "Workflow-Orchestrierung | Atylus Leistungen",
        seoDescription:
          "Orchestrieren Sie Unternehmensablaeufe mit ereignisgesteuerter, agentenbasierter Prozesskoordination.",
        heroLabel: "Logik",
        detailTitle:
          "Koordinieren Sie den Betrieb mit agentenbasierter Workflow-Orchestrierung",
        detailIntro:
          "Workflow-Orchestrierung macht die Abstimmung zwischen Systemen und Teams intelligenter, nachvollziehbarer und robuster.",
        detailParagraphs: [
          "Atylus ueberfuehrt Trigger, Entscheidungspunkte, abhaengige Aufgaben und menschliche Freigaben in einen ereignisgesteuerten Fluss. Prozesse arbeiten dadurch synchron statt fragmentiert.",
          "Besonders in Organisationen mit mehreren integrierten Systemen reduziert die Orchestrierung Verzoegerung, Abstimmungsverlust und Ausfuehrungsfehler.",
        ],
        bullets: [
          "Synchronisiert Prozessverbindungen zwischen Systemen.",
          "Macht ereignisgesteuerte Fluesse nachvollziehbar.",
          "Fuehrt menschliche Freigaben und KI-Entscheidungen zusammen.",
          "Reduziert Abstimmungsverlust und Verzoegerungen.",
        ],
      },
    },
  },
  {
    key: "politika-ve-kural-motoru",
    category: "mantik",
    copy: {
      tr: {
        slug: "politika-ve-kural-motoru",
        title: "Politika ve Kural Motoru",
        description: "Aciklanabilir kurallarla kararlari kodlayin.",
        seoTitle: "Politika ve Kural Motoru | Atylus Hizmetler",
        seoDescription:
          "Aciklanabilir politika ve kural motorlari ile AI destekli kararlarinizi guvenli hale getirin.",
        heroLabel: "Mantik",
        detailTitle:
          "Kararlari aciklanabilir politika ve kural motorlari ile guvence altina alin",
        detailIntro:
          "Politika ve kural motorlari, otomasyonun serbest degil kontrollu calismasi icin guvenli bir karar cercevesi saglar.",
        detailParagraphs: [
          "Atylus; esik degerler, istisnalar, rol bazli yetkiler ve onay kosullarini sistematik hale getirerek karar mantigini kurum icin acik bir yapiya donusturur.",
          "Bu sayede AI destekli akislarda riskli veya hassas kararlar denetlenebilir, geri izlenebilir ve gerekirse insan kontrolune cekilebilir.",
        ],
        bullets: [
          "Karar mantigini kural ve politika seviyesinde seffaflastirir.",
          "Rol bazli kontrol ve onay mekanizmasi saglar.",
          "AI destekli kararlari denetlenebilir hale getirir.",
          "Regulasyon ve uyum ihtiyaclarina destek verir.",
        ],
      },
      en: {
        slug: "policy-and-rules-engine",
        title: "Policy and Rules Engine",
        description: "Encode decisions with explainable policy logic.",
        seoTitle: "Policy and Rules Engine | Atylus Services",
        seoDescription:
          "Secure AI-assisted decisions with explainable policy controls, approval logic, and rule execution layers.",
        heroLabel: "Logic",
        detailTitle:
          "Protect enterprise decisions with explainable policy and rules engines",
        detailIntro:
          "Policy and rules engines provide a safe decision framework so automation does not operate without control.",
        detailParagraphs: [
          "Atylus formalizes thresholds, exceptions, role-based permissions, and approval conditions into an enterprise-readable decision layer.",
          "This makes AI-assisted workflows auditable, reversible, and easy to escalate to human control when sensitivity rises.",
        ],
        bullets: [
          "Makes decision logic transparent at the rule level.",
          "Adds role-based approval and control mechanisms.",
          "Turns AI-assisted decisions into auditable flows.",
          "Supports compliance and governance requirements.",
        ],
      },
      de: {
        slug: "richtlinien-und-regelwerk",
        title: "Richtlinien- und Regelwerk",
        description:
          "Kodieren Sie Entscheidungen mit erklaerbarer Richtlinienlogik.",
        seoTitle: "Richtlinien- und Regelwerk | Atylus Leistungen",
        seoDescription:
          "Sichern Sie KI-gestuetzte Entscheidungen mit erklaerbaren Richtlinien, Freigabelogik und Regelwerken.",
        heroLabel: "Logik",
        detailTitle:
          "Sichern Sie Unternehmensentscheidungen mit erklaerbaren Richtlinien- und Regelwerken ab",
        detailIntro:
          "Richtlinien- und Regelwerke schaffen einen sicheren Entscheidungsrahmen, damit Automatisierung nicht unkontrolliert arbeitet.",
        detailParagraphs: [
          "Atylus formt Schwellenwerte, Ausnahmen, rollenbasierte Rechte und Freigabebedingungen zu einer fuer Unternehmen nachvollziehbaren Entscheidungslogik.",
          "Damit werden KI-gestuetzte Fluesse pruefbar, rueckverfolgbar und bei Bedarf leicht an menschliche Kontrolle uebergebbar.",
        ],
        bullets: [
          "Macht Entscheidungslogik auf Regelbasis transparent.",
          "Fuegt rollenbasierte Freigaben und Kontrolle hinzu.",
          "Macht KI-gestuetzte Entscheidungen auditierbar.",
          "Unterstuetzt Compliance- und Governance-Anforderungen.",
        ],
      },
    },
  },
  {
    key: "deneyleme-ve-optimizasyon",
    category: "mantik",
    copy: {
      tr: {
        slug: "deneyleme-ve-optimizasyon",
        title: "Deneyleme ve Optimizasyon",
        description: "Surekli test edin, ogrenin, optimize edin.",
        seoTitle: "Deneyleme ve Optimizasyon | Atylus Hizmetler",
        seoDescription:
          "Veri, politika ve AI kararlarinizi surekli deneyleyip optimize eden olculebilir sistemler kurun.",
        heroLabel: "Mantik",
        detailTitle:
          "Surekli deneyleme ve optimizasyon ile karar kalitesini zaman icinde yukselttin",
        detailIntro:
          "Deneyleme ve optimizasyon, sabit kurallar yerine ogrenebilen karar yapilarini isletmeye almanizi saglar.",
        detailParagraphs: [
          "Atylus farkli akislari, esik degerleri ve karar stratejilerini deney ortamina alarak hangi konfigurasyonun daha iyi is sonuclari urettigini olcer.",
          "Bu yaklasim AI destekli karar mekanizmalarinin zamanla daha isabetli, daha hizli ve daha verimli hale gelmesini saglar.",
        ],
        bullets: [
          "Deney tasarimini operasyonel kararlarla baglar.",
          "A/B ve coklu varyant testleri destekler.",
          "Karar stratejilerinin performansini olcer.",
          "Surekli ogrenme ile optimizasyon saglar.",
        ],
      },
      en: {
        slug: "experimentation-and-optimization",
        title: "Experimentation and Optimization",
        description: "Test continuously, learn continuously, optimize continuously.",
        seoTitle: "Experimentation and Optimization | Atylus Services",
        seoDescription:
          "Build measurable systems that continuously experiment on data, policy, and AI-assisted decisions.",
        heroLabel: "Logic",
        detailTitle:
          "Improve decision quality over time with continuous experimentation and optimization",
        detailIntro:
          "Experimentation and optimization let you run adaptive decision systems instead of relying on static rules forever.",
        detailParagraphs: [
          "Atylus places flow variants, threshold strategies, and decision logic into controlled experiments to measure which setup produces the strongest business outcome.",
          "This helps AI-assisted decision systems become more accurate, faster, and more efficient as they evolve.",
        ],
        bullets: [
          "Connects experiment design with operational decisions.",
          "Supports A/B and multivariate testing.",
          "Measures the performance of decision strategies.",
          "Drives optimization through continuous learning.",
        ],
      },
      de: {
        slug: "experimentieren-und-optimieren",
        title: "Experimentieren und Optimieren",
        description:
          "Testen, lernen und optimieren Sie kontinuierlich.",
        seoTitle: "Experimentieren und Optimieren | Atylus Leistungen",
        seoDescription:
          "Bauen Sie messbare Systeme, die Daten, Richtlinien und KI-gestuetzte Entscheidungen kontinuierlich optimieren.",
        heroLabel: "Logik",
        detailTitle:
          "Steigern Sie die Entscheidungsqualitaet mit kontinuierlichem Experimentieren und Optimieren",
        detailIntro:
          "Experimentieren und Optimieren ermoeglicht adaptive Entscheidungssysteme statt dauerhaft starrer Regeln.",
        detailParagraphs: [
          "Atylus testet Varianten von Abläufen, Schwellenwerten und Entscheidungsstrategien kontrolliert, um zu messen, welche Konfiguration die besten Geschaeftsergebnisse erzielt.",
          "So werden KI-gestuetzte Entscheidungsmechanismen mit der Zeit praeziser, schneller und effizienter.",
        ],
        bullets: [
          "Verbindet Experimentdesign mit operativen Entscheidungen.",
          "Unterstuetzt A/B- und multivariate Tests.",
          "Misst die Leistung von Entscheidungsstrategien.",
          "Ermoeglicht Optimierung durch kontinuierliches Lernen.",
        ],
      },
    },
  },
  {
    key: "chatbot-gelistirme",
    category: "operasyonel-fayda",
    copy: {
      tr: {
        slug: "chatbot-gelistirme",
        title: "Chatbot Gelistirme",
        description:
          "Destek, satis ve ic ekipler icin entegre chatbotlar.",
        seoTitle: "Chatbot Gelistirme | Atylus Hizmetler",
        seoDescription:
          "Kurumsal bilgi, destek ve satis sureclerine baglanan entegre chatbot sistemleri gelistirin.",
        heroLabel: "Operasyonel Fayda",
        detailTitle:
          "Kurumsal sureclere bagli chatbot sistemleri ile destek ve satis akislarini hizlandirin",
        detailIntro:
          "Chatbot gelistirme servisleri, destek ve satis sureclerini sadece otomatiklestirmez; kurumsal bilgiye bagli daha dogru yardim saglar.",
        detailParagraphs: [
          "Atylus chatbotlari bilgi tabanlari, CRM, destek kayitlari ve is akisi adimlari ile entegre ederek yalnizca cevap veren degil islem baslatan sistemlere donusturur.",
          "Bu sayede chatbotlar destek yukunu azaltir, satis akislarini hizlandirir ve ic ekiplerin bilgiye erisimini kolaylastirir.",
        ],
        bullets: [
          "CRM ve destek sistemleriyle entegre olur.",
          "Bilgi tabanina dayali daha dogru yanitlar uretir.",
          "Satis ve destek sureclerini hizlandirir.",
          "Ic ekipler icin operasyonel yardimci olarak calisir.",
        ],
      },
      en: {
        slug: "chatbot-development",
        title: "Chatbot Development",
        description:
          "Integrated chatbots for support, sales, and internal teams.",
        seoTitle: "Chatbot Development | Atylus Services",
        seoDescription:
          "Develop enterprise chatbots connected to support systems, CRM, and internal knowledge sources.",
        heroLabel: "Operational Value",
        detailTitle:
          "Accelerate support and sales flows with chatbots connected to enterprise processes",
        detailIntro:
          "Chatbot development services do more than automate conversations; they provide better assistance by connecting the bot to enterprise knowledge and workflows.",
        detailParagraphs: [
          "Atylus chatbots integrate with knowledge bases, CRM, support records, and workflow steps to become systems that can trigger action instead of only responding with static text.",
          "The result is lower support load, faster sales interaction, and easier access to internal knowledge for teams.",
        ],
        bullets: [
          "Integrates with CRM and support systems.",
          "Provides more accurate responses grounded in knowledge bases.",
          "Accelerates both sales and support workflows.",
          "Acts as an operational assistant for internal teams.",
        ],
      },
      de: {
        slug: "chatbot-entwicklung",
        title: "Chatbot-Entwicklung",
        description:
          "Integrierte Chatbots fuer Support, Vertrieb und interne Teams.",
        seoTitle: "Chatbot-Entwicklung | Atylus Leistungen",
        seoDescription:
          "Entwickeln Sie Unternehmens-Chatbots, die mit Support-Systemen, CRM und internem Wissen verbunden sind.",
        heroLabel: "Operativer Nutzen",
        detailTitle:
          "Beschleunigen Sie Support- und Vertriebsablaeufe mit Chatbots, die an Unternehmensprozesse angebunden sind",
        detailIntro:
          "Chatbot-Entwicklung automatisiert nicht nur Gespraeche, sondern verbindet den Bot mit Wissen und Prozessen, damit Hilfe praeziser wird.",
        detailParagraphs: [
          "Atylus verbindet Chatbots mit Wissensdatenbanken, CRM, Supportfaellen und Workflow-Schritten, damit daraus Systeme werden, die Aktionen ausloesen koennen und nicht nur antworten.",
          "So sinkt die Supportlast, Vertriebskontakte werden schneller und interne Teams kommen einfacher an relevantes Wissen.",
        ],
        bullets: [
          "Integriert sich in CRM- und Support-Systeme.",
          "Liefert praezisere Antworten auf Basis von Wissensquellen.",
          "Beschleunigt Vertriebs- und Supportablaeufe.",
          "Unterstuetzt interne Teams als operativer Assistent.",
        ],
      },
    },
  },
  {
    key: "mcp-server-gelistirme",
    category: "operasyonel-fayda",
    copy: {
      tr: {
        slug: "mcp-server-gelistirme",
        title: "MCP Server Gelistirme",
        description:
          "Yapay zeka modellerini sirket ici verilerinize ve araclariniza guvenle baglayin.",
        seoTitle: "MCP Server Gelistirme | Atylus Hizmetler",
        seoDescription:
          "Model Context Protocol tabanli guvenli arac katmanlari ile AI sistemlerini kurumsal veri ve uygulamalara baglayin.",
        heroLabel: "Operasyonel Fayda",
        detailTitle:
          "MCP server gelistirme ile AI sistemlerini kurumunuzun arac ve veri katmanina baglayin",
        detailIntro:
          "MCP server gelistirme servisleri, yapay zeka modellerinin kurum ici sistemlere kontrollu ve standart bir arayuzle baglanmasini saglar.",
        detailParagraphs: [
          "Atylus, Model Context Protocol yaklasimini kullanarak LLM sistemlerinin veri kaynaklari, kurumsal araclar ve dahili operasyon servisleri ile guvenli sekilde konusmasini saglar.",
          "Bu katman hem yeniden kullanilabilir bir AI tool layer olusturur hem de zero-trust entegrasyon mantigi ile riskli baglantilari sinirlandirir.",
        ],
        bullets: [
          "AI sistemleri icin standart arac katmani kurar.",
          "Kurumsal veri ve uygulamalara guvenli baglanti saglar.",
          "Zero-trust entegrasyon prensiplerini destekler.",
          "LLM tabanli akislari yeniden kullanilabilir hale getirir.",
        ],
      },
      en: {
        slug: "mcp-server-development",
        title: "MCP Server Development",
        description:
          "Connect AI models to your internal data and tools through secure interfaces.",
        seoTitle: "MCP Server Development | Atylus Services",
        seoDescription:
          "Use Model Context Protocol-based tool layers to connect AI systems with enterprise data and applications securely.",
        heroLabel: "Operational Value",
        detailTitle:
          "Connect AI systems to your enterprise tool and data layer with MCP server development",
        detailIntro:
          "MCP server development provides a controlled, standardized interface between AI models and enterprise systems.",
        detailParagraphs: [
          "Atylus uses the Model Context Protocol approach so LLM systems can communicate safely with data sources, enterprise tools, and internal operational services.",
          "The result is a reusable AI tool layer combined with zero-trust integration logic that limits risky connections and improves control.",
        ],
        bullets: [
          "Builds a standard tool layer for AI systems.",
          "Connects enterprise data and applications securely.",
          "Supports zero-trust integration principles.",
          "Makes LLM-powered workflows reusable across teams.",
        ],
      },
      de: {
        slug: "mcp-server-entwicklung",
        title: "MCP Server Entwicklung",
        description:
          "Verbinden Sie KI-Modelle ueber sichere Schnittstellen mit Ihren internen Daten und Werkzeugen.",
        seoTitle: "MCP Server Entwicklung | Atylus Leistungen",
        seoDescription:
          "Verbinden Sie KI-Systeme mit Unternehmensdaten und Anwendungen ueber sichere, MCP-basierte Werkzeugschnittstellen.",
        heroLabel: "Operativer Nutzen",
        detailTitle:
          "Verbinden Sie KI-Systeme mit Ihrer Unternehmens-Tool- und Datenschicht durch MCP Server Entwicklung",
        detailIntro:
          "MCP Server Entwicklung schafft eine kontrollierte und standardisierte Schnittstelle zwischen KI-Modellen und Unternehmenssystemen.",
        detailParagraphs: [
          "Atylus nutzt den Model Context Protocol Ansatz, damit LLM-Systeme sicher mit Datenquellen, Unternehmenswerkzeugen und internen Betriebsservices kommunizieren koennen.",
          "Das Ergebnis ist eine wiederverwendbare KI-Tool-Schicht kombiniert mit Zero-Trust-Integrationslogik, die riskante Verbindungen begrenzt und Kontrolle verbessert.",
        ],
        bullets: [
          "Baut eine standardisierte Tool-Schicht fuer KI-Systeme auf.",
          "Verbindet Unternehmensdaten und Anwendungen sicher.",
          "Unterstuetzt Zero-Trust-Integrationsprinzipien.",
          "Macht LLM-gestuetzte Workflows teamuebergreifend wiederverwendbar.",
        ],
      },
    },
  },
];

const categoryDefinitionByKey = new Map(
  categoryDefinitions.map((category) => [category.key, category] as const),
);

const localizedServiceCatalogByLocale = Object.fromEntries(
  SUPPORTED_LOCALES.map((locale) => {
    const categories = categoryDefinitions.map((categoryDefinition) => {
      const localizedCategory = categoryDefinition.copy[locale];

      const items = serviceDefinitions
        .filter((serviceDefinition) => serviceDefinition.category === categoryDefinition.key)
        .map((serviceDefinition) => {
          const localizedService = serviceDefinition.copy[locale];

          return {
            key: serviceDefinition.key,
            locale,
            slug: localizedService.slug,
            title: localizedService.title,
            description: localizedService.description,
            seoTitle: localizedService.seoTitle,
            seoDescription: localizedService.seoDescription,
            heroLabel: localizedService.heroLabel,
            detailTitle: localizedService.detailTitle,
            detailIntro: localizedService.detailIntro,
            detailParagraphs: localizedService.detailParagraphs,
            bullets: localizedService.bullets,
          } satisfies ServiceCatalogItem;
        });

      return {
        key: categoryDefinition.key,
        locale,
        shortCode: categoryDefinition.shortCode,
        title: localizedCategory.title,
        description: localizedCategory.description,
        items,
      } satisfies ServiceCatalogCategory;
    });

    return [locale, categories];
  }),
) as Record<SupportedLocale, ServiceCatalogCategory[]>;

const localizedServiceItemsByLocale = Object.fromEntries(
  SUPPORTED_LOCALES.map((locale) => [
    locale,
    localizedServiceCatalogByLocale[locale].flatMap((category) => category.items),
  ]),
) as Record<SupportedLocale, ServiceCatalogItem[]>;

const serviceKeyByAnySlug = new Map<string, ServiceItemKey>();
for (const locale of SUPPORTED_LOCALES) {
  for (const item of localizedServiceItemsByLocale[locale]) {
    serviceKeyByAnySlug.set(item.slug, item.key);
  }
}
for (const definition of serviceDefinitions) {
  serviceKeyByAnySlug.set(definition.key, definition.key);
}

export function getServiceCatalog(locale: SupportedLocale = DEFAULT_LOCALE) {
  return localizedServiceCatalogByLocale[locale];
}

export function getServiceCatalogItems(locale: SupportedLocale = DEFAULT_LOCALE) {
  return localizedServiceItemsByLocale[locale];
}

export function getServiceKeyBySlug(slugOrKey: string) {
  return serviceKeyByAnySlug.get(slugOrKey);
}

export function getServiceBySlug(
  localeOrSlug: SupportedLocale | string,
  maybeSlug?: string,
) {
  const locale = maybeSlug ? (localeOrSlug as SupportedLocale) : DEFAULT_LOCALE;
  const slugOrKey = maybeSlug ?? (localeOrSlug as string);
  const key = getServiceKeyBySlug(slugOrKey);

  if (!key) {
    return undefined;
  }

  return localizedServiceItemsByLocale[locale].find((item) => item.key === key);
}

export function getServiceByKey(
  locale: SupportedLocale,
  key: ServiceItemKey,
) {
  return localizedServiceItemsByLocale[locale].find((item) => item.key === key);
}

export function getServiceHref(
  localeOrSlug: SupportedLocale | string,
  maybeKeyOrSlug?: ServiceItemKey | string,
) {
  const locale = maybeKeyOrSlug
    ? (localeOrSlug as SupportedLocale)
    : DEFAULT_LOCALE;
  const keyOrSlug = maybeKeyOrSlug ?? (localeOrSlug as string);
  const service = getServiceBySlug(locale, keyOrSlug);

  if (!service) {
    return `/${SERVICE_SECTION_SEGMENTS[locale]}/`;
  }

  return `/${locale}/${SERVICE_SECTION_SEGMENTS[locale]}/${service.slug}/`;
}

export const serviceCatalog = getServiceCatalog();
export const serviceCatalogItems = getServiceCatalogItems();

export const serviceCatalogBySlug = new Map(
  serviceCatalogItems.map((item) => [item.slug, item] as const),
);

export const serviceCategoryByKey = categoryDefinitionByKey;
