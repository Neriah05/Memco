function About() {
  const tokenData = [
    {
      image: "t1.png",
      label: "Token Name",
      value: "Crypto Token",
    },
    {
      image: "t2.png",
      label: "ICO Pre-sale starts in",
      value: "June 15-30, 2025",
    },
    {
      image: "t3.png",
      label: "Platform",
      value: "Ethereum based",
    },
    {
      image: "t4.png",
      label: "PreICO price",
      value: "1 ETH = 2,682 Token",
    },
    {
      image: "t5.png",
      label: "Price in ICO",
      value: "1 ETH = 2,182 Token",
    },
    {
      image: "t6.png",
      label: "Token Soft cap",
      value: "$18,000,000",
    },
    {
      image: "t7.png",
      label: "Token Hard Cap",
      value: "$78,000,000",
    },
    {
      image: "t8.png",
      label: "Total Supply",
      value: "250,000,000 Token",
    },
    {
      image: "t9.png",
      label: "Sold Tokens",
      value: "49,828,000 Token",
    },
    {
      image: "t8.png",
      label: "Remaining Tokens",
      value: "200,182,000 Token",
    },
  ];
  return (
    <section
      className=" relative py-28 bg-cover bg-center h-[1600px] md:h-[900px] flex flex-col lg:flex-row justify-center rounded-3xl"
      style={{ backgroundImage: 'url("/banner-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-[#004d00] opacity-60"></div>
      <div className="z-10">
        <div>
          <p
            className="text-lg font-extrabold tracking-wide mb-4 text-white text-center"
            style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
          >
            About $MARs
          </p>

          <h1
            className="text-4xl font-extrabold tracking-wide mb-7 italic text-white text-center"
            style={{ textShadow: "7px 7px 1px rgba(38,89,115)" }}
          >
            Meme Asset Reserve
          </h1>

          <p className="text-lg text-[#7d8180] font-semibold mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at{" "}
            <br />
            dictum risus, non suscipit arcu. Quisque aliquam posuere
            <br /> tortor, sit amet convallis nunc scelerisque in.
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
