const Subscribe = () => {
  const handleSubscribeClick = () => {
    window.scrollTo(0, 0); // Scroll to the top
    window.location.reload(); // Reload the page
  };

  return (
    <section className="p-2 md:p-28 bg-gradient-to-b from-[#020a08] to-[#041012]">
      <div
        className="bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
        style={{ backgroundImage: 'url("/subscribe.jpg")' }}
      >
        <div className="bg-black bg-opacity-60 p-8 md:p-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-6 text-white italic max-sm:text-3xl">
            Don't Miss $Mars News And Updates
          </h1>

          <p className="text-base sm:text-lg text-[#7d8180] font-medium mb-8 sm:mb-12">
            Stay updated with the latest news and exclusive content. <br />
            Subscribe to our newsletter now!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-96 py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ccffb5]"
            />
            <button
              onClick={handleSubscribeClick}
              className="bg-[#ccffb5] text-[#0d142f] text-xl font-semibold py-3 px-10 rounded-lg hover:bg-[#a5df8a] transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
