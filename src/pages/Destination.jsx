import { useState } from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Destination() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Beach",
    "Mountains",
    "Heritage",
    "Adventure",
    "Nature",
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      destination.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-fixed relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center text-white mb-10 sm:mb-12">

          <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide">
            🌍 EXPLORE INDIA
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Explore Destinations
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/90">
            Discover beautiful places, unforgettable experiences,
            and find the perfect destination for your next journey.
          </p>

        </div>

        <div className="max-w-3xl mx-auto mb-12">

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-2">

            <div className="flex items-center flex-1">

              <span className="text-xl ml-3 mr-2">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-2 py-2 sm:py-4 text-gray-800 text-base sm:text-lg bg-transparent outline-none"
              />

            </div>

            <button
              type="button"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 sm:py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Search
            </button>

          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-6">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-white/90 text-gray-700 hover:bg-white hover:text-orange-600 hover:-translate-y-0.5"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

        <div className="flex justify-between items-center mb-6 text-white">

          <p className="text-sm sm:text-base font-medium">
            {filteredDestinations.length}{" "}
            {filteredDestinations.length === 1
              ? "destination"
              : "destinations"}{" "}
            found
          </p>

        </div>

        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {filteredDestinations.map((item) => (
              <DestinationCard
                key={item.id}
                destination={item}
              />
            ))}

          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 sm:p-14 text-center shadow-2xl">

            <div className="text-5xl mb-4">
              😔
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              No Destination Found
            </h2>

            <p className="mt-3 text-gray-500">
              Try searching for another destination or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Reset Filters
            </button>

          </div>
        )}

      </div>
    </section>
  );
}