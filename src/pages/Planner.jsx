import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";
import {FaMapMarkerAlt,FaCalendarAlt,FaUsers,FaPlaneDeparture,} from "react-icons/fa";

export default function Planner() {
  const location = useLocation();
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState(
    location.state?.destination || "Goa"
  );
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("");

  const tripTypes = {
    goa: "🏖 Beach",
    andaman: "🏖 Beach",
    kerala: "🏖 Beach",
    manali: "🏔 Mountain",
    shimla: "🏔 Mountain",
    kashmir: "🏔 Mountain",
    ladakh: "🏔 Mountain",
    jaipur: "🏰 Heritage",
    udaipur: "🏰 Heritage",
    agra: "🏰 Heritage",
    rishikesh: "🚣 Adventure",
  };

  const destinationCosts = {
    goa: 12000,
    jaipur: 10000,
    manali: 15000,
    udaipur: 11000,
    andaman: 18000,
    shimla: 13000,
    kashmir: 20000,
    kerala: 16000,
    rishikesh: 9000,
    agra: 8000,
    ladakh: 25000,
  };

  const destinationDays = {
    goa: "4 Days",
    jaipur: "4 Days",
    manali: "5 Days",
    udaipur: "4 Days",
    andaman: "5 Days",
    shimla: "4 Days",
    kashmir: "6 Days",
    kerala: "5 Days",
    rishikesh: "3 Days",
    agra: "2 Days",
    ladakh: "7 Days",
  };

  const minDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");

    if (!storedUser || storedUser === "undefined") {
      navigate("/login");
      return;
    }

    if (!from) {
      alert("Please enter departure city.");
      return;
    }

    if (!date) {
      alert("Please select travel date.");
      return;
    }

    if (!travelers) {
      alert("Please enter number of travelers.");
      return;
    }

    const currentDestination = destination.toLowerCase();

    const costPerPerson =
      destinationCosts[currentDestination] || 0;

    const totalCost = costPerPerson * Number(travelers);

    const tripDays =
      destinationDays[currentDestination] || "N/A";

    const tripData = {
      from,
      destination,
      date,
      travelers,
      tripType: tripTypes[currentDestination],
      tripDays,
      costPerPerson,
      totalCost,
    };

    navigate("/booking", {
      state: tripData,
    });
  };

  const currentDestination = destination.toLowerCase();
  const currentCost = destinationCosts[currentDestination] || 0;
  const currentDays = destinationDays[currentDestination] || "N/A";
  const currentTripType =
    tripTypes[currentDestination] || "🌍 Travel";

  return (
    <section
      className="min-h-screen bg-cover bg-center relative py-12 sm:py-16 px-4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="text-center text-white mb-8">

          <span className="inline-block bg-orange-500 px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
            ✈️ PLAN YOUR JOURNEY
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold">
            Plan Your Dream Trip
          </h1>

          <p className="mt-3 text-white/90 text-base sm:text-lg">
            Customize your journey and get an instant trip estimate
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="p-6 sm:p-8 border-b border-gray-100">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-2xl shadow-md">
                ✈️
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  TravelMate Planner
                </h2>

                <p className="text-gray-500 text-sm">
                  Build your perfect trip
                </p>
              </div>

            </div>

          </div>

          <div className="p-6 sm:p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Trip Details
            </h2>

            <p className="text-gray-500 mb-7">
              Enter your travel details below.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Departure City
                </label>

                <div className="relative">

                  <FaPlaneDeparture className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

                  <input
                    type="text"
                    placeholder="Enter departure city"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 pl-12 pr-4 py-4 rounded-xl outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  />

                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Destination
                </label>

                <div className="relative">

                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 z-10" />

                  <select
                    value={destination}
                    onChange={(e) =>
                      setDestination(e.target.value)
                    }
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 pl-12 pr-4 py-4 rounded-xl outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  >
                    <option>Goa</option>
                    <option>Manali</option>
                    <option>Jaipur</option>
                    <option>Udaipur</option>
                    <option>Andaman</option>
                    <option>Shimla</option>
                    <option>Kashmir</option>
                    <option>Kerala</option>
                    <option>Rishikesh</option>
                    <option>Agra</option>
                    <option>Ladakh</option>
                  </select>

                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Date
                </label>

                <div className="relative">

                  <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

                  <input
                    type="date"
                    min={minDate}
                    value={date}
                    onChange={(e) =>
                      setDate(e.target.value)
                    }
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 pl-12 pr-4 py-4 rounded-xl outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  />

                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Travelers
                </label>

                <div className="relative">

                  <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

                  <input
                    type="number"
                    min="1"
                    max="20"
                    placeholder="Enter number of travelers"
                    value={travelers}
                    onChange={(e) =>
                      setTravelers(e.target.value)
                    }
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 pl-12 pr-4 py-4 rounded-xl outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition"
                  />

                </div>
              </div>

              {destination && travelers && (
                <div className="mt-7 bg-orange-50 border border-orange-100 rounded-2xl p-5 sm:p-6">

                  <div className="flex items-center justify-between mb-5">

                    <div>
                      <p className="text-orange-500 text-sm font-bold uppercase tracking-wide">
                        Your Trip
                      </p>

                      <h2 className="text-2xl font-extrabold text-gray-800 mt-1">
                        Trip Preview ✨
                      </h2>
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                      🧳
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-gray-500 text-sm">
                        📍 Destination
                      </p>

                      <h3 className="text-lg font-bold text-gray-800 mt-1">
                        {destination}
                      </h3>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-gray-500 text-sm">
                        🎒 Trip Type
                      </p>

                      <h3 className="text-lg font-bold text-gray-800 mt-1">
                        {currentTripType}
                      </h3>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-gray-500 text-sm">
                        📅 Duration
                      </p>

                      <h3 className="text-lg font-bold text-gray-800 mt-1">
                        {currentDays}
                      </h3>
                    </div>

                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-gray-500 text-sm">
                        👤 Cost Per Person
                      </p>

                      <h3 className="text-lg font-bold text-green-600 mt-1">
                        ₹{currentCost.toLocaleString()}
                      </h3>
                    </div>

                  </div>

                  <div className="mt-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-5 text-center shadow-lg">

                    <p className="text-orange-100 text-sm">
                      Estimated Total Cost
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">
                      ₹
                      {(
                        currentCost *
                        Number(travelers || 0)
                      ).toLocaleString()}
                    </h2>

                    <p className="text-orange-100 text-sm mt-1">
                      For {travelers}{" "}
                      {Number(travelers) === 1
                        ? "traveler"
                        : "travelers"}
                    </p>

                  </div>

                </div>
              )}

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
              >
                🚀 Continue to Booking
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}







































// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import heroBg from "../assets/images/hero-bg.jpg";
// import {
//   FaMapMarkerAlt,
//   FaCalendarAlt,
//   FaUsers,
//   FaPlaneDeparture,
// } from "react-icons/fa";

// export default function Planner() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [from, setFrom] = useState("");

//   const [destination, setDestination] = useState(
//     location.state?.destination || "Goa"
//   );

//   const [date, setDate] = useState("");
//   const [travelers, setTravelers] = useState("");

//   const tripTypes = {
//     goa: "🏖 Beach",
//     andaman: "🏖 Beach",
//     kerala: "🏖 Beach",

//     manali: "🏔 Mountain",
//     shimla: "🏔 Mountain",
//     kashmir: "🏔 Mountain",
//     ladakh: "🏔 Mountain",

//     jaipur: "🏰 Heritage",
//     udaipur: "🏰 Heritage",
//     agra: "🏰 Heritage",

//     rishikesh: "🚣 Adventure",
//   };

//   const destinationCosts = {
//     goa: 12000,
//     jaipur: 10000,
//     manali: 15000,
//     udaipur: 11000,
//     andaman: 18000,
//     shimla: 13000,
//     kashmir: 20000,
//     kerala: 16000,
//     rishikesh: 9000,
//     agra: 8000,
//     ladakh: 25000,
//   };

//   const destinationDays = {
//     goa: "4 Days",
//     jaipur: "4 Days",
//     manali: "5 Days",
//     udaipur: "4 Days",
//     andaman: "5 Days",
//     shimla: "4 Days",
//     kashmir: "6 Days",
//     kerala: "5 Days",
//     rishikesh: "3 Days",
//     agra: "2 Days",
//     ladakh: "7 Days",
//   };

//   const minDate = new Date().toISOString().split("T")[0];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const storedUser = localStorage.getItem("user");

//     if (!storedUser || storedUser === "undefined") {
//       navigate("/login");
//       return;
//     }

//     if (!from) {
//       alert("Please enter departure city.");
//       return;
//     }

//     if (!date) {
//       alert("Please select travel date.");
//       return;
//     }

//     if (!travelers) {
//       alert("Please enter number of travelers.");
//       return;
//     }

//     const costPerPerson =
//       destinationCosts[destination.toLowerCase()] || 0;

//     const totalCost = costPerPerson * Number(travelers);

//     const tripDays =
//       destinationDays[destination.toLowerCase()] || "N/A";

//     const tripData = {
//       from,
//       destination,
//       date,
//       travelers,
//       tripType: tripTypes[destination.toLowerCase()],
//       tripDays,
//       costPerPerson,
//       totalCost,
//     };

//     navigate("/booking", {
//       state: tripData,
//     });
//   };

//   const currentDestination = destination.toLowerCase();
//   const currentCost = destinationCosts[currentDestination] || 0;
//   const currentDays = destinationDays[currentDestination] || "N/A";
//   const currentTripType = tripTypes[currentDestination] || "🌍 Travel";

//   return (
//     <section
//       className="min-h-screen bg-cover bg-center relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Page Heading */}
//         <div className="text-center text-white mb-10 sm:mb-12">
//           <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide">
//             ✈️ PLAN YOUR JOURNEY
//           </span>

//           <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
//             Plan Your Dream Trip
//           </h1>

//           <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
//             Customize your journey and get an instant trip estimate
//             before booking.
//           </p>
//         </div>

//         {/* Main Planner Card */}
//         <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-5">
//             {/* Left Info Section */}
//             <div className="lg:col-span-2 bg-slate-900/90 text-white p-7 sm:p-9 lg:p-10">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-2xl shadow-lg">
//                   ✈️
//                 </div>

//                 <div>
//                   <h2 className="text-2xl font-bold">
//                     TravelMate Planner
//                   </h2>

//                   <p className="text-gray-400 text-sm">
//                     Build your perfect trip
//                   </p>
//                 </div>
//               </div>

//               <p className="text-gray-300 leading-7">
//                 Choose your destination, travel date and number of
//                 travelers. TravelMate will calculate your estimated
//                 trip cost instantly.
//               </p>

//               <div className="mt-8 space-y-4">
//                 <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
//                   <span className="text-2xl">📍</span>
//                   <div>
//                     <p className="text-gray-400 text-sm">
//                       Destination
//                     </p>
//                     <p className="font-semibold">
//                       {destination}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
//                   <span className="text-2xl">🎒</span>
//                   <div>
//                     <p className="text-gray-400 text-sm">
//                       Trip Type
//                     </p>
//                     <p className="font-semibold">
//                       {currentTripType}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10">
//                   <span className="text-2xl">⏱️</span>
//                   <div>
//                     <p className="text-gray-400 text-sm">
//                       Duration
//                     </p>
//                     <p className="font-semibold">
//                       {currentDays}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 pt-6 border-t border-white/15">
//                 <p className="text-gray-400 text-sm">
//                   💡 Tip
//                 </p>

//                 <p className="text-gray-300 text-sm mt-2 leading-6">
//                   Select more travelers to see the total estimated
//                   trip cost.
//                 </p>
//               </div>
//             </div>

//             {/* Right Form Section */}
//             <div className="lg:col-span-3 bg-white/95 p-7 sm:p-9 lg:p-10">
//               <div className="mb-7">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
//                   Trip Details
//                 </h2>

//                 <p className="text-gray-500 mt-2">
//                   Enter your travel details below.
//                 </p>
//               </div>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >
//                 {/* Departure */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Departure City
//                   </label>

//                   <div className="relative">
//                     <FaPlaneDeparture className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

//                     <input
//                       type="text"
//                       placeholder="Enter departure city"
//                       value={from}
//                       onChange={(e) => setFrom(e.target.value)}
//                       className="w-full border border-gray-200 bg-gray-50 pl-12 pr-4 h-13 sm:h-14 rounded-xl text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
//                     />
//                   </div>
//                 </div>

//                 {/* Destination */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Destination
//                   </label>

//                   <div className="relative">
//                     <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500 z-10" />

//                     <select
//                       value={destination}
//                       onChange={(e) =>
//                         setDestination(e.target.value)
//                       }
//                       className="w-full border border-gray-200 bg-gray-50 pl-12 pr-4 py-4 rounded-xl text-gray-800 outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition appearance-none"
//                     >
//                       <option>Goa</option>
//                       <option>Manali</option>
//                       <option>Jaipur</option>
//                       <option>Udaipur</option>
//                       <option>Andaman</option>
//                       <option>Shimla</option>
//                       <option>Kashmir</option>
//                       <option>Kerala</option>
//                       <option>Rishikesh</option>
//                       <option>Agra</option>
//                       <option>Ladakh</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Date */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Travel Date
//                   </label>

//                   <div className="relative">
//                     <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

//                     <input
//                       type="date"
//                       min={minDate}
//                       value={date}
//                       onChange={(e) => setDate(e.target.value)}
//                       className="w-full border border-gray-200 bg-gray-50 pl-12 pr-4 h-13 sm:h-14 rounded-xl text-gray-800 outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
//                     />
//                   </div>
//                 </div>

//                 {/* Travelers */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Number of Travelers
//                   </label>

//                   <div className="relative">
//                     <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />

//                     <input
//                       type="number"
//                       min="1"
//                       max="20"
//                       placeholder="Enter number of travelers"
//                       value={travelers}
//                       onChange={(e) =>
//                         setTravelers(e.target.value)
//                       }
//                       className="w-full border border-gray-200 bg-gray-50 pl-12 pr-4 h-13 sm:h-14 rounded-xl text-gray-800 placeholder-gray-400 outline-none focus:bg-white focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
//                     />
//                   </div>
//                 </div>

//                 {/* Live Trip Preview */}
//                 {destination && travelers && (
//                   <div className="mt-7 bg-gradient-to-br from-orange-50 via-white to-yellow-50 border border-orange-200 rounded-2xl p-5 sm:p-6 shadow-md">
//                     <div className="flex items-center justify-between mb-5">
//                       <div>
//                         <p className="text-orange-500 text-sm font-semibold uppercase tracking-wide">
//                           Your Trip
//                         </p>

//                         <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-1">
//                           Trip Preview ✨
//                         </h2>
//                       </div>

//                       <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
//                         🧳
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                       <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//                         <p className="text-gray-500 text-sm">
//                           📍 Destination
//                         </p>

//                         <h3 className="text-lg font-bold text-gray-800 mt-1 break-words">
//                           {destination}
//                         </h3>
//                       </div>

//                       <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//                         <p className="text-gray-500 text-sm">
//                           🎒 Trip Type
//                         </p>

//                         <h3 className="text-lg font-bold text-gray-800 mt-1 break-words">
//                           {currentTripType}
//                         </h3>
//                       </div>

//                       <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//                         <p className="text-gray-500 text-sm">
//                           📅 Duration
//                         </p>

//                         <h3 className="text-lg font-bold text-gray-800 mt-1">
//                           {currentDays}
//                         </h3>
//                       </div>

//                       <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//                         <p className="text-gray-500 text-sm">
//                           👤 Cost Per Person
//                         </p>

//                         <h3 className="text-lg font-bold text-green-600 mt-1">
//                           ₹{currentCost.toLocaleString()}
//                         </h3>
//                       </div>
//                     </div>

//                     {/* Total Cost */}
//                     <div className="mt-5 bg-orange-500 text-white rounded-2xl p-5 text-center shadow-lg">
//                       <p className="text-sm sm:text-base text-orange-100">
//                         Estimated Total Cost
//                       </p>

//                       <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">
//                         ₹
//                         {(
//                           currentCost * Number(travelers || 0)
//                         ).toLocaleString()}
//                       </h2>

//                       <p className="text-orange-100 text-sm mt-1">
//                         For {travelers}{" "}
//                         {Number(travelers) === 1
//                           ? "traveler"
//                           : "travelers"}
//                       </p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 sm:py-4 rounded-xl text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
//                 >
//                   🚀 Continue to Booking
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }