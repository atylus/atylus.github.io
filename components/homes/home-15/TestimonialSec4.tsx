"use client";
import Image from "next/image";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const testimonialText =
  "Halosaur duckbilled barracudina, goosefish gar pleco, chum salmon armoured catfish gudgeon sawfish whitefish orbicular batfish mummichog paradise fish! Pacific hake false trevally queen parrotfish black prickleback moss revally queen parrotfish black prickleback moss. Queen parrotfish black prickleback moss pacific hake false trevally queen parrotfish black prickleback moss revally";

const testimonials = [
  { text: testimonialText, name: "Adrian Mitchel", designation: "SolarInc" },
  { text: testimonialText, name: "Adrian Mitchel", designation: "SolarInc" },
  { text: testimonialText, name: "Adrian Mitchel", designation: "SolarInc" },
];

export default function TestimonialSec4() {
  const [activeDot, setActiveDot] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section className="testimonial-sec4 ibt-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="testi-img4">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/event/testi4-1.png"
                width={574}
                height={748}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="testi-content4">
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>testimonials</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">Awesome thouths about Artificial Intelligence
                </TitleSplitWrapper>
              </div>
              <Swiper
                className="testi-slider4"
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={200}
                onSwiper={setSwiperInstance}
                onSlideChangeTransitionEnd={(sw) =>
                  setActiveDot(sw.realIndex % 3)
                }
                onSlidesLengthChange={(sw) => setActiveDot(sw.realIndex % 3)}
              >
                {testimonials.map((t, i) => (
                  <SwiperSlide key={i}>
                    <p>{t.text}</p>
                    <div className="testi-auther4">
                      <h4 className="name">{t.name}</h4>
                      <span className="designation">{t.designation}</span>
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
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
