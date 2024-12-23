function Hero() {
  return (
    <div
      className="relative px-6 lg:px-28 bg-cover bg-center md:h-screen h-[1050px] flex flex-col lg:flex-row items-center justify-center"
      style={{ backgroundImage: 'url("/banner-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#004d00] opacity-60"></div>

      {/* Content Section */}
      <div className="mt-24 lg:mt-20 z-10 flex-1 container mx-auto px-4 text-left max-md:pt-14">
        {/* Top Text */}
        <p
          className="text-lg italic text-green-400 mb-4"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }}
        >
          Meme Asset Reserves
        </p>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-7 italic text-white"
          style={{ textShadow: "7px 7px 1px rgba(38,89,115)" }}
        >
          <span className="block text-white">$MARs Future</span> of Meme Wealth
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl text-white mb-8">
          As the world embraces digital reserves, a visionary tech cult takes
          over the meme ecosystem with $MARS: Meme Asset Reserves— a single
          token backed by a treasury of top meme coins, redefining what meme
          coin power means in the crypto space.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a href="https://t.me/memeassetreserves">
            <button className="flex gap-2 items-center bg-[#ccffb5] text-[#0d142f] text-sm sm:text-xl font-semibold py-2 px-6 rounded-lg hover:bg-[#a5df8a] transition">
              <span>
                <img src="/telegram.png" className="w-6 h-6" alt="" />
              </span>
              Telegram
            </button>
          </a>
          <a href="https://x.com/marscoinonsol?s=21">
            <button className="flex gap-2 items-center bg-[#ccffb5] text-[#0d142f] text-sm sm:text-xl font-semibold py-2 px-6 rounded-lg hover:bg-[#a5df8a] transition">
              <span>
                <img src="/x.png" className="w-6 h-6" alt="" />
              </span>
              Twitter
            </button>
          </a>
          <div className="w-full sm:w-auto">
            <a href="https://x.com/marscoinonsol?s=21">
              <button className="flex gap-2 items-center bg-[#ccffb5] text-[#0d142f] text-sm sm:text-xl font-semibold py-2 px-6 rounded-lg hover:bg-[#a5df8a] transition">
                <span>
                  <img src="/Dexscanner.png" className="w-6 h-6" alt="" />
                </span>
                Dexscanner
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Frog Image Section */}
      <div className="z-10 flex-1 flex justify-center items-center">
        <img
          src="/meme1.gif"
          alt="Frog Illustration"
          className="w-full max-w-md h-auto"
        />
      </div>
    </div>
  );
}

export default Hero;
