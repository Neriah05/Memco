function OurTeam() {
  return (
    <section className="bg-[#020a08] pt-20 px-6 md:px-28">
      <div className="text-center">
        <p
          className="text-lg font-extrabold tracking-wide mb-4 text-white"
          style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
        >
          Our Team
        </p>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-7 italic text-white">
          Awesome Team
        </h1>

        <p className="text-lg text-[#7d8180] font-semibold mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at{" "}
          <br />
          dictum risus, non suscipit arcu.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8 sm:gap-6 text-white max-md:items-center">
        <div className="bg-[#1e2738] p-6 rounded-t-full text-center max-md:w-[240px]">
          <img
            src="/1copy.png"
            alt="Joman Helal"
            className="rounded-full w-48 h-48 mb-2 border-4 border-green-400"
          />
          <p className="text-lg font-semibold">JOMAN HELAL</p>
          <p className="text-sm font-medium">EXECUTIVE OFFICER</p>
        </div>

        <div className="bg-[#1e2738] p-6 rounded-t-full text-center max-md:w-[240px]">
          <img
            src="/2copy.png"
            alt="Slans Alons"
            className="rounded-full w-48 h-48 mb-2 border-4 border-green-400"
          />
          <p className="text-lg font-semibold">SLANS ALONS</p>
          <p className="text-sm font-medium">BUSINESS DEVELOPMENT</p>
        </div>

        <div className="bg-[#1e2738] p-6 rounded-t-full text-center max-md:w-[240px]">
          <img
            src="/3copy.png"
            alt="Josha Michal"
            className="rounded-full w-48 h-48 mb-2 border-4 border-green-400"
          />
          <p className="text-lg font-semibold">JOSHA MICHAL</p>
          <p className="text-sm font-medium">UI/UX DESIGNER</p>
        </div>

        <div className="bg-[#1e2738] p-6 rounded-t-full text-center max-md:w-[240px]">
          <img
            src="/4.png"
            alt="Johan Wright"
            className="rounded-full w-48 h-48 mb-2 border-4 border-green-400"
          />
          <p className="text-lg font-semibold">JOHAN WRIGHT</p>
          <p className="text-sm font-medium">HEAD OF MARKETING</p>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
