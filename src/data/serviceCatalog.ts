import type {
  ServiceCatalogCategory,
  ServiceCatalogItem,
} from "@/types/services";

const detailBullets = [
  "Kurumsal veri akışını daha erken görünür hale getirir.",
  "Karar alma sürecini ölçülebilir sinyallerle destekler.",
  "Operasyonel kaliteyi korurken otomasyon kapasitesini artırır.",
  "Değişen iş hacmine göre ölçeklenebilir uygulama modeli sunar.",
] as const;

function createServiceItem(
  slug: string,
  title: string,
  description: string,
  heroLabel: string,
): ServiceCatalogItem {
  return {
    slug,
    title,
    description,
    seoTitle: `${title} | Atylus Hizmetler`,
    seoDescription: description,
    heroLabel,
    detailTitle: `${title} hizmeti ile veriyi, kararı ve operasyonu tek akışta yönetin`,
    detailIntro: description,
    detailParagraphs: [
      `${title}, kurum içindeki sinyalleri gerçek zamanlı olarak yorumlayıp ekiplerin doğru anda doğru aksiyonu almasını hedefler. Bu yapı; veri toplama, modelleme, kural tanımlama ve izleme katmanlarını tek bir servis akışı içinde birleştirir.`,
      `Atylus bu hizmeti uygularken mevcut sistemlerle uyumlu entegrasyon, açıklanabilir karar mantığı ve sürdürülebilir operasyon önceliklerini birlikte ele alır. Sonuç olarak ekipler daha az manuel yük, daha kısa dönüş süresi ve daha tutarlı çıktı kalitesi elde eder.`,
    ],
    bullets: [...detailBullets],
  };
}

export const serviceCatalog: ServiceCatalogCategory[] = [
  {
    key: "analitik",
    shortCode: "[A]",
    title: "Analitik",
    description: "Veriyi sinyale, sinyali yönetsel karara dönüştüren analitik katman.",
    items: [
      createServiceItem(
        "risk-ve-anomali-analizi",
        "Risk ve Anomali Analizi",
        "Anomaliler büyümeden önce tespit edin.",
        "Analitik",
      ),
      createServiceItem(
        "davranis-ve-segmentasyon",
        "Davranış ve Segmentasyon",
        "Niyeti kümelendirip kararları kişiselleştirin.",
        "Analitik",
      ),
      createServiceItem(
        "karar-panolari",
        "Karar Panoları",
        "Gerçek zamanlı yönetici netliği sağlayın.",
        "Analitik",
      ),
    ],
  },
  {
    key: "teknoloji",
    shortCode: "[T]",
    title: "Teknoloji",
    description: "Marka dili ve iş hedefleriyle uyumlu uygulama ve modelleme katmanı.",
    items: [
      createServiceItem(
        "uretken-yapay-zeka",
        "Üretken Yapay Zeka",
        "Marka diliyle uyumlu içerikler ve akıllı otomasyonlar üretin.",
        "Teknoloji",
      ),
    ],
  },
  {
    key: "verim",
    shortCode: "[Y]",
    title: "Verim",
    description: "Maliyet, süre ve hata oranlarını optimize eden süreç tasarımı.",
    items: [
      createServiceItem(
        "hizmet-basina-maliyet-azaltma",
        "Hizmet Başına Maliyet Azaltma",
        "Akıllı otomasyonla sipariş başı maliyeti düşürün.",
        "Verim",
      ),
      createServiceItem(
        "hiz-ve-dongu-suresi",
        "Hız ve Döngü Süresi",
        "Talep ile sonuç arasındaki süreyi kısaltın.",
        "Verim",
      ),
      createServiceItem(
        "kalite-ve-hata-azaltma",
        "Kalite ve Hata Azaltma",
        "Koruma katmanlarıyla hata oranlarını azaltın.",
        "Verim",
      ),
    ],
  },
  {
    key: "mantik",
    shortCode: "[L]",
    title: "Mantık",
    description: "Karar, kural ve deney akışını açıklanabilir sistemlere taşıyan katman.",
    items: [
      createServiceItem(
        "is-akisi-orkestrasyonu",
        "İş Akışı Orkestrasyonu",
        "Ölçekli olay tabanlı orkestrasyon.",
        "Mantık",
      ),
      createServiceItem(
        "politika-ve-kural-motoru",
        "Politika ve Kural Motoru",
        "Açıklanabilir kurallarla kararları kodlayın.",
        "Mantık",
      ),
      createServiceItem(
        "deneyleme-ve-optimizasyon",
        "Deneyleme ve Optimizasyon",
        "Sürekli test edin, öğrenin, optimize edin.",
        "Mantık",
      ),
    ],
  },
  {
    key: "operasyonel-fayda",
    shortCode: "[U]",
    title: "Operasyonel Fayda",
    description: "Kurumsal ekipleri doğrudan hızlandıran teslimatlar ve entegrasyonlar.",
    items: [
      createServiceItem(
        "chatbot-gelistirme",
        "Chatbot Geliştirme",
        "Destek, satış ve iç ekipler için entegre chatbotlar.",
        "Operasyonel Fayda",
      ),
      createServiceItem(
        "mcp-server-gelistirme",
        "MCP Server Geliştirme",
        "Yapay zeka modellerini şirket içi verilerinize ve araçlarınıza güvenle bağlayın.",
        "Operasyonel Fayda",
      ),
    ],
  },
];

export const serviceCatalogItems = serviceCatalog.flatMap(
  (category) => category.items,
);

export const serviceCatalogBySlug = new Map(
  serviceCatalogItems.map((item) => [item.slug, item] as const),
);

export function getServiceBySlug(slug: string) {
  return serviceCatalogBySlug.get(slug);
}

export function getServiceHref(slug: string) {
  return `/hizmetler/${slug}`;
}
