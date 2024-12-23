function About() {
  const tokenData = [
    {
      image: "t1.png",
      label: "Token Name",
      value: "Meme Asset Reserve",
    },
    {
      image: "t2.png",
      label: "Token Symbol",
      value: "$MARs",
    },
    {
      image: "t3.png",
      label: "Token Supply",
      value: "1,000,000,000",
    },
    {
      image: "t4.png",
      label: "LP",
      value: "Burned",
    },
    {
      image: "t5.png",
      label: "TAX",
      value: "0%",
    },
    {
      image: "t6.png",
      label: "Made On",
      value: "PUMP.FUN",
    },
  ];
  return (
    <section
      className=" relative py-28 bg-cover bg-center h-[1600px] md:h-[950px] flex flex-col lg:flex-row justify-center rounded-3xl"
      style={{ backgroundImage: 'url("/banner-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#004d00] opacity-60"></div>
      <div className="z-10">
        <div>
          <p
            className="text-lg font-extrabold tracking-wide mb-4 text-white text-center"
            style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
          >
            About Our Token
          </p>

          <h1
            className="text-4xl font-extrabold tracking-wide mb-7 italic text-white text-center"
            style={{ textShadow: "7px 7px 1px rgba(38,89,115)" }}
          >
            Our Token Info
          </h1>

          <p className="text-lg text-[#7d8180] font-semibold mb-4 text-center">
            $MARs Info The world is shifting to digital reserves, and $MARs is
            leading the way. <br />
            Just like nations and corporations are embracing Bitcoin, $MARs
            unites
            <br /> the meme coin universe into a single, powerful token. Backed
            by a <br />
            treasury of top meme assets, $MARs is more than just <br />
            currency—it’s a cultural revolution.
          </p>
        </div>

        <div className=" text-white py-2">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:gap-8 items-center">
            {/* Pie Chart Section */}
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <img src="dist.png" alt="Pie Chart" className="max-w-full" />
            </div>

            {/* Token Information Section */}
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tokenData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-12 h-12"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.label}</p>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
