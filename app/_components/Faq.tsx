"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What types of electrical services does SwitchFixx provide?",
    answer:
      "We offer a complete range of electrical services for residential, commercial, and industrial clients, including installations, repairs, maintenance, lighting solutions, switchboard upgrades, safety inspections, and emergency call-outs.",
  },
  {
    question: "Are your electricians licensed and qualified?",
    answer:
      "Yes, all of our electricians are fully licensed, certified, and experienced. Safety and quality are our top priorities, and we ensure all work meets New Zealand’s electrical standards.",
  },
  {
    question: "Are you available for emergency call-outs?",
    answer:
      "Absolutely. We understand that electrical issues can be urgent, so our team is available for emergency call-outs to provide prompt and reliable support when you need it most.",
  },
  {
    question: "Do you provide free quotes?",
    answer:
      "Yes, we’re happy to discuss your project and provide a free, no-obligation quote. Just give us a call, and we’ll help find the best solution for your needs.",
  },
  {
    question: "How do I schedule a service?",
    answer:
      "Scheduling a service is easy—contact us by phone, email, or through our website. We’ll arrange a convenient time and ensure you receive prompt, professional service.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <img
              src="https://pagedone.io/asset/uploads/1696230182.png"
              alt="FAQ section"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">
                  FAQs
                </h6>
                <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                  Looking for answers?
                </h2>
              </div>
              <div className="accordion-group">
                {faqItems.map((faq, index) => (
                  <div
                    key={index}
                    className={`accordion py-8 border-b border-solid border-gray-200 ${
                      openIndex === index ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                      aria-expanded={openIndex === index}
                    >
                      <h5>{faq.question}</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 transform ${
                          openIndex === index ? "rotate-180" : ""
                        } group-hover:text-indigo-600`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content overflow-hidden transition-max-height duration-500 ease-in-out ${
                        openIndex === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="text-base font-normal text-gray-600 mt-4 pr-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
