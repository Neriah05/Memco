function WhitePaper() {
  return (
    <section className="bg-[#020a08] pt-20">
      <div
        style={{ backgroundImage: 'url("/lines.png")' }}
        className="bg-cover bg-center p-0 md:p-16 rounded-[50px]"
      >
        <div className="bg-[#1e2739] flex flex-col md:flex-row justify-between p4 md:p-14 max-md:pb-8 relative rounded-t-3xl">
          <img
            src="/whitewalk.png"
            className="h-[500px] object-contain mb-6 md:mb-0"
            alt="White Paper Illustration"
          />

          {/* <img
            src="/trade1.png"
            alt="Trade Icon"
            className="w-32 h-14 translate-y-20 -translate-x-16 mb-6 md:mb-0 max-md:hidden"
          /> */}

          <div className="pt-20 max-md:px-5">
            <p
              className="text-lg font-extrabold tracking-wide mb-4 text-white"
              style={{ textShadow: "2px 2px 8px rgba(40, 204, 139, 0.8)" }}
            >
              Our ICO Whitepaper
            </p>

            <h1
              className="text-4xl font-extrabold tracking-wide mb-7 italic text-white"
              style={{ textShadow: "7px 7px 1px rgba(38,89,115, 0.8)" }}
            >
              Download Our Whitepaper
            </h1>

            <p className="text-xl text-[#7d8180] font-semibold mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              qui iste asperiores harum maiores praesentium facere ullam
              blanditiis, odio dolorum. Officia quisquam eaque suscipit facere
              ducimus, sit quaerat. Numquam, corrupti?
            </p>

            <div className="relative pt-5">
              <button className="bg-[#ccffb5] text-[#0d142f] text-xl font-semibold py-3.5 px-8 rounded-lg hover:bg-[#a5df8a] transition">
                Download Now
              </button>

              <img
                className="max-md:hidden absolute top-2 md:top-14 left-44 md:left-80 w-48 md:w-72 h-48 md:h-72 object-contain pointer-events-none animate-spin-slow"
                src="/star.png"
                alt="Rotating Star"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhitePaper;
