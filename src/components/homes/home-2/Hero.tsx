"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import VideoPopupButton from "@/components/common/VideoPopupButton";
import { SlideAnimation } from "@/context/GsapSlideContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  {
    bgSrc: "/assets/images/bg/bg2.png",
    titleClass: "title animated-heading",
    title:
      "Transforming businesses with next-generation AI solutions and innovation",
  },
  {
    bgSrc: "/assets/images/bg/bg2-1.png",
    titleClass: "title",
    title:
      "Transforming businesses with next-generation AI solutions and innovation",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero-style2">
      <Swiper
        className="hero-slider2"
        modules={[EffectFade, Navigation]}
        loop
        effect="fade"
        speed={800}
        fadeEffect={{ crossFade: true }}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        onInit={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        onSlideChange={(swiper: SwiperType) =>
          setActiveIndex(swiper.activeIndex)
        }
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <SlideAnimation.Root active={activeIndex === i}>
              <div className="hero-content2">
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src={slide.bgSrc}
                  width={1883}
                  height={855}
                />
                <div className="hero-text2">
                  <div className="container">
                    <div className="hero-sec-info2 one-time">
                      {slide.titleClass.includes("animated-heading") ? (
                        <SlideAnimation.Title>
                          <TitleSplitWrapper
                            tag="h2"
                            className={slide.titleClass}
                          >
                            {slide.title}
                          </TitleSplitWrapper>
                        </SlideAnimation.Title>
                      ) : (
                        <SlideAnimation.Title>
                          <h2 className={slide.titleClass}>{slide.title}</h2>
                        </SlideAnimation.Title>
                      )}
                      <div className="hero-btn2">
                        <SlideAnimation.Paragraph>
                          <p>
                            Mummichog paradise fish! Triggerfish bango guppy
                            opah sunfish bluntnose knifefish upside-down catfish
                            cobia spookfish convict cichlid.
                          </p>
                        </SlideAnimation.Paragraph>
                        <SlideAnimation.Button>
                          <Link
                            href={`/index2`}
                            title=""
                            target="_blank"
                            rel="noopener noreferrer"
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
        ))}
        <div className="slider-btn">
          <div className="swiper-button-next hero-next" />
          <div className="swiper-button-prev hero-prev" />
        </div>
      </Swiper>
    </section>
  );
}
