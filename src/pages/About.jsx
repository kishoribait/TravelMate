import heroBg from "../assets/images/hero-bg.jpg";

export default function About() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center text-white mb-12 sm:mb-14">
          <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide">
            🌍 ABOUT TRAVELMATE
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            About TravelMate
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            TravelMate is your trusted travel companion. We help you
            discover amazing destinations, plan unforgettable trips,
            and create beautiful memories with your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          <div className="group bg-white rounded-3xl shadow-xl p-7 sm:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-orange-100 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-300">
              ✈️
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Easy Planning
            </h2>

            <p className="text-gray-500 leading-7">
              Plan your trip in minutes with our simple and
              user-friendly planner.
            </p>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl p-7 sm:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-blue-100 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-300">
              🏖️
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Top Destinations
            </h2>

            <p className="text-gray-500 leading-7">
              Explore India's most beautiful destinations with
              complete details and pricing.
            </p>
          </div>

          <div className="group bg-white rounded-3xl shadow-xl p-7 sm:p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-pink-100 flex items-center justify-center text-5xl group-hover:scale-110 transition duration-300">
              💙
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Trusted Service
            </h2>

            <p className="text-gray-500 leading-7">
              Thousands of happy travelers trust TravelMate for
              their vacations.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-7 sm:p-9 lg:p-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-100 flex items-center justify-center text-4xl">
              🎯
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-8">
                Our mission is to make travel planning easy, affordable,
                and enjoyable for everyone. Whether you're looking for
                beaches, mountains, heritage sites, or adventure trips,
                TravelMate helps you find the perfect destination with
                just a few clicks.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <p className="text-white/85 text-base sm:text-lg mb-5">
            Ready to discover your next adventure?
          </p>

          <a
            href="/destination"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            🌍 Explore Destinations
          </a>
        </div>
      </div>
    </section>
  );
}