function IcoRoadmap() {
  const events = [
    {
      date: "22 Sept 2024",
      title: "Listing to the major exchanges",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex at amet massa scelerisque scelerisque. Aliquam erat volutpat.",
    },
    {
      date: "27 Nov 2024",
      title: "Platform integration to marketplaces",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex at amet massa scelerisque scelerisque. Aliquam erat volutpat.",
    },
    {
      date: "19 Dec 2024",
      title: "Crypto Wallet version release",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex at amet massa scelerisque scelerisque. Aliquam erat volutpat.",
    },
    {
      date: "25 Jan 2024",
      title: "Platform earlier version development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex at amet massa scelerisque scelerisque. Aliquam erat volutpat.",
    },
  ];
  return (
    <div className="max-md:mb-60">
      <div className="text-center">
        <p
          className="text-lg font-extrabold tracking-wide mb-4 text-white"
          style={{ textShadow: "2px 2px 8px rgba(40, 204, 139)" }}
        >
          ICO Roadmap
        </p>

        <h1 className="text-4xl font-extrabold tracking-wide mb-7 italic text-white">
          Our ICO Roadmap
        </h1>

        <p className="text-lg text-[#7d8180] font-semibold mb-14">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at{" "}
          <br />
          dictum risus, non suscipit arcu. Quisque aliquam posuere
          <br /> tortor, sit amet convallis nunc scelerisque in.
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
