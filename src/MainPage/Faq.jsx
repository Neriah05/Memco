import { useState } from "react";
function Faq() {
  const faqs = [
    {
      question: "What are the objectives of this Token?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsum sunt accusamus enim necessitatibus est fugiat, assumenda dolorem.",
    },
    {
      question: "What is the best features and services we deliver?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsum sunt accusamus enim necessitatibus est fugiat.",
    },
    {
      question: "Why this ICO important to me?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsum sunt accusamus enim necessitatibus est fugiat.",
    },
    {
      question: "How may I take part in and purchase this Token?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsum sunt accusamus enim necessitatibus est fugiat.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section className="bg-[#020a08] pt-20">
      <div className="text-center">
        <p
          className="text-lg font-extrabold tracking-wide mb-4 text-white"
          style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
        >
          Token FAQ
        </p>

        <h1 className="text-4xl font-extrabold tracking-wide mb-7 italic text-white">
          Frequently Questions
        </h1>

        <p className="text-lg text-[#7d8180] font-semibold mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at{" "}
          <br />
          dictum risus, non suscipit arcu.
        </p>
      </div>

      <div className=" text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex justify-center">
            <img
              src="faq.png"
              alt="Token Visualization"
              className="max-w-full"
            />
          </div>

          {/* Right Section */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="bg-teal-700 text-white text-lg font-semibold p-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className=" text-[#7e8281] text-lg font-semibold p-4 mt-2 rounded-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
