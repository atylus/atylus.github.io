import Link from "next/link";
import Image from "next/image";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("hakkimizda");

const introParagraphs = [
  "Atylus, Türkiye’de ve İç Anadolu’da kurumsal işletmeler için yapay zeka ajanları (AI Agents), MCP (Model Context Protocol) mimarisi, karar destek sistemleri ve iş akışı otomasyonu geliştiren yeni nesil bir yapay zeka ajansıdır.",
  "Geleneksel yazılım şirketlerinden farklı olarak Atylus, sadece sistem kurmaz; veriyi karar veren, süreçleri yöneten ve operasyonları optimize eden otonom yapay zeka sistemlerine dönüştürür.",
  "Atylus’un vizyonu, şirketleri dijitalleştirmek değil; şirketleri otonom karar veren yapay zeka organizasyonlarına dönüştürmektir. Gelecek; yazılım kullanan şirketlerin değil, yapay zeka ile çalışan otonom işletmelerin olacaktır.",
];

const transformationApproach = [
  "MCP Server tabanlı AI entegrasyon katmanı",
  "LLM + Policy Engine (kural motoru) ile güvenli karar alma",
  "Gerçek zamanlı veri işleyen anomali tespit sistemleri",
  "Otonom iş akışı orkestrasyonu (Agentic Workflow Automation)",
];

const transformationOutcomes = [
  "%30 – %70 arasında operasyonel hız kazanır",
  "Döngü sürelerini (cycle time) dramatik şekilde azaltır",
  "Manuel işlem yükünü ortadan kaldırır",
  "Karar alma süreçlerini saniyelere indirir",
];

const serviceAreas = [
  {
    icon: "/assets/images/service/ser2-1.svg",
    width: 73,
    height: 73,
    title: "Yapay Zeka Ajan Geliştirme (AI Agents)",
    items: [
      "Otonom karar verebilen kurumsal ajanlar",
      "ERP / CRM / e-ticaret sistemleriyle entegre AI",
    ],
  },
  {
    icon: "/assets/images/service/ser2-2.svg",
    width: 74,
    height: 73,
    title: "MCP Server Mimarisi",
    items: [
      "LLM’lerin güvenli şekilde kurumsal sistemlere bağlanması",
      "API yerine standart AI tool layer oluşturma",
      "Zero-trust entegrasyon yapısı",
    ],
  },
  {
    icon: "/assets/images/service/ser2-3.svg",
    width: 69,
    height: 71,
    title: "Karar Destek Sistemleri",
    items: [
      "Yönetim panoları (AI Decision Dashboards)",
      "Gerçek zamanlı KPI ve anomali analizi",
      "Predictive analytics (tahminleme modelleri)",
    ],
  },
  {
    icon: "/assets/images/service/ser2-1.svg",
    width: 73,
    height: 73,
    title: "Risk ve Anomali Tespiti",
    items: [
      "Finansal işlem analizi",
      "Davranışsal segmentasyon",
      "Fraud ve sistem anomalisi tespiti",
    ],
  },
  {
    icon: "/assets/images/service/ser2-2.svg",
    width: 74,
    height: 73,
    title: "İş Akışı Otomasyonu",
    items: [
      "Order-to-cash süreçleri",
      "Tedarik zinciri otomasyonu",
      "CRM ve müşteri destek otomasyonu",
    ],
  },
  {
    icon: "/assets/images/service/ser2-3.svg",
    width: 69,
    height: 71,
    title: "Üretken Yapay Zeka Sistemleri",
    items: [
      "Kurumsal chatbot ve AI assistant çözümleri",
      "İçerik, satış ve operasyon otomasyonu",
    ],
  },
];

const architecturePrinciples = [
  "Context Layer (Bağlam Katmanı): Verinin anlamlandırılması",
  "Policy Engine: Güvenli karar mekanizması",
  "Execution Layer: MCP tabanlı işlem yürütme sistemi",
];

const whyAtylus = [
  "Sadece yazılım üretmez → sistem zekası üretir",
  "Sadece entegrasyon yapmaz → AI-native mimari kurar",
  "Sadece otomasyon sunmaz → otonom işletme modeli tasarlar",
];

const sectors = [
  "üretim",
  "lojistik",
  "e-ticaret",
  "finans",
  "kurumsal ERP sistemleri",
];

const searchConcepts = [
  "Yapay zeka ajansı Türkiye",
  "AI agent development company",
  "MCP server development",
  "kurumsal yapay zeka çözümleri",
  "enterprise AI automation",
  "LLM integration enterprise systems",
  "AI workflow automation",
  "decision intelligence systems",
  "anomaly detection AI systems",
];

const marqueeText =
  "/ Kurumsal yapay zeka, MCP mimarisi ve otonom sistemlerle yeni nesil dönüşüm.";

export default function HakkimizdaPage() {
  return (
    <>
      <section className="page-banner11">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">Atylus</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">/ Hakkımızda /</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>/</li>
          <li>Hakkımızda</li>
        </ul>
      </section>

      <section className="about-us-sec9 about-us-sec9--hakkimizda ibt-section-gap">
        <div className="container">
          <div className="title-area">
            <div className="sec-title">
              <SubTitleWrapper>hakkımızda</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Atylus Hakkında Kurumsal Yapay Zeka, MCP ve Otonom Sistemler
              </TitleSplitWrapper>
            </div>
            <div className="anim-img2">
              <Image
                alt="Atylus Hakkımızda sayfa dekoru"
                src="/assets/images/event/cross1-1.png"
                width={143}
                height={49}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content9">
                <h4 className="title">ATYLUS</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-info9">
                {introParagraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === introParagraphs.length - 1 ? "mb-0" : undefined
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-sec ibt-section-gapBottom">
        <h2 style={{ display: "none" }}>Kayan Bilgi Alanı</h2>
        <div className="marquee">
          <div className="marquee-inner">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>
      </section>

      <section className="service-sec22 about-service-sec22 ibt-section-gapBottom">
        <div className="container2">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="ser-card22">
                <div className="ser-content22">
                  <Image
                    alt="Atylus dekoratif katman"
                    className="cross"
                    src="/assets/images/layers/corss2.png"
                    width={274}
                    height={94}
                  />
                  <h4 className="title">
                    Kurumsal Yapay Zeka Dönüşümünün Yeni Standardı
                  </h4>
                  <p>
                    2026 itibarıyla işletmelerin en büyük problemi yalnızca
                    yazılım değil; <strong>entegrasyon karmaşası, yüksek
                    operasyonel maliyetler ve veri silolarıdır.</strong>
                  </p>
                  <p className="mb-0">
                    Atylus bu problemi şu mimari yaklaşım ile çözer:
                  </p>
                  <ul className="about-dark-list">
                    {transformationApproach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="ser-card22 v2">
                <Image
                  alt="Atylus dönüşüm alanı görseli"
                  src="/assets/images/event/ser22-2.png"
                  width={1254}
                  height={599}
                />
                <div className="inner-content2 about-inner-content2">
                  <h4 className="profection">Bu yapı sayesinde şirketler</h4>
                  <ul className="about-image-list">
                    {transformationOutcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="ser-counter22">
                  <div className="counter-box22">
                    <span className="counter-number">4</span>
                    <span className="counter-text">+</span>
                  </div>
                  <span className="title">
                    temel
                    <br />
                    kazanım
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-sec2 ibt-section-gapBottom about-service-sec2">
        <div className="container">
          <div className="title-area">
            <div className="sec-title">
              <SubTitleWrapper>hizmet alanları</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Atylus Ne Yapar?
              </TitleSplitWrapper>
            </div>
          </div>
          <div className="row">
            {serviceAreas.map((area) => (
              <div className="col-lg-4 col-md-6" key={area.title}>
                <div className="ser-block2">
                  <Image
                    alt={area.title}
                    src={area.icon}
                    width={area.width}
                    height={area.height}
                  />
                  <h4 className="title">{area.title}</h4>
                  <ul className="ser-list">
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="neural-playground4 ibt-section-gapBottom about-neural-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2">
              <div className="neural-img4">
                <Image
                  alt="Atylus mimari yaklaşım dekoru"
                  src="/assets/images/layers/layer3.png"
                  width={502}
                  height={694}
                />
              </div>
            </div>
            <div className="col-lg-10 col-md-10">
              <div className="neural-content4">
                <h2 className="gradient-title">
                  Sadece AI değil, <span>otonom sistem mimarisi</span> yaklaşımı
                </h2>
                <p className="about-neural-copy">
                  Atylus’un temel farkı, yapay zekayı bir araç değil, bir{" "}
                  <strong>kurumsal işletim katmanı</strong> olarak tasarlamasıdır.
                </p>
                <ul className="ser-list about-neural-list">
                  {architecturePrinciples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="about-neural-copy">
                  Bu yapı sayesinde AI sistemleri sadece cevap üretmez,{" "}
                  <strong>işlem yapar, optimize eder ve süreç yönetir.</strong>
                </p>
                <div className="about-concept-grid-static">
                  {searchConcepts.map((item) => (
                    <div className="about-concept-slide" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-sec2 ibt-section-gapBottom about-service-sec2">
        <div className="container">
          <div className="title-area">
            <div className="sec-title">
              <SubTitleWrapper>neden atylus</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                Neden Atylus?
              </TitleSplitWrapper>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="ser-block2">
                <Image
                  alt="Neden Atylus"
                  src="/assets/images/service/ser2-1.svg"
                  width={73}
                  height={73}
                />
                <h4 className="title">Atylus’un Farkı</h4>
                <ul className="ser-list">
                  {whyAtylus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ser-block2">
                <Image
                  alt="Sektörel odak"
                  src="/assets/images/service/ser2-2.svg"
                  width={74}
                  height={73}
                />
                <h4 className="title">Odaklandığı Sektörler</h4>
                <ul className="ser-list">
                  {sectors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ser-block2">
                <Image
                  alt="Gelecek vizyonu"
                  src="/assets/images/service/ser2-3.svg"
                  width={69}
                  height={71}
                />
                <h4 className="title">Gelecek Vizyonu</h4>
                <ul className="ser-list">
                  <li>
                    Şirketleri otonom karar veren yapay zeka organizasyonlarına
                    dönüştürmek
                  </li>
                  <li>
                    Yapay zeka ile çalışan otonom işletmeler için mühendislik
                    katmanını inşa etmek
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
