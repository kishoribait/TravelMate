import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.jpg";

export default function NotFound() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-10 max-w-xl w-full text-center">

        <h1 className="text-7xl md:text-8xl font-extrabold text-orange-400">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
          Page Not Found 😔
        </h2>

        <p className="text-gray-200 mt-4 mb-8">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition"
        >
          🏠 Back To Home
        </Link>

      </div>
    </section>
  );
}