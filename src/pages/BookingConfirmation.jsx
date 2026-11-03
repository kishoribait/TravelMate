import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import { useState } from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import toast from "react-hot-toast";

export default function BookingConfirmation() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

  const { state } = useLocation();

  const [bookingId] = useState(
    () => "TM" + Math.floor(100000 + Math.random() * 900000)
  );

  const [bookingDate] = useState(() =>
    new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    })
  );

  const destinationImages = {
    Goa: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    Manali:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
    Kashmir:
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d",
    Shimla:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    Kerala:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    Andaman:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    Jaipur:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245",
    Udaipur:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    Agra:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    Ladakh:
      "https://images.unsplash.com/photo-1627894483216-2138af692e32",
    Rishikesh:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  };

  if (!state) {
    return (
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-lg bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-8 sm:p-10 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-5xl mb-6">
            😕
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            No Booking Found
          </h1>

          <p className="text-white/80 mt-4 text-base sm:text-lg">
            We couldn't find your booking details. Please go back and
            plan your trip again.
          </p>

          <Link
            to="/planner"
            className="inline-block mt-7 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ✈️ Go to Planner
          </Link>
        </div>
      </section>
    );
  }

  const costPerPerson = Number(state.costPerPerson) || 0;
  const totalCost = Number(state.totalCost) || 0;
  const travelers = Number(state.travelers) || 0;

  // PDF Download
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("TravelMate Booking Ticket", 20, 20);

    doc.setFontSize(14);

    doc.text(`Booking ID : ${bookingId}`, 20, 40);
    doc.text(`Booked On : ${bookingDate}`, 20, 50);

    doc.text(`Passenger : ${user?.name || "User"}`, 20, 65);

    doc.text(`From : ${state.from}`, 20, 80);
    doc.text(`Destination : ${state.destination}`, 20, 90);
    doc.text(`Travel Date : ${state.date}`, 20, 100);
    doc.text(`Duration : ${state.tripDays}`, 20, 110);
    doc.text(`Travelers : ${travelers}`, 20, 120);

    doc.text(
      `Trip Type : ${(state.tripType || "").replace(
        /[^\x00-\x7F]/g,
        ""
      )}`,
      20,
      130
    );

    doc.text(
      `Cost Per Person : Rs.${costPerPerson}`,
      20,
      140
    );

    doc.text(
      `Total Amount : Rs.${totalCost}`,
      20,
      150
    );

    doc.save("TravelMate-Ticket.pdf");
  };

  const handleConfirmBooking = async () => {
    if (bookingConfirmed) {
      toast.error("Booking already confirmed");
      return;
    }

    try {
      const response = await axios.post(
        "http://https://https://travelmate-backend-gogp.onrender.com/api/booking/create",
        {
          from: state.from,
          destination: state.destination,
          date: state.date,
          travelers: travelers,
          costPerPerson: costPerPerson,
          totalPrice: totalCost,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("SUCCESS :", response.data);

      setBookingConfirmed(true);

      toast.success("🎉 Booking Confirmed Successfully");
    } catch (error) {
      console.log("ERROR :", error);

      toast.error(
        error.response?.data?.message || "Booking Failed"
      );
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-fixed relative py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10">

          <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <img
              src={destinationImages[state.destination]}
              alt={state.destination}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg mb-3">
                🌍 TRAVELMATE
              </span>

              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold">
                {state.destination}
              </h1>

              <p className="text-white/90 mt-2 text-base sm:text-lg">
                Your journey starts here ✈️
              </p>
            </div>
          </div>

          <div className="text-center mb-10">
            <div
              className={`text-6xl sm:text-7xl transition-all duration-500 ${
                bookingConfirmed ? "animate-bounce" : ""
              }`}
            >
              {bookingConfirmed ? "🎉" : "✈️"}
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 ${
                bookingConfirmed
                  ? "text-green-400"
                  : "text-white"
              }`}
            >
              {bookingConfirmed
                ? "Booking Confirmed"
                : "Review & Confirm Your Trip"}
            </h1>

            <p className="text-white/85 mt-4 text-base sm:text-lg">
              {bookingConfirmed
                ? "Thank you for choosing TravelMate ❤️"
                : "Review your trip details carefully before confirming your booking."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 sm:p-6 text-center border border-white/20 shadow-lg">
              <div className="text-3xl mb-2">
                🎫
              </div>

              <p className="text-white/60 text-sm">
                Booking ID
              </p>

              <h2 className="text-xl sm:text-2xl font-extrabold text-yellow-300 mt-2 break-all">
                {bookingId}
              </h2>
            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 sm:p-6 text-center border border-white/20 shadow-lg">
              <div className="text-3xl mb-2">
                👤
              </div>

              <p className="text-white/60 text-sm">
                Passenger
              </p>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-2 break-words">
                {user?.name || "User"}
              </h2>
            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 sm:p-6 text-center border border-white/20 shadow-lg">
              <div className="text-3xl mb-2">
                🕒
              </div>

              <p className="text-white/60 text-sm">
                Booked On
              </p>

              <h2 className="text-base sm:text-lg font-bold text-white mt-2">
                {bookingDate}
              </h2>
            </div>

          </div>

          <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-5 sm:p-7 md:p-8 shadow-xl">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  ✈️ Trip Summary
                </h2>

                <p className="text-white/60 mt-1">
                  Your complete journey details
                </p>
              </div>

              <span className="self-start bg-orange-500/90 text-white px-4 py-2 rounded-full text-sm font-bold">
                {state.tripType}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  📍 Departure From
                </p>

                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2 break-words">
                  {state.from}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  🌍 Destination
                </p>

                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                  {state.destination}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  📅 Travel Date
                </p>

                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                  {state.date}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  👥 Travelers
                </p>

                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                  {travelers}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  🧳 Trip Type
                </p>

                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                  {state.tripType}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  🗓 Duration
                </p>

                <p className="text-lg sm:text-xl font-bold text-gray-800 mt-2">
                  {state.tripDays} Days
                </p>
              </div>

            </div>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl p-5 shadow-md">
                <p className="text-gray-500 text-sm font-medium">
                  💰 Cost Per Person
                </p>

                <p className="text-2xl font-extrabold text-gray-800 mt-2">
                  ₹{costPerPerson.toLocaleString()}
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-5 shadow-xl text-white">
                <p className="text-white/90 text-sm font-medium">
                  💳 Total Amount
                </p>

                <p className="text-3xl sm:text-4xl font-extrabold mt-2">
                  ₹{totalCost.toLocaleString()}
                </p>
              </div>

            </div>
          </div>

          {bookingConfirmed && (
            <div className="mt-7 bg-green-500/20 border border-green-400/40 rounded-2xl p-5 text-center">
              <p className="text-green-300 font-bold text-lg">
                ✅ Your booking has been successfully saved!
              </p>

              <p className="text-white/70 text-sm mt-2">
                You can now view your booking from the My Bookings section.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">

            <button
              onClick={handleConfirmBooking}
              disabled={bookingConfirmed}
              className={`py-4 px-5 rounded-2xl text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 ${
                bookingConfirmed
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {bookingConfirmed
                ? "✅ Booking Confirmed"
                : "✅ Confirm Booking"}
            </button>

            <button
              onClick={downloadPDF}
              className="bg-blue-600 hover:bg-blue-700 py-4 px-5 rounded-2xl text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              📄 Download Ticket
            </button>

            <Link
              to="/my-bookings"
              className="bg-orange-500 hover:bg-orange-600 py-4 px-5 rounded-2xl text-center text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              📖 My Bookings
            </Link>

            <Link
              to="/"
              className="bg-slate-800 hover:bg-black py-4 px-5 rounded-2xl text-center text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              🏠 Back Home
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}