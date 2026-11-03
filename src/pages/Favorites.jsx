import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Favorites() {
  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get(
        "https://travelmate-backend-gogp.onrender.com/api/favorite",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("FAVORITES =>", response.data.favorites);

      setFavorites(response.data.favorites);
    } catch (error) {
      console.log("GET FAVORITES ERROR =>", error);

      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        return;
      }

      toast.error(
        error.response?.data?.message ||
          "Failed to fetch favorites"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(
        `https://travelmate-backend-gogp.onrender.com/api/favorite/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setFavorites((prev) =>
        prev.filter((item) => item._id !== id)
      );

      toast.success("💔 Removed from Favorites");
    } catch (error) {
      console.log("REMOVE FAVORITE ERROR =>", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to remove favorite"
      );
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center relative py-8 sm:py-10 md:py-14 px-3 sm:px-5 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-2">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            My Favorites ❤️
          </h1>

          <p className="text-gray-200 mt-3 text-sm sm:text-base md:text-lg">
            Your favorite TravelMate destinations.
          </p>

        </div>

        {loading ? (

          <div className="text-center text-white text-lg sm:text-xl">
            Loading Favorites...
          </div>

        ) : favorites.length === 0 ? (

          <div className="w-full max-w-xl mx-auto bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-7 md:p-10 text-center">

            <div className="text-5xl sm:text-6xl md:text-7xl mb-4 sm:mb-5">
              💔
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              No Favorites Yet
            </h2>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-6 sm:leading-7">
              Add your favorite destinations and they will
              appear here.
            </p>

            <Link
              to="/destination"
              className="inline-flex justify-center w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold transition duration-300"
            >
              🌍 Explore Destinations
            </Link>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

            {favorites.map((item) => (

              <div
                key={item._id}
                className="w-full min-w-0 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex justify-between items-start gap-3 mb-5 sm:mb-6">

                  <h2 className="text-xl sm:text-2xl font-bold text-orange-400 break-words min-w-0">
                    🌍 {item.destination}
                  </h2>

                  <span className="text-xl sm:text-2xl flex-shrink-0">
                    ❤️
                  </span>

                </div>

                <div className="space-y-3 sm:space-y-4">

                  <p className="text-gray-200 text-sm sm:text-base">
                    ⭐ Saved Destination
                  </p>

                  <p className="text-gray-300 text-xs sm:text-sm break-words">
                    Added on{" "}
                    {new Date(item.createdAt).toLocaleDateString(
                      "en-IN"
                    )}
                  </p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-6 sm:mt-7">

                  <Link
                    to={`/destination/${item.destination}`}
                    className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2.5 sm:py-3 px-3 rounded-xl font-semibold text-sm sm:text-base transition"
                  >
                    👁️ View
                  </Link>

                  <Link
                    to="/planner"
                    state={{
                      destination: item.destination,
                    }}
                    className="w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-2.5 sm:py-3 px-3 rounded-xl font-semibold text-sm sm:text-base transition"
                  >
                    ✈️ Book
                  </Link>

                  <button
                    onClick={() => handleRemove(item._id)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 sm:py-3 px-3 rounded-xl font-semibold text-sm sm:text-base transition"
                  >
                    💔 Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>
    </section>
  );
}