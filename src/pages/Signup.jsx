import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaUser,FaEnvelope,FaLock,FaEye,FaEyeSlash,FaCompass,} from "react-icons/fa";

import heroBg from "../assets/images/hero-bg.jpg";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      toast.error("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "http://https://https://travelmate-backend-gogp.onrender.com/api/auth/register",
        form
      );

      toast.success("🎉 Account Created Successfully");

      navigate("/login");
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-cover bg-center relative"
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
              Join TravelMate 🌍
            </h1>

            <p className="text-white/75 mt-3 text-sm sm:text-base leading-relaxed">
              Create your account and start exploring incredible
              destinations.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block text-white/90 text-sm font-semibold mb-2">
                👤 Full Name
              </label>

              <div className="relative">
                <FaUser
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-lg"
                />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition duration-300"
                />
              </div>
            </div>

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
                  placeholder="Create a password"
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

            <div>
              <label className="block text-white/90 text-sm font-semibold mb-2">
                🔐 Confirm Password
              </label>

              <div className="relative">
                <FaLock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-lg"
                />

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-xl bg-white/15 border border-white/25 text-white placeholder-white/50 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/30 transition duration-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-orange-400 transition duration-300"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash size={19} />
                  ) : (
                    <FaEye size={19} />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 text-white/80 text-sm cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 w-4 h-4 accent-orange-500 cursor-pointer"
              />

              <span>
                I agree to the{" "}
                <span className="text-orange-300 font-semibold">
                  Terms & Conditions
                </span>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 sm:py-4 rounded-xl text-white font-bold text-base sm:text-lg shadow-lg transition-all duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              {loading
                ? "⏳ Creating Account..."
                : "🚀 Create Account"}
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
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 hover:text-orange-300 font-bold hover:underline transition duration-300"
            >
              Login
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