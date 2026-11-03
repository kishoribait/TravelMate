import { useParams, useNavigate } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";

import goa from "../assets/images/goa.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import manali from "../assets/images/manali.jpg";
import udaipur from "../assets/images/udaipur.jpg";
import andaman from "../assets/images/andaman.jpg";
import shimla from "../assets/images/shimla.jpg";
import kashmir from "../assets/images/kashmir.jpg";
import kerala from "../assets/images/kerala.jpg";
import rishikesh from "../assets/images/rishikesh.jpg";
import agra from "../assets/images/agra.jpg";
import ladakh from "../assets/images/ladakh.jpg";

export default function DestinationDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const destinations = {
    goa: {
      name: "Goa",
      image: goa,
      days: "4 Days",
      price: 12000,
      rating: 4.8,
      type: "🏖 Beach",
      description:
        "Goa is famous for its beautiful beaches, nightlife, water sports and Portuguese culture.",
    },

    manali: {
      name: "Manali",
      image: manali,
      days: "5 Days",
      price: 15000,
      rating: 4.9,
      type: "🏔 Mountain",
      description:
        "Manali offers breathtaking mountains, snowfall and adventure sports.",
    },

    jaipur: {
      name: "Jaipur",
      image: jaipur,
      days: "4 Days",
      price: 10000,
      rating: 4.7,
      type: "🏰 Heritage",
      description:
        "Explore magnificent forts, palaces and Rajasthan culture.",
    },

    udaipur: {
      name: "Udaipur",
      image: udaipur,
      days: "4 Days",
      price: 11000,
      rating: 4.8,
      type: "🏰 Heritage",
      description:
        "Known as the City of Lakes with beautiful palaces.",
    },

    andaman: {
      name: "Andaman",
      image: andaman,
      days: "5 Days",
      price: 18000,
      rating: 4.9,
      type: "🏖 Beach",
      description:
        "Crystal clear water and peaceful island vacation.",
    },

    shimla: {
      name: "Shimla",
      image: shimla,
      days: "4 Days",
      price: 13000,
      rating: 4.7,
      type: "🏔 Mountain",
      description:
        "Beautiful hill station with pleasant weather.",
    },

    kashmir: {
      name: "Kashmir",
      image: kashmir,
      days: "6 Days",
      price: 20000,
      rating: 5.0,
      type: "🏔 Mountain",
      description:
        "Paradise on Earth with valleys and lakes.",
    },

    kerala: {
      name: "Kerala",
      image: kerala,
      days: "5 Days",
      price: 16000,
      rating: 4.8,
      type: "🏖 Beach",
      description:
        "Backwaters, houseboats and greenery everywhere.",
    },

    rishikesh: {
      name: "Rishikesh",
      image: rishikesh,
      days: "3 Days",
      price: 9000,
      rating: 4.7,
      type: "🚣 Adventure",
      description:
        "Perfect destination for rafting and yoga lovers.",
    },

    agra: {
      name: "Agra",
      image: agra,
      days: "2 Days",
      price: 8000,
      rating: 4.6,
      type: "🏰 Heritage",
      description:
        "Home of the magnificent Taj Mahal.",
    },

    ladakh: {
      name: "Ladakh",
      image: ladakh,
      days: "7 Days",
      price: 25000,
      rating: 5.0,
      type: "🏔 Mountain",
      description:
        "Dream destination for bike riders and adventure lovers.",
    },
  };

  const destination = destinations[name?.toLowerCase()];

  if (!destination) {
    return (
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="text-6xl mb-5">😔</div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Destination Not Found
          </h1>

          <button
            onClick={() => navigate("/destination")}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            ← Back to Destinations
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">

        {/* Page Heading */}
        <div className="text-center text-white mb-8 sm:mb-10">
          <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide">
            🌍 EXPLORE DESTINATION
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Discover {destination.name}
          </h1>

          <p className="mt-3 text-white/85 text-base sm:text-lg">
            Explore, experience and plan your perfect journey.
          </p>
        </div>

        {/* Main Destination Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Destination Image */}
            <div className="relative h-[280px] sm:h-[400px] lg:h-[540px]">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

              {/* Destination Badge */}
              <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                <span className="bg-white/90 backdrop-blur-md text-gray-800 px-4 py-2 rounded-full font-semibold shadow-lg">
                  {destination.type}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

              {/* Heading */}
              <div className="mb-6">
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                  TravelMate Destination
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
                  {destination.name}
                </h2>

                <p className="text-gray-500 text-base sm:text-lg leading-7 mt-4">
                  {destination.description}
                </p>
              </div>

              {/* Destination Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Rating */}
                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
                  <p className="text-gray-500 text-sm font-medium">
                    ⭐ Rating
                  </p>

                  <p className="text-lg font-bold text-gray-800 mt-1">
                    {destination.rating} / 5
                  </p>
                </div>

                {/* Duration */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
                  <p className="text-gray-500 text-sm font-medium">
                    📅 Duration
                  </p>

                  <p className="text-lg font-bold text-gray-800 mt-1">
                    {destination.days}
                  </p>
                </div>

                {/* Price */}
                <div className="bg-green-50 border border-green-100 rounded-2xl p-4">
                  <p className="text-gray-500 text-sm font-medium">
                    💰 Starting Price
                  </p>

                  <p className="text-lg font-bold text-green-600 mt-1">
                    ₹{destination.price.toLocaleString()}
                  </p>
                </div>

                {/* Type */}
                <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                  <p className="text-gray-500 text-sm font-medium">
                    🧳 Trip Type
                  </p>

                  <p className="text-lg font-bold text-gray-800 mt-1">
                    {destination.type}
                  </p>
                </div>
              </div>

              {/* Price Highlight */}
              <div className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-5 text-white shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-orange-100 text-sm">
                      Estimated starting price
                    </p>

                    <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
                      ₹{destination.price.toLocaleString()}
                    </h3>
                  </div>

                  <div className="text-sm text-orange-100">
                    Per Person
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">

                <button
                  onClick={() => {
                    if (!user || user === "undefined") {
                      navigate("/login");
                      return;
                    }

                    navigate("/planner", {
                      state: {
                        destination: destination.name,
                      },
                    });
                  }}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
                >
                  ✈️ Book Now
                </button>

                <button
                  onClick={() => navigate("/destination")}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  ← Back
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}