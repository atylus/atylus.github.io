"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "@/components/common/Counter";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Services1({ parentClass = "service-sec14" }) {
  const serviceSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = serviceSectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const serviceCards = gsap.utils.toArray<HTMLElement>([
        ".ser-card14-card1",
        ".ser-card14-card2",
        ".ser-card14-card3",
        ".ser-card14-card4",
        ".ser-card14-card5",
      ]);

      if (!serviceCards.length) return;

      serviceCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.1,
            ease: "power3.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "bottom 80%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className={parentClass} ref={serviceSectionRef}>
      <div className="container2">
        <div className="outer-box2">
          <div className="ser-info14">
            <div className="ser-card14-card1">
              <h4 className="title">
                AI-powered voice generator for transforming text into
                natural-sounding speech.
              </h4>
              <ul className="rating">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <span>20K+ users</span>
                </li>
              </ul>
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser14-1.png"
                width={398}
                height={68}
              />
            </div>
            <div className="ser-card14-card2">
              <h4 className="title">
                AI VoiceOver now supports an impressive 150+ languages, enabling
                seamless and natural-sounding speech synthesis across the globe
              </h4>
              <div className="ser-counter14">
                <div className="counter-content14">
                  <div className="counter-box14">
                    <Counter max={150} />
                    <span className="counter-text">+</span>
                  </div>
                  <span className="languages">Languages</span>
                </div>
                <Image
                  alt="AI Agency & Technology HTML Template"
                  src="/assets/images/service/flags.png"
                  width={406}
                  height={90}
                />
              </div>
            </div>
          </div>
          <div className="ser-card14-card3">
            <Image
              alt="AI Agency & Technology HTML Template"
              src="/assets/images/service/ser14-2.png"
              width={774}
              height={731}
            />
            <div className="ser-content14">
              <h4 className="title">
                Our advanced AI delivers high-quality, expressive voiceovers for
                videos, presentations, audiobooks, and more in multiple
                languages and accents
              </h4>
              <div className="counter-content14">
                <div className="counter-box14">
                  <Counter max={500} />
                  <span className="counter-text">+</span>
                </div>
                <span className="languages m-0">Complited projects</span>
              </div>
            </div>
          </div>
          <div className="ser-info14 v2">
            <div className="ser-card14-card4">
              <div className="ser-content14">
                <h4 className="title2">
                  Voices of success. Our clients share their creative journey
                  with Neuros
                </h4>
                <ul className="rating">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <p>
                  We prioritize our clients&apos; needs, adapting our services
                  to fit their schedules, budgets, and strategic goals.
                </p>
              </div>
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/users.png"
                width={1052}
                height={436}
              />
            </div>
            <div className="ser-card14-card5">
              <Image
                alt="AI Agency & Technology HTML Template"
                src="/assets/images/service/ser14-5.png"
                width={543}
                height={251}
              />
              <div className="ser-counter14 v2">
                <div className="counter-box2">
                  <Counter max={350} />
                  <span className="counter-text">k+</span>
                </div>
                <span className="review">Happy clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
