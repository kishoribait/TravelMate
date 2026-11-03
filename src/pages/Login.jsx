import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import heroBg from "../assets/images/hero-bg.jpg";
import toast from "react-hot-toast";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCompass,
} from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      toast.success("Welcome back! ✈️ Login Successful");

      const from = location.state?.from?.pathname || "/";

      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/25 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-9">

          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-orange-500/90 flex items-center justify-center shadow-xl border-4 border-white/20 mb-5">
              <FaCompass className="text-4xl text-white" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome Back 👋
            </h1>

            <p className="text-white/75 mt-3 text-sm sm:text-base leading-relaxed">
              Continue your amazing travel journey with TravelMate.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-white/90 text-sm font-semibold mb-2">
                📧 Email Address
              </label>

              <div className="relative">
                <FaEnvelope
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-lg"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/90 text-sm font-semibold mb-2">
                🔐 Password
              </label>

              <div className="relative">
                <FaLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-lg"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition duration-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-orange-400 transition duration-300"
                >
                  {showPassword ? (
                    <FaEyeSlash size={19} />
                  ) : (
                    <FaEye size={19} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-orange-300 hover:text-orange-400 font-medium transition duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 sm:py-4 rounded-xl text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {loading ? "⏳ Logging in..." : "✈️ Login"}
            </button>
          </form>

          <div className="flex items-center gap-3 my-7">
            <div className="flex-1 h-px bg-white/20"></div>

            <span className="text-white/50 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          <p className="text-center text-white/80 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-orange-400 hover:text-orange-300 font-bold hover:underline transition duration-300"
            >
              Sign Up
            </Link>
          </p>

          <div className="text-center mt-7">
            <p className="text-white/40 text-xs">
              🌍 Explore India • Plan Your Journey • TravelMate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}