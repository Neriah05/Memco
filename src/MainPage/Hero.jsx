function Hero() {
  return (
    <div
      className="relative px-6 lg:px-28 bg-cover bg-center md:h-screen h-[950px] flex flex-col lg:flex-row items-center justify-center"
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
          Catch The Future and Hold More Memecoins
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
          As digital reserves gain momentum, $MARs unites the meme coin
          ecosystem into one powerful token. Backed by top meme assets, $MARs is
          more than just currency—it’s the central bank of memes, where wealth
          meets culture. Join the movement.
        </p>

        {/* Buttons */}
        <div className="flex sm:flex-row md:justify-center justify-start  lg:justify-start gap-4">
          <button className="bg-[#ccffb5] text-[#0d142f] text-sm sm:text-xl font-semibold py-2 px-6 rounded-lg hover:bg-[#a5df8a] transition">
            Whitepaper
          </button>
          <button className="bg-[#ccffb5] text-[#0d142f] text-sm sm:text-xl font-semibold py-2 px-6 rounded-lg hover:bg-[#a5df8a] transition">
            Buy Token
          </button>
        </div>
      </div>

      {/* Frog Image Section */}
      <div className="z-10 flex-1 flex justify-center items-center">
        <img
          src="/frog1.png"
          alt="Frog Illustration"
          className="w-full max-w-md h-auto animate-moveUpSlow"
        />
      </div>
    </div>
  );
}

export default Hero;
