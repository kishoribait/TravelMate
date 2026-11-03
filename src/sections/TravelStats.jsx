function TravelStats() {
  const stats = [
    {
      emoji: "🌍",
      number: "11+",
      title: "Destinations",
      description: "Explore beautiful places across India",
    },
    {
      emoji: "😊",
      number: "10k+",
      title: "Happy Travelers",
      description: "Travelers who trusted TravelMate",
    },
    {
      emoji: "✈️",
      number: "500+",
      title: "Trips Planned",
      description: "Journeys planned with ease",
    },
    {
      emoji: "⭐",
      number: "4.9",
      title: "Average Rating",
      description: "Loved by our travel community",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14 sm:mb-16">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
            💙 WHY TRAVELMATE
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Travel Made Simple
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-base sm:text-lg leading-relaxed">
            From choosing your destination to planning your trip,
            TravelMate makes every step simple and enjoyable.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-3xl p-7 sm:p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-orange-50 text-4xl group-hover:scale-110 transition duration-300">
                {item.emoji}
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                {item.number}
              </h2>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TravelStats;