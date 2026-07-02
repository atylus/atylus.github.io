"use client";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const services = [
  {
    img: "ser15-1.png",
    span: "Science",
    title: "Network Infrastructure Management",
  },
  {
    img: "ser15-2.png",
    span: "Laborant",
    title: "Enterprise Resource Planning Solutions",
  },
  {
    img: "ser15-3.png",
    span: "Experiments",
    title: "Clinical trial support and biomarker analysis",
  },
  {
    img: "ser15-4.png",
    span: "Data analyt",
    title: "Disaster Recovery & Backup Solutions",
  },
];
const serviceSlides = [...services, ...services];

export default function MainSec3() {
  return (
    <section className="main-sec3">
      {/* about-us-sec6 */}
      <div className="about-us-sec6 ibt-section-gap">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-4 col-lg-5">
              <div className="about-counter6">
                <div className="about-counter-content6">
                  <div className="counter-box15">
                    <Counter max={1500} extraClass="percent-counter2" />
                    <span className="counter-text">k+</span>
                  </div>
                  <span className="title">Research per year</span>
                </div>
                <div className="about-counter-content6">
                  <div className="counter-box15">
                    <Counter max={99.9} extraClass="percent-counter3" />
                    <span className="counter-text">%</span>
                  </div>
                  <span className="title">The quality of results</span>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="about-content6">
                <div className="sec-title mb-0">
                  <SubTitleWrapper>about us</SubTitleWrapper>
                  <TitleSplitWrapper
                    tag="h2"
                    className="title animated-heading"
                  >
                    AI consulting powered by Neuros for transformative business
                    solutions.
                  </TitleSplitWrapper>
                  <p>
                    Artificial Intelligence refers to the development of
                    computer systems that can perform tasks that would typically
                    require human intelligence. It involves the creation of
                    algorithms and models that enable machines to learn, reason,
                    perceive, and make decisions.
                  </p>
                  <p className="paragraph">
                    There are generally two types of AI: Narrow or Weak AI,
                    which is designed to perform specific tasks, and General or
                    Strong AI, which possesses human-level intelligence and can
                    handle a wide range of tasks.
                  </p>
                  <Link
                    href={`/index10`}
                    title=""
                    className="ibt-btn ibt-btn-outline"
                  >
                    <span>Explore more</span>
                    <i className="icon-arrow-top" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End about-us-sec6 */}
      {/* science-lab */}
      <div className="science-lab">
        <div className="container-fluid">
          <div className="science-content">
            <h2 className="title">
              <span>[</span>Innovating <span className="gradient">science</span>{" "}
              lab<span>]</span>
            </h2>
          </div>
        </div>
      </div>
      {/* End science-lab */}
      {/* service-sec15 */}
      <div className="service-sec15 ibt-section-gapTop">
        <div className="title-area">
          <div className="container">
            <div className="row end">
              <div className="col-lg-7">
                <div className="sec-title mb-0">
                  <SubTitleWrapper>services</SubTitleWrapper>
                  <TitleSplitWrapper
                    tag="h2"
                    className="title animated-heading"
                  >
                    Key benefits and competitive advantages of our service
                  </TitleSplitWrapper>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="sec-btn-box">
                  <div className="slider-btn5">
                    <div className="swiper-button-next team-next" />
                    <div className="swiper-button-prev team-prev" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <Swiper
            className="ser-slider15"
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".team-next",
              prevEl: ".team-prev",
            }}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={4.3}
            spaceBetween={20}
            breakpoints={{
              1920: { slidesPerView: 4.3, spaceBetween: 20 },
              1440: { slidesPerView: 4.3, spaceBetween: 20 },
              1366: { slidesPerView: 4, spaceBetween: 20 },
              1201: { slidesPerView: 3, spaceBetween: 20 },
              769: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              375: { slidesPerView: 1, spaceBetween: 20 },
            }}
          >
            {serviceSlides.map((ser, i) => (
              <SwiperSlide key={i}>
                <div className="ser-card15">
                  <div className="ser-img15">
                    <a href="#" title="">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src={`assets/images/service/${ser.img}`}
                        width={380}
                        height={388}
                      />
                      <span>{ser.span}</span>
                    </a>
                  </div>
                  <div className="ser-content15">
                    <h4 className="title">
                      <a href="#" title="">
                        {ser.title}
                      </a>
                    </h4>
                  </div>
                  <Link href={`/service-single`} className="ser-btn">
                    <i className="icon fontello icon-button-arrow" />
                    <i className="icon2 fontello icon-button-arrow" />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* End service-sec15 */}
    </section>
  );
}
