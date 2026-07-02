export type ResourceItem = {
  label: string;
  description: string;
  href: string;
};

export type ResourceCategory = {
  key: string;
  shortCode: string;
  title: string;
  description: string;
  items: ResourceItem[];
};

export const resourceCatalog: ResourceCategory[] = [
  {
    key: "learn",
    shortCode: "[O]",
    title: "Öğren",
    description:
      "Ürün bilgisi, katalog yönetimi ve kullanım senaryoları için eğitim odaklı içerikler.",
    items: [
      {
        label: "Blog",
        description: "İpuçları, güncellemeler ve e-ticaret içgörüleri",
        href: "/blog",
      },
      {
        label: "Kılavuzlar",
        description: "Katalog ve ürün yönetimi üzerine derinlemesine kılavuzlar",
        href: "#",
      },
      {
        label: "Eğitimler",
        description:
          "WISEPIM'den en iyi şekilde yararlanmak için adım adım kılavuzlar",
        href: "#",
      },
      {
        label: "Dokümantasyon",
        description: 'Kılavuzlar ve "nasıl yapılır" referansları',
        href: "#",
      },
      {
        label: "Değişiklik Günlüğü",
        description: "Yenilikleri görün",
        href: "#",
      },
      {
        label: "Veri Üzerine Kurulu",
        description:
          "Yapay zekamızı güçlendiren 1.600'den fazla veri kaynağı",
        href: "#",
      },
    ],
  },
  {
    key: "knowledge",
    shortCode: "[E]",
    title: "E-Ticaret Bilgisi",
    description:
      "Karar vermeyi hızlandıran pazar, müşteri ve içerik üretimi içgörüleri.",
    items: [
      {
        label: "Sektörel İçgörüler",
        description: "En güncel e-ticaret verileri ve piyasa analizi",
        href: "#",
      },
      {
        label: "Müşteri Profilleri",
        description:
          "Çevrimiçi alışveriş yapanlarınızın ne istediğini anlayın",
        href: "#",
      },
      {
        label: "E-ticaret Sözlüğü",
        description:
          "350'den fazla e-ticaret ve PIM terimi, anlaşılır açıklamalarla",
        href: "#",
      },
      {
        label: "Prompt Şablonları",
        description:
          "Ürün içeriği için kullanıma hazır yapay zeka komut örnekleri",
        href: "#",
      },
      {
        label: "Çözümleri Karşılaştır",
        description: "E-ticaret araçlarını yan yana karşılaştırın",
        href: "#",
      },
      {
        label: "Tüm Bilgiler",
        description:
          "Kılavuzlar, içgörüler, araçlar ve daha fazlası tek bir merkezde",
        href: "#",
      },
    ],
  },
  {
    key: "tools",
    shortCode: "[A]",
    title: "Araçlar ve Hesaplayıcılar",
    description:
      "Veri kalitesi, performans ve katalog operasyonları için pratik yardımcı araçlar.",
    items: [
      {
        label: "Veri Kalitesi Hesaplayıcı",
        description:
          "Ürün verilerinizi yapıştırın ve anında kalite puanı alın",
        href: "#",
      },
      {
        label: "ROI - Yatırım Getirisi Hesaplayıcı",
        description:
          "Daha iyi ürün verilerinin size ne kadar kazandıracağını öğrenin",
        href: "#",
      },
      {
        label: "EAN/GTIN Doğrulayıcı",
        description:
          "Barkodları kontrol edin ve kontrol basamaklarını anında hesaplayın",
        href: "#",
      },
      {
        label: "SKU Oluşturucu",
        description:
          "Tüm kataloğunuz için tutarlı stok tutma birimi kodları oluşturun",
        href: "#",
      },
      {
        label: "Kanal Gereksinimleri",
        description:
          "Pazaryerleri arasındaki kategori ve özellik gereksinimlerini karşılaştırın",
        href: "#",
      },
      {
        label: "Tüm Araçları Görün",
        description:
          "Ücretsiz hesaplayıcılar, denetleyiciler ve oluşturucular",
        href: "#",
      },
    ],
  },
];

export const resourceCatalogItems: ResourceItem[] = resourceCatalog.flatMap(
  (category) => category.items,
);
