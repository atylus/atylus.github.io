"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";


const testimonials = [
  { name: "Sam peters", designation: "Armani", text: 'Bluntnose martines knifefish walk ahead twice catfish cobia spookfish convict cichlid, "cat shark; saw shark trout cod." Pacific hake false trevally queen parrotfish black.' },
  { name: "Anna Mitchel", designation: "SolarInc", text: "Halosaur duckbilled barracudina, goosefish gar pleco, chum salmon armoured catfish gudgeon sawfish whitefish orbicular batfish mummichog paradise fish! Triggerfish bango guppy opah sunfish bluntnose." },
  { name: "Linda Dodge", designation: "Myltify", text: 'Triggerfish bluntnose knifefish upside-down catfish cobia spookfish convict cichlid, "cat shark; Saw shark trout cod.' },
  { name: "Glan Peterson", designation: "GainTrust", text: 'Saw shark trout cod, goosefish gar pleco, sawfish whitefish orbicular batfish mummichog paradise fish! cobia spookfish convict cichlid, "cat shark;' },
];
const testimonialSlides = [...testimonials, ...testimonials];

export default function TestimonialSec5() {
  return (
    <section className="testimonial-sec5">
      <div className="container">
        <div className="sec-title text-center white">
          <SubTitleWrapper>testimonials</SubTitleWrapper>
          <TitleSplitWrapper tag="h2" className="title animated-heading">Hear what our customers say about our AI solutions
          </TitleSplitWrapper>
        </div>
      </div>
      <div className="swiper-wrapper-parent">
        <Swiper
          className="testi-slide5"
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={4}
          spaceBetween={20}
        
          breakpoints={{
            1440: { slidesPerView: 4, spaceBetween: 20 },
            1366: { slidesPerView: 4, spaceBetween: 20 },
            1201: { slidesPerView: 3, spaceBetween: 20 },
            1025: { slidesPerView: 2, spaceBetween: 20 },
            769: { slidesPerView: 2, spaceBetween: 20 },
            577: { slidesPerView: 1, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            375: { slidesPerView: 1, spaceBetween: 20 },
          }}
        >
          {testimonialSlides.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="test-block5">
                <h4 className="name">{t.name}</h4>
                <span className="designation">{t.designation}</span>
                <ul className="rating">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <li key={j}>
                      <i className="fa fa-star" />
                    </li>
                  ))}
                </ul>
                <p>{t.text}</p>
                <div className="custom-cursor">D R A G</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
      
      </div>
    </section>
  );
}
