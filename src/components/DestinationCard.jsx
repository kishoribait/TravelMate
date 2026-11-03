import { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function DestinationCard({ destination }) {

  const navigate = useNavigate();

 const [isFavorite, setIsFavorite] = useState(false);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const checkFavorite = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
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

      const favoriteExists = response.data.favorites.some(
        (item) => item.destination === destination.name
      );

      setIsFavorite(favoriteExists);

    } catch (error) {
      console.log("CHECK FAVORITE ERROR =>", error);
    }
  };

  checkFavorite();
}, [destination.name]);
const handleFavorite = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Please login to manage favorites");
    navigate("/login");
    return;
  }

  try {
    setLoading(true);

    if (isFavorite) {
      const response = await axios.get(
        "https://travelmate-backend-gogp.onrender.com/api/favorite",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const favorite = response.data.favorites.find(
        (item) => item.destination === destination.name
      );

      if (!favorite) {
        setIsFavorite(false);
        return;
      }

      await axios.delete(
        `https://travelmate-backend-gogp.onrender.com/api/favorite/${favorite._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setIsFavorite(false);

      toast.success("💔 Removed from Favorites");

      return;
    }

    await axios.post(
      "https://travelmate-backend-gogp.onrender.com/api/favorite",
      {
        destination: destination.name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setIsFavorite(true);

    toast.success("❤️ Added to Favorites");

  } catch (error) {
    console.log("FAVORITE ERROR =>", error);
    console.log("ERROR DATA =>", error.response?.data);

    toast.error(
      error.response?.data?.message ||
      "Favorite operation failed"
    );

  } finally {
    setLoading(false);
  }
};


  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="relative overflow-hidden h-56 sm:h-60">

        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

        <div className="absolute top-3 right-3 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold text-sm shadow">
          ⭐ {destination.rating}
        </div>

        <button
          onClick={handleFavorite}
          disabled={loading}
          className={`absolute top-3 left-3 w-11 h-11 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300
            ${
              isFavorite
                ? "bg-red-500 text-white scale-110"
                : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white hover:scale-110"
            }`}
        >
          {isFavorite ? "❤️" : "♡"}
        </button>

      </div>


      <div className="p-5">

        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          {destination.name}
        </h2>

        <p className="text-gray-500 text-sm sm:text-base mb-2">
          📍 {destination.location}
        </p>

        <p className="text-gray-500 text-sm sm:text-base mb-2">
          🧳 {destination.category}
        </p>

        <p className="text-gray-500 text-sm sm:text-base mb-5">
          🗓 {destination.days}
        </p>


        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

          <h3 className="text-2xl font-bold text-orange-500">
            ₹ {destination.price.toLocaleString()}
          </h3>

          <Link
            to={`/destination/${destination.name}`}
            className="w-full sm:w-auto text-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-semibold transition duration-300"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
}

export default DestinationCard;