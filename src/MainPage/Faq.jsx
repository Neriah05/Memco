import { useState } from "react";
function Faq() {
  const faqs = [
    {
      question: "What is $MARs?",
      answer:
        "$MARs is the ultimate reserve for meme wealth, designed to unite the meme coin ecosystem under a single token. It serves as the “central bank of memes,” backed by a treasury of top-performing meme assets, combining cultural clout with financial value.",
    },
    {
      question: "How is $MARs launched fairly?",
      answer:
        "$MARs is built on fair launch principles, with no private sales, no insider advantages, and a burnt liquidity pool. The contract is renounced, ensuring decentralization with no controlling party.",
    },
    {
      question: "What is the total supply of $MARs?",
      answer: "The total supply of $MARs is capped at 1 billion tokens. ",
    },
    {
      question: "How does the MemeDAO Treasury work?",
      answer:
        "The MemeDAO Treasury holds a diversified portfolio of top meme coins. Community members use governance features to vote on allocations for marketing, partnerships, and new meme coin acquisitions, ensuring a fully democratic ecosystem.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <section id="faq" className="bg-[#020a08] pt-20">
      <div className="text-center">
        <p
          className="text-lg font-extrabold tracking-wide mb-4 text-white"
          style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
        >
          $MARs FAQ
        </p>

        <h1 className="text-4xl font-extrabold tracking-wide mb-7 italic text-white">
          Frequently Asked Questions
        </h1>
      </div>

      <div className=" text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="flex justify-center">
            <img
              src="faq.jpg"
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
