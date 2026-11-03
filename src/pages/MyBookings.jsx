import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";
import toast from "react-hot-toast";

export default function MyBookings() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);

  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchBookings();
  }, []);

  
  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/api/booking",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(response.data.bookings);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      toast.error(
        error.response?.data?.message ||
          "Failed to fetch bookings"
      );
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/booking/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      await fetchBookings();

      toast.success("❌ Booking Cancelled Successfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Booking Cancellation Failed"
      );
    }
  };

 
  const handleUpdate = async () => {
    try {
      const costPerPerson = Number(
        editingBooking.costPerPerson
      );

      const travelers = Number(
        editingBooking.travelers
      );

      const totalPrice = costPerPerson * travelers;

      const response = await axios.put(
        `http://localhost:5000/api/booking/update/${editingBooking._id}`,
        {
          from: editingBooking.from,
          date: editingBooking.date,
          travelers: travelers,
          totalPrice: totalPrice,
          costPerPerson: costPerPerson,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const updatedBooking = response.data.booking;

      setBookings((prevBookings) =>
        prevBookings.map((item) =>
          item._id === updatedBooking._id
            ? {
                ...item,
                ...updatedBooking,
              }
            : item
        )
      );

      setEditingBooking(null);

      toast.success("Booking Updated Successfully");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Booking Update Failed"
      );
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="text-center mb-12 sm:mb-14">

          <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 text-white px-5 py-2 rounded-full text-sm font-semibold">
            ✈️ YOUR TRAVEL JOURNEYS
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            My Bookings 📖
          </h1>

          <p className="text-white/80 mt-3 text-base sm:text-lg">
            View and manage all your TravelMate adventures in one place.
          </p>

        </div>

        {bookings.length === 0 ? (

          <div className="max-w-xl mx-auto bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-8 sm:p-12 text-center">

            <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-5xl mb-6">
              📖
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              No Bookings Yet
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              You haven't booked any trips yet. Explore amazing
              destinations and plan your next adventure with TravelMate.
            </p>

            <Link
              to="/destination"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              🌍 Explore Destinations
            </Link>

          </div>

        ) : (

         
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {bookings.map((item) => (

              <div
                key={item._id}
                className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-7 shadow-2xl hover:-translate-y-2 hover:shadow-orange-500/20 transition-all duration-300"
              >

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-7">

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-400">
                      🌍 {item.destination}
                    </h2>

                    <p className="text-white/60 mt-1 text-sm">
                      TravelMate Booking
                    </p>
                  </div>

                  <span className="self-start bg-green-500/90 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    ✅ Confirmed
                  </span>

                </div>

                <div className="space-y-4 text-white">

                  <div className="flex justify-between items-center gap-4 border-b border-white/15 pb-3">
                    <span className="text-white/70">
                      📍 From
                    </span>

                    <span className="font-semibold text-right break-words">
                      {item.from}
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4 border-b border-white/15 pb-3">
                    <span className="text-white/70">
                      📅 Date
                    </span>

                    <span className="font-semibold">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex justify-between items-center gap-4 border-b border-white/15 pb-3">
                    <span className="text-white/70">
                      👥 Travelers
                    </span>

                    <span className="font-semibold">
                      {item.travelers}
                    </span>
                  </div>

                  <div className="pt-2">

                    <p className="text-white/70 text-sm">
                      💰 Total Amount
                    </p>

                    <p className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mt-1">
                      ₹{Number(item.totalPrice).toLocaleString()}
                    </p>

                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">

                  <button
                    onClick={() => setSelectedBooking(item)}
                    className="py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    👁️ View
                  </button>

                  <button
                    onClick={() => setEditingBooking(item)}
                    className="py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    ❌ Cancel
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

      {/* =========================
          VIEW BOOKING MODAL
      ========================= */}
      {selectedBooking && (

        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBooking(null)}
        >

          <div
            className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500">
                Booking Details
              </h2>

              <button
                onClick={() => setSelectedBooking(null)}
                className="text-gray-500 hover:text-red-500 text-2xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-4 text-gray-700">

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Destination
                </p>
                <p className="font-bold text-lg">
                  🌍 {selectedBooking.destination}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  From
                </p>
                <p className="font-bold">
                  📍 {selectedBooking.from}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Date
                </p>
                <p className="font-bold">
                  📅 {selectedBooking.date}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Travelers
                </p>
                <p className="font-bold">
                  👥 {selectedBooking.travelers}
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">
                  Total Amount
                </p>
                <p className="text-2xl font-extrabold text-orange-500">
                  ₹{Number(selectedBooking.totalPrice).toLocaleString()}
                </p>
              </div>

            </div>

            <button
              onClick={() => setSelectedBooking(null)}
              className="mt-7 w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Close
            </button>

          </div>

        </div>

      )}

      {/* =========================
          EDIT BOOKING MODAL
      ========================= */}
      {editingBooking && (

        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setEditingBooking(null)}
        >

          <div
            className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
              Edit Booking
            </h2>

            <div className="space-y-5">

              {/* From */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  📍 Departure From
                </label>

                <input
                  type="text"
                  value={editingBooking.from}
                  onChange={(e) =>
                    setEditingBooking({
                      ...editingBooking,
                      from: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  📅 Travel Date
                </label>

                <input
                  type="date"
                  value={editingBooking.date}
                  onChange={(e) =>
                    setEditingBooking({
                      ...editingBooking,
                      date: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

              {/* Travelers */}
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  👥 Number of Travelers
                </label>

                <input
                  type="number"
                  min="1"
                  max="20"
                  value={editingBooking.travelers}
                  onChange={(e) =>
                    setEditingBooking({
                      ...editingBooking,
                      travelers: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>

            </div>

            {/* Modal Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">

              <button
                onClick={handleUpdate}
                className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition duration-300"
              >
                💾 Save Changes
              </button>

              <button
                onClick={() => setEditingBooking(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition duration-300"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}