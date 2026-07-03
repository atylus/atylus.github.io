import Link from "next/link";
import Image from "next/image";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { useLocale } from "@/compat/next/navigation";
import { getPageMetadata } from "@/data/pages";
import { getAboutPageMessages } from "./messages";

export const metadata = getPageMetadata("hakkimizda");

const serviceAreaMedia = [
  {
    icon: "/assets/images/service/ser2-1.svg",
    width: 73,
    height: 73,
  },
  {
    icon: "/assets/images/service/ser2-2.svg",
    width: 74,
    height: 73,
  },
  {
    icon: "/assets/images/service/ser2-3.svg",
    width: 69,
    height: 71,
  },
  {
    icon: "/assets/images/service/ser2-1.svg",
    width: 73,
    height: 73,
  },
  {
    icon: "/assets/images/service/ser2-2.svg",
    width: 74,
    height: 73,
  },
  {
    icon: "/assets/images/service/ser2-3.svg",
    width: 69,
    height: 71,
  },
];

export default function HakkimizdaPage() {
  const locale = useLocale();
  const messages = getAboutPageMessages(locale);

  return (
    <>
      <section className="page-banner11">
        <div className="shape" />
        <div className="shape3" />
        <div className="staff-text">{messages.bannerStaffText}</div>
        <div className="container">
          <div className="page-content">
            <h1 className="title">{messages.bannerTitle}</h1>
          </div>
        </div>
        <ul className="breadcrumbs">
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>/</li>
          <li>{messages.breadcrumbCurrent}</li>
        </ul>
      </section>

      <section className="about-us-sec9 about-us-sec9--hakkimizda ibt-section-gap">
        <div className="container">
          <div className="title-area">
            <div className="sec-title">
              <SubTitleWrapper>{messages.eyebrow}</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                {messages.mainTitle}
              </TitleSplitWrapper>
            </div>
            <div className="anim-img2">
              <Image
                alt={messages.decorAlt}
                src="/assets/images/event/cross1-1.png"
                width={143}
                height={49}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content9">
                <h4 className="title">{messages.companyLabel}</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-info9">
                {messages.introParagraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={index === messages.introParagraphs.length - 1 ? "mb-0" : undefined}
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
        <h2 style={{ display: "none" }}>{messages.marqueeAriaTitle}</h2>
        <div className="marquee">
          <div className="marquee-inner">
            <span>{messages.marqueeText}</span>
            <span>{messages.marqueeText}</span>
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
                    {messages.transformationTitle}
                  </h4>
                  <p>{messages.transformationLead}</p>
                  <p className="mb-0">{messages.transformationIntro}</p>
                  <ul className="about-dark-list">
                    {messages.transformationApproach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="ser-card22 v2">
                <Image
                  alt={messages.transformationImageAlt}
                  src="/assets/images/event/ser22-2.png"
                  width={1254}
                  height={599}
                />
                <div className="inner-content2 about-inner-content2">
                  <h4 className="profection">{messages.outcomesTitle}</h4>
                  <ul className="about-image-list">
                    {messages.transformationOutcomes.map((item) => (
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
                    {messages.outcomesLabel}
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
              <SubTitleWrapper>{messages.serviceAreasEyebrow}</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                {messages.serviceAreasTitle}
              </TitleSplitWrapper>
            </div>
          </div>
          <div className="row">
            {messages.serviceAreas.map((area, index) => (
              <div className="col-lg-4 col-md-6" key={area.title}>
                <div className="ser-block2">
                  <Image
                    alt={area.title}
                    src={serviceAreaMedia[index].icon}
                    width={serviceAreaMedia[index].width}
                    height={serviceAreaMedia[index].height}
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
                  alt={messages.architectureDecorAlt}
                  src="/assets/images/layers/layer3.png"
                  width={502}
                  height={694}
                />
              </div>
            </div>
            <div className="col-lg-10 col-md-10">
              <div className="neural-content4">
                <h2 className="gradient-title">
                  {messages.architectureTitle}
                </h2>
                <p className="about-neural-copy">
                  {messages.architectureLead}
                </p>
                <ul className="ser-list about-neural-list">
                  {messages.architecturePrinciples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="about-neural-copy">
                  {messages.architectureClosing}
                </p>
                <div className="about-concept-grid-static">
                  {messages.searchConcepts.map((item) => (
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
              <SubTitleWrapper>{messages.whyEyebrow}</SubTitleWrapper>
              <TitleSplitWrapper tag="h2" className="title animated-heading">
                {messages.whyTitle}
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
                <h4 className="title">{messages.differenceCardTitle}</h4>
                <ul className="ser-list">
                  {messages.differenceItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ser-block2">
                <Image
                  alt={messages.sectorsCardAlt}
                  src="/assets/images/service/ser2-2.svg"
                  width={74}
                  height={73}
                />
                <h4 className="title">{messages.sectorsCardTitle}</h4>
                <ul className="ser-list">
                  {messages.sectors.map((item) => (
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
                <h4 className="title">{messages.futureCardTitle}</h4>
                <ul className="ser-list">
                  {messages.futureItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
