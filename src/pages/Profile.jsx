import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Profile() {
  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

  return (
    <section
      className="min-h-screen bg-cover bg-center relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10">

          <div className="text-center mb-8 sm:mb-10">

            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-orange-500 flex items-center justify-center text-5xl sm:text-6xl shadow-xl border-4 border-white/40">
              👤
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-5">
              My Profile
            </h1>

            <p className="text-white/80 mt-2 text-base sm:text-lg">
              Manage your TravelMate account
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg">

              <p className="text-gray-500 text-sm font-medium">
                👤 Full Name
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-2 break-words">
                {user?.name || "User"}
              </h2>

            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg">

              <p className="text-gray-500 text-sm font-medium">
                📧 Email Address
              </p>

              <h2 className="text-lg sm:text-xl font-bold text-gray-800 mt-2 break-words">
                {user?.email || "Email not available"}
              </h2>

            </div>

          </div>

          <div className="mt-8">

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
              My Travel Account
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <Link
                to="/my-bookings"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300">
                    📋
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      My Bookings
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      View and manage your trips
                    </p>
                  </div>

                </div>
              </Link>

              <Link
                to="/favorites"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center text-3xl group-hover:scale-110 transition duration-300">
                    ❤️
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      My Favorites
                    </h3>

                    <p className="text-gray-500 text-sm mt-1">
                      View your saved destinations
                    </p>
                  </div>

                </div>
              </Link>

            </div>

          </div>

          <div className="text-center mt-8">

            <Link
              to="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}