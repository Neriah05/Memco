function IcoRoadmap() {
  const events = [
    {
      date: "Phase 1",
      title: "Meme Domination",
      description:
        "Launch and establish $MARs as the central reserve for meme wealth.Secure treasury assets (top meme coins).Engage community with MemeDAO governance.",
    },
    {
      date: "Phase 2",
      title: "Growth & Utility",
      description:
        "Roll out staking utility with yield farming.Introduce periodic buyback and burn mechanisms.Launch play-to-earn (P2E) game.",
    },
    {
      date: "Phase 3",
      title: "Expansion",
      description:
        "Acquire additional meme coins for treasury.Distribute airdrops to reward early adopters.Launch exclusive merch store.",
    },
    {
      date: "Phase 4",
      title: "Global Adoption",
      description:
        "Partner with crypto whales, exchanges, and even government agencies.Push $MARs as a universal reserve for memes.",
    },
  ];
  return (
    <div className="max-md:mb-60">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-wide mb-7 italic text-white">
          Our Roadmap
        </h1>

        <p className="text-lg text-[#7d8180] font-semibold mb-14 text-center">
          Our roadmap outlines the strategic steps we will take to ensure the
          <br />
          successful launch and growth of our Initial Coin Offering (ICO).{" "}
          <br /> It includes clear milestones that guide the development of our
          project, <br />
          from concept to implementation. Each stage is carefully planned to{" "}
          <br />
          maximize transparency, engagement, and long-term value for our <br />
          investors and users.
        </p>
      </div>
      return (
      <div className="bg-gray-900 text-white py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative border-l-4 border-green-500">
            {events.map((event, index) => (
              <div key={index} className="mb-10 ml-8">
                <div className="absolute -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-gray-900 font-bold">
                  {index + 1}
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-lg font-semibold mr-4 bg-green-500 px-3 py-1 rounded-lg">
                    {event.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    </div>
  );
}

export default IcoRoadmap;
