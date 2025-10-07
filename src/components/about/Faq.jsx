import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question:
        "What should I consider before contacting an interior designer?",
      answer:
        "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.",
    },
    {
      question: "When should I hire an interior designer?",
      answer:
        "Right at The Start. It's recommended to hire an interior designer before or around the time you hire an architect, builder, or general contractor. Yes, You should hire an interior designer when you're planning a renovation, remodeling, or when you're looking to make a small space or unusual layout more functional.",
    },
    {
      question: "How long will it take?",
      answer:
        "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
      question: "How can I make a small space feel bigger?",
      answer:
        "This is the item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.",
    },
    {
      question: "How much will it cost?",
      answer:
        "This is the item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-8">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className=" border-b border-[#B8B9B8] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center text-[#B8B9B8] transition-colors duration-200"
            >
              <h3 className="text-[25px] font-normal capitalize text-[#B8B9B8] pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-[#D04713] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4">
                <p className="text-[#B8B9B8] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
