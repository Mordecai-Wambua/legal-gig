import React, { useState } from "react";
import PropTypes from "prop-types";
import { faqData } from "./faq.js";

// Section title component (reused from Courses.jsx)
const SectionTitle = ({ children }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-gray-900">
      {children}
    </h2>
  </div>
);

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

// FAQ Item component with enhanced toggle functionality
const FAQItem = ({ question, answer, isOpen, toggleFAQ, index }) => (
  <div
    className={`
      bg-white rounded-xl shadow-md mb-6 overflow-hidden transition-all duration-300 
      ${isOpen ? "shadow-lg ring-2 ring-blue-100" : "hover:shadow-md"}
    `}
  >
    <button
      onClick={() => toggleFAQ(index)}
      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset flex justify-between items-center group"
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
    >
      <h3
        className={`text-lg font-semibold transition-colors duration-300 ${
          isOpen ? "text-blue-600" : "text-gray-800 group-hover:text-blue-600"
        }`}
      >
        <span className="inline-block mr-3 opacity-70">{index + 1}.</span>
        {question}
      </h3>
      <div
        className={`
        flex-shrink-0 ml-4 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300
        ${
          isOpen
            ? "bg-blue-600 text-white rotate-180"
            : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
        }
      `}
      >
        <svg
          className="w-5 h-5 transform transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </button>

    <div
      id={`faq-answer-${index}`}
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="p-6 pt-0">
        <div className="pl-6 border-l-2 border-blue-500 text-gray-600 leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  </div>
);

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleFAQ: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default function FAQs() {
  // Initialize first FAQ as open for better UX
  const [openFAQs, setOpenFAQs] = useState({ 0: true });

  // Toggle FAQ open/closed state
  const toggleFAQ = (index) => {
    setOpenFAQs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-blue-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          <span id="faq-heading">Frequently Asked Questions</span>
        </SectionTitle>

        <div className="mt-10">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={!!openFAQs[index]}
              toggleFAQ={toggleFAQ}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you choose the right course for your needs.
          </p>
          <a
            href="/contact"
            className="inline-block py-3 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
