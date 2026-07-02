import Link from "next/link";
import Image from "next/image";

import TitleSplitWrapper from "@/components/common/TitleSplitWrapper";
import SubTitleWrapper from "@/components/common/SubTitleWrapper";
import Accordion from "@/components/common/Accordion";

const faqItems = [
  {
    question: "AI Strategy Development",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions.",
  },
  {
    question: "Industry-Specific Solutions",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions.",
  },
  {
    question: "AI Integration and Deployment",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions.",
  },
];

export default function FaqSec3() {
  return (
    <section className="faq-sec3 ibt-section-gapBottom">
      <div className="faq-tabs">
        <div className="faq-content">
          <div className="sec-title white">
            <SubTitleWrapper>how we work</SubTitleWrapper>
            <TitleSplitWrapper tag="h2" className="title animated-heading">
              Introducing&nbsp;innovative ideas for&nbsp;business
            </TitleSplitWrapper>
          </div>
          <Accordion items={faqItems} accordionId="accordionExample2" />
          <Link href={`/service`} title="" className="ibt-btn ibt-btn-outline">
            <span>Explore More</span>
            <i className="icon-arrow-top" />
          </Link>
        </div>
        <div className="faq-img3">
          <Image
            alt="AI Agency & Technology HTML Template"
            src="/assets/images/event/faq3-1.png"
            width={664}
            height={1004}
          />
          <div className="feature-ai">
            <h4 className="title">IT Business Development</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
