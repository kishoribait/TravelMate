import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaCompass,} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div>
          <h2 className="flex items-center gap-2 text-3xl font-bold text-orange-400">
            <FaCompass />
            TravelMate
          </h2>

          <p className="mt-5 text-gray-300 leading-7 text-sm sm:text-base max-w-sm">
            Discover the world's most beautiful destinations with
            TravelMate. Plan your dream vacation easily and create
            unforgettable memories.
          </p>

          <p className="mt-5 text-gray-400 text-sm">
            ✈️ Your journey, our responsibility.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-orange-400">
            Quick Links
          </h3>

          <ul className="space-y-3.5 text-gray-300">
            <li>
              <Link
                to="/"
                className="inline-block hover:text-orange-400 hover:translate-x-1 transition-all duration-300"
              >
                🏠 Home
              </Link>
            </li>

            <li>
              <Link
                to="/destination"
                className="inline-block hover:text-orange-400 hover:translate-x-1 transition-all duration-300"
              >
                🌍 Destinations
              </Link>
            </li>

            <li>
              <Link
                to="/planner"
                className="inline-block hover:text-orange-400 hover:translate-x-1 transition-all duration-300"
              >
                ✈️ Planner
              </Link>
            </li>

            <li>
              <Link
                to="/my-bookings"
                className="inline-block hover:text-orange-400 hover:translate-x-1 transition-all duration-300"
              >
                📖 My Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-orange-400">
            Support
          </h3>

          <ul className="space-y-3.5 text-gray-300">
            <li>
              <Link
                to="/contact"
                className="inline-block hover:text-orange-400 hover:translate-x-1 transition-all duration-300"
              >
                📞 Contact Us
              </Link>
            </li>

            <li className="text-gray-400">
              ❓ FAQ
              <span className="ml-2 text-xs text-gray-500">
                Coming Soon
              </span>
            </li>

            <li className="text-gray-400">
              🔒 Privacy Policy
              <span className="ml-2 text-xs text-gray-500">
                Coming Soon
              </span>
            </li>

            <li className="text-gray-400">
              📄 Terms & Conditions
              <span className="ml-2 text-xs text-gray-500">
                Coming Soon
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-5 text-orange-400">
            Follow Us
          </h3>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              aria-label="Facebook"
              className="bg-slate-800 p-3.5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            >
              <FaFacebookF />
            </button>

            <button
              type="button"
              aria-label="Instagram"
              className="bg-slate-800 p-3.5 rounded-full hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <FaInstagram />
            </button>

            <button
              type="button"
              aria-label="Twitter"
              className="bg-slate-800 p-3.5 rounded-full hover:bg-sky-500 hover:scale-110 transition-all duration-300"
            >
              <FaTwitter />
            </button>

            <button
              type="button"
              aria-label="LinkedIn"
              className="bg-slate-800 p-3.5 rounded-full hover:bg-blue-700 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </button>
          </div>

          <div className="mt-7 space-y-3 text-gray-300 text-sm sm:text-base">
            <p>📧 support@travelmate.com</p>

            <p>📱 +91 9876543210</p>

            <p>📍 Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-5 px-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} TravelMate. All Rights Reserved.
        </p>

        <p className="mt-1 text-gray-500">
          Made with ❤️ for travelers
        </p>
      </div>
    </footer>
  );
}