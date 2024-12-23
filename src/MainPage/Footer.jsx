function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-16">
      <div className="container mx-auto px-8 flex flex-col items-center text-center space-y-8">
        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide mb-7 italic text-white"
          style={{ textShadow: "7px 7px 1px rgba(38,89,115)" }}
        >
          <span className="block text-white">$MARs Future</span> of Meme Wealth
        </h1>

        {/* Logo and Description */}
        <div className="max-w-2xl space-y-6">
          {/* <div className="flex justify-center items-center">
            <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-3xl font-bold">⭐</span>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            As digital reserves gain momentum, $MARs unites the meme coin
            ecosystem into one powerful token. Backed by top meme assets, $MARs
            is more than just currency—it’s the central bank of memes, where
            wealth meets culture. Join the movement.
          </p> */}
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 text-2xl text-gray-400">
            <a href="#" className="hover:text-white">
              <span className="">
                <img
                  className="w-8 h-8 hover:translate-y-1"
                  src="/Dexscanner.png"
                  alt=""
                />
              </span>
            </a>
            <a href="#" className="hover:text-white">
              <span className="">
                <img
                  className="w-8 h-8 hover:translate-y-1"
                  src="/x.png"
                  alt=""
                />
              </span>
            </a>
            <a href="#" className="hover:text-white">
              <span className="">
                <img
                  className="w-8 h-8 hover:translate-y-1"
                  src="/telegram1.png"
                  alt=""
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
