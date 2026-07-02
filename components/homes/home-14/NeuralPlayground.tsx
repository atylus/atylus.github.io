"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brands = [
  { src: "/assets/images/brand/brand1.png", width: 170, height: 53 },
  { src: "/assets/images/brand/brand2.png", width: 162, height: 60 },
  { src: "/assets/images/brand/brand3.png", width: 131, height: 72 },
  { src: "/assets/images/brand/brand4.png", width: 183, height: 44 },
];
const brandSlides = [...brands, ...brands];

export default function NeuralPlayground() {
  return (
    <section className="neural-playground6 ibt-section-gap">
      <div className="container2">
        <div className="row">
          <div className="col-lg-4">
            <div className="neural-img6">
              <Image
                alt="AI Agency & Technology HTML Template"
                className="one"
                src="/assets/images/layers/layer6.png"
                width={596}
                height={793}
              />
              <Image
                alt="AI Agency & Technology HTML Template"
                className="two"
                src="/assets/images/layers/layer6-1.png"
                width={563}
                height={830}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="neural-content">
              <h2 className="gradient-title">
                Experiment with a <span>Neural Network</span> directly in your
                browser. no worries, you can&apos;t break it—we promise
              </h2>
              <Swiper
                className="brand"
                modules={[Autoplay]}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={4}
                spaceBetween={20}
                breakpoints={{
                  1920: { slidesPerView: 4, spaceBetween: 20 },
                  1440: { slidesPerView: 4, spaceBetween: 20 },
                  1366: { slidesPerView: 4, spaceBetween: 20 },
                  1201: { slidesPerView: 4, spaceBetween: 20 },
                  769: { slidesPerView: 3, spaceBetween: 20 },
                  480: { slidesPerView: 2, spaceBetween: 20 },
                  375: { slidesPerView: 2, spaceBetween: 20 },
                }}
              >
                {brandSlides.map((brand, i) => (
                  <SwiperSlide key={i}>
                    <a href="#" title="">
                      <Image
                        alt="AI Agency & Technology HTML Template"
                        src={brand.src}
                        width={brand.width}
                        height={brand.height}
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
