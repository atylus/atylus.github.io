"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const chooseBlocks = [
  {
    num: "01",
    title: "Neurons and Layers",
    text: "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    num: "02",
    title: "Activation Function",
    text: "Each neuron applies an activation function to the weighted sum of its inputs and produces an output",
  },
  {
    num: "03",
    title: "Feedforward Process",
    text: "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
];

const slides = [...chooseBlocks, ...chooseBlocks];

export default function ChooseUsSec2() {
  return (
    <section className="choose-us-sec2 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>how it works</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">Neural networks are a fundamental component of Artificial
            Intelligence (AI) systems
          </TitleSplitWrapper>
        </div>
        <Swiper
          className="choose-slider2"
          modules={[Autoplay, Navigation]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={3}
          spaceBetween={20}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            1440: { slidesPerView: 3, spaceBetween: 30 },
            1366: { slidesPerView: 3, spaceBetween: 30 },
            1201: { slidesPerView: 3, spaceBetween: 30 },
            1025: { slidesPerView: 2, spaceBetween: 30 },
            769: { slidesPerView: 2, spaceBetween: 30 },
            577: { slidesPerView: 1, spaceBetween: 30 },
            480: { slidesPerView: 1, spaceBetween: 30 },
            375: { slidesPerView: 1, spaceBetween: 30 },
          }}
        >
          {slides.map((block, i) => (
            <SwiperSlide key={i}>
              <div className="choose-block">
                <SubTitleWrapper>{block.num}</SubTitleWrapper>
                <h4 className="title">{block.title}</h4>
                <p>{block.text}</p>
              </div>
            </SwiperSlide>
          ))}<div className="slider-btn2">
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
        </Swiper>
        
      </div>
    </section>
  );
}
