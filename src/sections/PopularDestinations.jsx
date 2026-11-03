import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations";
import { Link } from "react-router-dom";

function PopularDestinations() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-slate-100 via-white to-slate-100 py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        {/* Top Heading */}
        <div className="text-center mb-14">

          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold text-sm mb-4">
            🌍 TOP DESTINATIONS
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Popular Destinations
          </h2>

          <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Handpicked destinations loved by hundreds of travelers across India.
            Beaches, mountains, heritage and adventure — everything in one place.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="hover:-translate-y-2 transition duration-300"
            >
              <DestinationCard destination={destination} />
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-14">

          <Link
            to="/destination"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
          >
            Explore All Destinations →
          </Link>

        </div>

      </div>

    </section>
  );
}

export default PopularDestinations;