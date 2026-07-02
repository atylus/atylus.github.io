import Link from "next/link";
import Image from "next/image";
import FaqsPageAccordion from "@/components/others-pages/FaqsPage";
import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import { getPageMetadata } from "@/data/pages";

export const metadata = getPageMetadata("faq");

export default function Page() {
  return (
    <>
      <>
        {/* page-banner9 */}
        <section className="page-banner9">
          <div className="shape" />
          <div className="shape3" />
          <div className="container">
            <div className="page-content">
              <h1 className="title">/ FAQ /</h1>
            </div>
          </div>
          <ul className="breadcrumbs">
            <li>
              <Link href={`/`} title="">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>FAQ</li>
          </ul>
        </section>
        {/* End page-banner9 */}
        {/* faq-sec5 */}
        <section className="faq-sec5 ibt-section-gap">
          <button className="sidebar-toggle" />
          {/* Overlay */}
          <div className="sidebar-overlay" />
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <div className="side-bar2">
                  <button className="sidebar-close" />
                  <div className="ser-widget side-widget">
                    <Link href={`/service-single`} title="">
                      Network Integration
                    </Link>
                    <Link href={`/service-single`} title="">
                      Deep learning solutions
                    </Link>
                    <Link href={`/service-single`} title="">
                      Transfer learning
                    </Link>
                    <Link href={`/service-single`} title="">
                      Model evaluation
                    </Link>
                    <Link href={`/service-single`} title="">
                      Real-time prediction
                    </Link>
                  </div>
                  <div className="strategy-widget side-widget">
                    <Image
                      alt="AI Agency & Technology HTML Template"
                      src="/assets/images/event/shades.png"
                      width={304}
                      height={385}
                    />
                    <div className="strategy-content">
                      <h4 className="title">AI Strategy and Consulting</h4>
                      <p>
                        Provide expert guidance on developing an AI strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-8">
                <div className="faq-content5">
                  <h2 className="title">What would you like to know?</h2>
                  <div className="faq-block5">
                    <h4 className="title2">
                      <span>1.</span>How does Machine Learning relate to
                      Artificial Intelligence?
                    </h4>
                    <p>
                      Machine Learning is a subset of AI that focuses on
                      developing algorithms and models that allow computers to
                      learn from data and improve their performance over time.
                      It plays a crucial role in enabling AI systems to
                      recognize patterns, make predictions, and adapt to new
                      information.
                    </p>
                  </div>
                  <div className="faq-block5">
                    <h4 className="title2">
                      <span>2.</span>What are the different types of Artificial
                      Intelligence?
                    </h4>
                    <p>
                      There are generally two types of AI: Narrow or Weak AI,
                      which is designed to perform specific tasks, and General
                      or Strong AI, which possesses human-level intelligence and
                      can handle a wide range of tasks.
                    </p>
                  </div>
                  <div className="faq-block5 mb-0">
                    <h4 className="title2">
                      <span>3.</span>What are the applications of Artificial
                      Intelligence?
                    </h4>
                    <p>AI has applications in various fields, including:</p>
                    <ul className="faq-list5">
                      <li>
                        <i className="fas fa-circle" />
                        Natural Language Processing (NLP) for chatbots, language
                        translation, and sentiment analysis.
                      </li>
                      <li>
                        <i className="fas fa-circle" />
                        Computer Vision for image recognition, object detection,
                        and autonomous vehicles.
                      </li>
                      <li>
                        <i className="fas fa-circle" />
                        Machine Learning for predictive analytics, data mining,
                        and pattern recognition.
                      </li>
                      <li>
                        <i className="fas fa-circle" />
                        Robotics for automation in industries such as
                        manufacturing and healthcare.
                      </li>
                      <li>
                        <i className="fas fa-circle" />
                        AI-powered personal assistants, recommendation systems,
                        and fraud detection, among others.
                      </li>
                    </ul>
                  </div>
                  <div className="faq-content4 ibt-section-gapTop">
                    <div className="sec-title">
                      <TitleSplitWrapper
                        tag="h2"
                        className="title animated-heading mb-0"
                      >
                        Everything you need to know about
                      </TitleSplitWrapper>
                    </div>
                    <FaqsPageAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End faq-sec5 */}
      </>
    </>
  );
}
