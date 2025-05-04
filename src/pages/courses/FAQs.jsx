import React from "react";
import { faqData } from "./faq"; // Array of { question, answer }
import "./faq.css";

export default function FAQs() {
  return (
    <section className="faq" id="faq-section">
      <div className="container">
        <div className="section-title">
          <h2>FAQs</h2>
        </div>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
