"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import VideoPopupButton from "@/components/common/VideoPopupButton";
import { SlideAnimation } from "@/context/GsapSlideContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  {
    bgSrc: "/assets/images/bg/bg6-1.png",
    width: 1880,
    height: 785,
  },
  {
    bgSrc: "/assets/images/bg/bg6-2.png",
    width: 1826,
    height: 908,
  },
];

export default function HeroStyle2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero-style6">
      <Swiper
        className="hero-slider2"
        modules={[EffectFade, Navigation]}
        loop
        effect="fade"
        speed={800}
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onInit={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
        onSlideChange={(swiper: SwiperType) =>
          setActiveIndex(swiper.realIndex)
        }
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <SlideAnimation.Root active={activeIndex === i}>
              <div className="hero-content6">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src={slide.bgSrc}
                  width={slide.width}
                  height={slide.height}
                />
                <div className="hero-text6">
                  <div className="container2">
                    <div className="hero-sec-info3 one-time">
                      <SlideAnimation.Title>
                        <h2 className="title">
                          Discover future business with AI Atylus consulting
                          Services
                        </h2>
                      </SlideAnimation.Title>
                      <div className="hero-btn2">
                        <SlideAnimation.Paragraph>
                          <p>
                            Convert text to natural-sounding speech.
                            Customizable, multilingual, and high-quality audio
                            output.
                          </p>
                        </SlideAnimation.Paragraph>
                        <SlideAnimation.Button>
                          <Link
                            href={`/index6`}
                            target="_blank"
                            rel="noreferrer"
                            title=""
                            className="ibt-btn ibt-btn-secondary"
                          >
                            <span>Discover</span>
                            <i className="icon-arrow-top" />
                          </Link>
                        </SlideAnimation.Button>
                      </div>
                    </div>
                  </div>
                </div>
                <SlideAnimation.ExpBox>
                  <div className="exp-box">
                    <div className="video-img">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src="/assets/images/event/video.png"
                        width={190}
                        height={157}
                      />
                      <VideoPopupButton videoUrl="https://www.youtube.com/embed/aircAruvnKk">
                        <i className="fa fa-play" /> <span>Watch Video</span>
                      </VideoPopupButton>
                    </div>
                    <div className="counter-box2">
                      <Counter max={350} />
                      <span className="counter-text">+</span>
                    </div>
                    <p>Creative specialist in our team</p>
                  </div>
                </SlideAnimation.ExpBox>
              </div>
            </SlideAnimation.Root>
          </SwiperSlide>
        ))}{" "}
        <div className="slider-btn">
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </Swiper>
    </section>
  );
}
