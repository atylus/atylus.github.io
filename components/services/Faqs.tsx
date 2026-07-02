"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "How does Machine Learning relate to Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "Is Artificial Intelligence replacing human jobs?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
  {
    question: "What are the different types of Artificial Intelligence?",
    answer:
      "Machine Learning is a subset of AI that focuses on developing algorithms and models that allow computers to learn from data and improve their performance over time. It plays a crucial role in enabling AI systems to recognize patterns, make predictions, and adapt to new information.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion4" id="accordionExample">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const isLast = index === faqItems.length - 1;
        const number = String(index + 1).padStart(2, "0");

        return (
          <div key={index} className={`accordion-item${isLast ? " mb-0" : ""}`}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                type="button"
                className={`accordion-button${isOpen ? "" : " collapsed"}`}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                aria-controls={`collapse-${index}`}
              >
                <span className="accordion-title">
                  <span className="accordion-number">{number}</span>{" "}
                  {item.question}
                </span>
                <i className="fontello icon-button-arrow-down" />
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
