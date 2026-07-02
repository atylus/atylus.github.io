"use client";
import Link from "next/link";
import Image from "next/image";

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

export default function ServiceSec15() {
  return (
    <section className="service-sec15 v2 ibt-section-gap">
      <div className="title-area">
        <div className="container">
          <div className="row end">
            <div className="col-lg-7">
              <div className="sec-title mb-0">
                <SubTitleWrapper>services</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Key benefits and competitive advantages of our service
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="sec-btn-box">
                <div className="slider-btn5">
                  <div className="swiper-button-next service-next" />
                  <div className="swiper-button-prev service-prev" />
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
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4.3}
          navigation={{
            nextEl: ".service-next",
            prevEl: ".service-prev",
          }}
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
                    <Link href={`/service-single`} title="">
                      {ser.title}
                    </Link>
                  </h4>
                </div>
                <a href="#" className="ser-btn">
                  <i className="icon fontello icon-button-arrow" />
                  <i className="icon2 fontello icon-button-arrow" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
