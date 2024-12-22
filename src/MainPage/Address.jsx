import { useState } from "react";
import IcoRoadmap from "./ShortcutAddress/IcoRoadmap";

function Address() {
  const [copied, setCopied] = useState(false);
  const smartContractAddress = "pending";

  const handleCopy = () => {
    navigator.clipboard.writeText(smartContractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <section className="bg-[#020a04] p-6 md:p-14 lg:p-28">
      <div className="bg-[#0d2615] border-2 border-white text-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row max-w-full md:max-w-[750px] gap-4 relative mb-14 md:mb-28">
        {/* Copy Icon */}
        <span
          onClick={handleCopy}
          className="text-[#09BE8B] hover:text-[#FB4E4E] transition-colors cursor-pointer"
        >
          <ion-icon name="copy"></ion-icon>
        </span>

        {/* Address Content */}
        <p className="text-sm md:text-base">
          <span className="font-bold">Smart Contract Address:</span>{" "}
          {smartContractAddress}
        </p>

        {/* Copied Notification */}
        {copied && <span className="text-[#09BE8B] ml-2">Copied!</span>}

        {/* Image */}
        <img
          src="/frog2.png"
          className="h-20 md:h-28 absolute -top-6 md:-top-9 right-2"
          alt=""
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 max-sm:mb-9">
        <div className="flex justify-center">
          <img
            src="/about.png"
            className="max-w-full max-h-[350px] md:max-h-[550px]"
            alt="about"
          />
        </div>
        <img
          src="/t3.png"
          alt=""
          className="w-[80px] md:w-[120px] max-h-[100px] md:max-h-[126px] -ml-0 lg:-ml-36 animate-moveUpSlow"
        />
        <div className="max-w-full lg:max-w-[540px]">
          <p
            className="text-base md:text-lg font-extrabold tracking-wide mb-4 text-white"
            style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
          >
            About $MARs
          </p>

          <h1
            className="text-2xl md:text-4xl font-extrabold tracking-wide mb-7 italic text-white"
            style={{ textShadow: "7px 7px 1px rgba(38,89,115)" }}
          >
            <span className="block text-white">Meme Asset </span> Reserve
          </h1>

          <p className="text-base md:text-2xl mb-8 text-[#7d8180]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit
            amet convallis nunc scelerisque in. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci
            voluptates, voluptatibus. Read More
          </p>

          <button className="bg-[#ccffb5] text-[#0d142f] text-sm md:text-xl font-semibold py-3 px-6 md:py-3.5 md:px-8 rounded-lg hover:bg-[#a5df8a] transition">
            Read More
          </button>
        </div>
      </div>

      <div className="text-center mb-16 md:mb-24">
        <p
          className="text-base md:text-lg font-extrabold tracking-wide mb-4 text-white"
          style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
        >
          How To Start
        </p>

        <h1
          className="text-2xl md:text-4xl font-extrabold tracking-wide mb-7 italic text-white"
          style={{ textShadow: "7px 7px 1px rgba(38,89,115)" }}
        >
          How To Buy Tokens?
        </h1>

        <p className="text-sm md:text-lg text-[#7d8180] font-semibold mb-10 md:mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at{" "}
          <br className="hidden md:block" /> dictum risus, non suscipit arcu.
          Quisque aliquam posuere <br className="hidden md:block" /> tortor, sit
          amet convallis nunc scelerisque in.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 p-0 md:p-6 text-white">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 md:p-10 shadow-lg flex flex-col items-center text-center w-full md:w-80 relative"
            >
              <div className="relative mb-6 md:mb-8 bg-[#2d3748] max-h-24 w-44 md:w-60">
                <img
                  src={`/${step}.png`}
                  alt=""
                  className="w-36 md:w-48 h-30 -translate-y-16 md:-translate-y-20 mx-auto"
                />
                <div className="absolute top-0 right-0 transform translate-y-[-10%] translate-x-1 w-10 md:w-12 h-10 md:h-12 bg-[#09BE8B] rounded-full flex items-center justify-center text-base md:text-xl font-bold text-black z-10">
                  {step}
                </div>
              </div>
              <h3 className="text-base md:text-xl font-bold mb-2 italic ">
                {index === 0
                  ? "Register New Account"
                  : index === 1
                  ? "Setup Account Info"
                  : "Start Buying & Selling"}
              </h3>
              <p className="text-sm md:text-lg font-semibold text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                neque quam, maximus ut accumsan ut, posuere sit.
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-[#03452c] to-[#1b6051] p-6 md:p-14 mx-4 md:mx-28 max-w-4xl rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center ml-auto mr-auto mb-12 md:mb-28">
        {/* Frog Image */}
        <img
          src="/hello.png"
          alt="Frog Illustration"
          className="absolute -left-10 md:-left-40 w-20 md:w-32 lg:w-40 h-auto hidden md:block"
        />

        {/* Token Sale Countdown */}
        <div className="bg-[#1e2738] rounded-lg shadow-lg text-center py-6 px-5 text-white flex-1 gap-3">
          <h2 className="font-bold text-lg mb-6 md:mb-8">TOKEN SALE ENDS IN</h2>
          <div className="grid grid-cols-4 gap-2 md:gap-0.5">
            {/* Countdown Units */}
            {["324", "19", "41", "00"].map((value, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-[#ffffff] bg-[#09BE8B] font-medium text-xl md:text-3xl p-3 md:p-5">
                  {value}
                </span>
                <span className="text-xs md:text-sm mt-1 md:mt-2">
                  {["days", "hours", "minutes", "seconds"][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sale Information */}
        <div className="text-white flex-1">
          {/* Progress Bar */}
          <div className="mb-4 md:mb-6">
            <div className="flex justify-between text-xs md:text-sm mb-2">
              <span>33m</span>
              <span>75m</span>
            </div>
            <div className="h-2 w-full bg-gray-600 rounded-full relative">
              <div
                className="bg-[#FB4E4E] h-2 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <p className="text-xs md:text-sm mt-2">Softcap in 103 days</p>
          </div>

          {/* Sale Details */}
          <p className="text-sm md:text-lg mb-3 md:mb-4 font-bold">
            Pre-Sale 1 ETH = 8,000 Token
          </p>

          {/* Payment Options */}
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <img src="/payment.png" alt="" />
          </div>

          {/* Buy Button */}
          <button className="bg-[#09BE8B] hover:bg-[#FB4E4E] border border-white transition-all text-white font-semibold text-xs md:text-sm py-2 px-6 md:py-2.5 md:px-8 rounded-md">
            BUY MORE TOKENS
          </button>
        </div>
      </div>

      <IcoRoadmap />
    </section>
  );
}

export default Address;
