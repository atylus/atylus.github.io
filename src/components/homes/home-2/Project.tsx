"use client";
import Link from "next/link";
import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const projectCards = [
  {
    variant: "",
    title: "DeepVision: Enhancing Image Recognition with Neural Networks",
  },
  {
    variant: "v2",
    title: "NLPGenius: Natural Language Processing Powered by Neural Networks",
  },
  {
    variant: "v3",
    title:
      "SmartTrader: Predictive Stock Market Analysis using Neural Networks",
  },
  {
    variant: "v4",
    title:
      "AutoDrive: Autonomous Vehicle Navigation with Advanced Neural Networks",
  },
];
const slides = [...projectCards, ...projectCards];

export default function Project() {
  const [activeDot, setActiveDot] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="project-sec ibt-section-gap">
      <div className="title-area">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-8 col-lg-12">
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>projects</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">
                  Exploring groundbreaking AI projects transforming industries
                  and driving innovation
                </TitleSplitWrapper>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8">
              <div className="user-count">
                <div className="counter-box5">
                  <Counter max={200} />
                  <span className="counter-text">+</span>
                </div>
                <span className="user">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <Swiper
          className="project-slider"
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4}
          spaceBetween={0}
          onSwiper={setSwiperInstance}
          onSlideChangeTransitionEnd={(sw) => setActiveDot(sw.realIndex % 3)}
          onSlidesLengthChange={(sw) => setActiveDot(sw.realIndex % 3)}
          breakpoints={{
            1920: { slidesPerView: 4, spaceBetween: 0 },
            1440: { slidesPerView: 4, spaceBetween: 0 },
            1366: { slidesPerView: 4, spaceBetween: 0 },
            1201: { slidesPerView: 3, spaceBetween: 0 },
            769: { slidesPerView: 2, spaceBetween: 0 },
            480: { slidesPerView: 1, spaceBetween: 0 },
            375: { slidesPerView: 1, spaceBetween: 0 },
          }}
        >
          {slides.map((card, i) => (
            <SwiperSlide key={i}>
              <div className={`project-card ${card.variant}`}>
                <div className="empty">
                  <span>Development</span>
                  <div className="projec-content">
                    <h4 className="title">{card.title}</h4>
                    <p>
                      The inputs are multiplied by their respective weights,
                      summed up.
                    </p>
                    <Link
                      href={`/project-single`}
                      title=""
                      className="ser-btn3"
                    >
                      Explore more
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="project-btn">
          <div className="custom-pagination">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`custom-dot ${activeDot === i ? "active" : ""}`}
                onClick={() => swiperInstance?.slideToLoop(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    swiperInstance?.slideToLoop(i);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <Link href={`/service`} title="" className="ibt-btn ibt-btn-outline">
            <span>Explore More</span>
            <i className="icon-arrow-top" />
          </Link>
        </div>
      </div>
    </section>
  );
}
