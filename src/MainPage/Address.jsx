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

  const steps = [
    {
      step: 1,
      title: "Get Some SOL",
      content:
        "If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.",
      image: "/1.png",
    },
    {
      step: 2,
      title: (
        <>
          "Go To{" "}
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#09BE8B] underline hover:text-[#FB4E4E]"
          >
            {" "}
            Raydium.io
          </a>
        </>
      ),
      content: (
        <>
          Now that you have some Solana, head to{" "}
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#09BE8B] underline hover:text-[#FB4E4E]"
          >
            Raydium.io
          </a>{" "}
          (or{" "}
          <a
            href="https://jup.ag"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#09BE8B] underline hover:text-[#FB4E4E]"
          >
            Jup.ag
          </a>{" "}
          if you prefer) to be able to swap your $SOL for some $PNUT.
        </>
      ),
      image: "/2.png",
    },
    {
      step: 3,
      title: "Buy $MARs",
      content:
        "Paste the token address (CA) into Raydium and switch SOL for $MARs. There’s zero taxes so you don’t need to worry.",
      image: "/3.png",
    },
  ];

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

      <div className="flex flex-col lg:flex-row justify-between mb-14 gap-6 max-sm:mb-9">
        <div className="flex justify-center">
          <img
            src="/cool.png"
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
            The world is shifting to digital reserves, and $MARs is leading the
            way. Just like nations and corporations are embracing Bitcoin, $MARs
            unites the meme coin universe into a single, powerful token. Backed
            by a treasury of top meme assets, $MARs is more than just
            currency—it’s a cultural revolution. <br /> <br /> Think of $MARs as
            the central bank of memes, where your holdings represent both
            financial strength and cultural influence. In a world where wealth
            is a meme, $MARs stands as the king—empowering communities,
            decentralizing value, and uniting the digital world. Join the
            movement.
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
          How to buy $MARs
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 p-0 md:p-6 text-white mb-20">
        {steps.map(({ step, title, content, image }, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 md:p-10 shadow-lg flex flex-col items-center text-center w-full md:w-80 relative"
          >
            <div className="relative mb-6 md:mb-8 bg-[#2d3748] max-h-24 w-44 md:w-60">
              <img
                src={image}
                alt=""
                className="w-36 md:w-48 h-30 -translate-y-16 md:-translate-y-20 mx-auto"
              />
              <div className="absolute top-0 right-0 transform translate-y-[-10%] translate-x-1 w-10 md:w-12 h-10 md:h-12 bg-[#09BE8B] rounded-full flex items-center justify-center text-base md:text-xl font-bold text-black z-10">
                {step}
              </div>
            </div>
            <h3 className="text-base md:text-xl font-bold mb-2 italic">
              {title}
            </h3>
            <p className="text-sm md:text-lg font-semibold text-gray-400">
              {content}
            </p>
          </div>
        ))}
      </div>

      <IcoRoadmap />
    </section>
  );
}

export default Address;
