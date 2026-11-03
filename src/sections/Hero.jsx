import heroBg from "../assets/images/hero-bg.jpg";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

  const handlePlanTrip = () => {
    if (user) {
      navigate("/planner");
    } else {
      navigate("/login");
    }
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center text-white">

        {/* Small Top Label */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
          <span className="text-sm sm:text-base font-medium">
            ✨ Discover India With TravelMate
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-8xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Explore Incredible India 🌍
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
          Discover breathtaking destinations, unforgettable adventures,
          and plan your dream journey with TravelMate.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mb-14">

          <Link
            to="/destination"
            className="w-full sm:w-auto min-w-[190px] bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            🚀 Start Journey
          </Link>

          <button
            onClick={handlePlanTrip}
            className="w-full sm:w-auto min-w-[190px] bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            ✈️ Plan My Trip
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition duration-300">
            <h2 className="text-3xl md:text-4xl font-bold">
              11+
            </h2>

            <p className="mt-2 text-sm sm:text-base text-white/90">
              Destinations
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition duration-300">
            <h2 className="text-3xl md:text-4xl font-bold">
              500+
            </h2>

            <p className="mt-2 text-sm sm:text-base text-white/90">
              Happy Travelers
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition duration-300">
            <h2 className="text-3xl md:text-4xl font-bold">
              1000+
            </h2>

            <p className="mt-2 text-sm sm:text-base text-white/90">
              Trips Planned
            </p>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-2xl p-5 sm:p-6 hover:bg-white/20 transition duration-300">
            <h2 className="text-3xl md:text-4xl font-bold">
              24/7
            </h2>

            <p className="mt-2 text-sm sm:text-base text-white/90">
              Support
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;