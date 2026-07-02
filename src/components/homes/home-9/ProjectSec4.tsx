"use client";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";

const projects = [
  {
    title: "VoxAI: Empowering Communication with AI Voice Generation",
  },
  {
    title: "Speechify: Your Personal AI Voice Generator Companion",
  },
  {
    title: "Voicemate: Customizable AI Voice for Every Message",
  },
  {
    title: "SonicSynth: Innovative AI Voice Generation Solutions",
  },
];
const projectSlides = [...projects, ...projects];

export default function ProjectSec4() {
  return (
    <section className="project-sec4 ibt-section-gap">
      <div className="title-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-7">
              <div className="sec-title mb-0 white">
                <SubTitleWrapper>projects</SubTitleWrapper>
                <TitleSplitWrapper tag="h2" className="title animated-heading">AI brings voice to projects worldwide
                </TitleSplitWrapper>
                <div className="project-btn4">
                  <div className="slider-btn4">
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                  </div>
                  <Link
                    href={`/project`}
                    title=""
                    className="ibt-btn ibt-btn-outline"
                  >
                    <span>More projects</span>
                    <i className="icon-arrow-top" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-5 col-sm-8">
              <div className="user-count">
                <div className="counter-box5">
                  <Counter max={200} />
                  <span className="counter-text">+</span>
                </div>
                <span className="user">Completed projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <Swiper
          className="project-slider4"
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            1920: { slidesPerView: 4, spaceBetween: 20 },
            1440: { slidesPerView: 4, spaceBetween: 20 },
            1366: { slidesPerView: 4, spaceBetween: 20 },
            1201: { slidesPerView: 3, spaceBetween: 20 },
            769: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 20 },
            375: { slidesPerView: 1, spaceBetween: 20 },
          }}
        >
          {projectSlides.map((proj, i) => (
            <SwiperSlide key={i}>
              <div className="project-card4">
                <div className="project-img4">
                  <Image
                    alt="AI Agency & Technology HTML Template"
                    src="/assets/images/project/project4.png"
                    width={332}
                    height={68}
                  />
                </div>
                <div className="project-content4">
                  <h4 className="title">
                    <a href="#" title="">
                      {proj.title}
                    </a>
                  </h4>
                  <a href="#" title="" className="ibt-btn ibt-btn-outline">
                    <span>Listen voice</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
