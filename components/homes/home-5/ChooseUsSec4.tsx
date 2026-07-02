"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const chooseBlocks = [
  {
    num: "01",
    step: "[ step ]",
    title: "Neurons and Layers",
    text: "A neural network consists of interconnected nodes called neurons. Neurons are organized into layers.",
  },
  {
    num: "02",
    step: "[ step ]",
    title: "Activation Function",
    text: "Each neuron applies an activation function to the weighted sum of its inputs and produces an output",
  },
  {
    num: "03",
    step: "[ step ]",
    title: "Feedforward Process",
    text: "The inputs are multiplied by their respective weights, summed up, and passed through the activation function.",
  },
  {
    num: "04",
    step: "[ step ]",
    title: "Payment method",
    text: "And passed through the activation function. The inputs are multiplied by their respective weights, summed up",
  },
];
const slides = [...chooseBlocks, ...chooseBlocks];

export default function ChooseUsSec4() {
  return (
    <section className="choose-us-sec4 ibt-section-gap">
      <div className="container">
        <div className="sec-title">
          <SubTitleWrapper>how it works</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">
            Essential building blocks of artificial intelligence (AI) systems
          </TitleSplitWrapper>
        </div>
        <Swiper
          className="choose-slider4"
          modules={[Autoplay, Navigation]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            prevEl: ".slider-btn2 .swiper-button-prev",
            nextEl: ".slider-btn2 .swiper-button-next",
          }}
          breakpoints={{
            1440: { slidesPerView: 4, spaceBetween: 0 },
            1366: { slidesPerView: 4, spaceBetween: 0 },
            1201: { slidesPerView: 3, spaceBetween: 0 },
            1025: { slidesPerView: 2, spaceBetween: 0 },
            769: { slidesPerView: 2, spaceBetween: 0 },
            577: { slidesPerView: 1, spaceBetween: 0 },
            480: { slidesPerView: 1, spaceBetween: 0 },
            375: { slidesPerView: 1, spaceBetween: 0 },
          }}
        >
          {slides.map((block, i) => (
            <SwiperSlide key={i}>
              <div className="choose-block4">
                <SubTitleWrapper>{block.num}</SubTitleWrapper>
                <span className="step">{block.step}</span>
                <h4 className="title">{block.title}</h4>
                <p>{block.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
        <div className="slider-btn2">
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    </section>
  );
}
