import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { FaCompass, FaBars, FaTimes, FaSignInAlt, } from "react-icons/fa";
import { HiOutlineUserPlus } from "react-icons/hi2";

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const storedUser = localStorage.getItem("user");

    const user =
        storedUser && storedUser !== "undefined"
            ? JSON.parse(storedUser)
            : null;

    const destinations = [
        "goa",
        "manali",
        "jaipur",
        "kashmir",
        "rishikesh",
        "shimla",
        "udaipur",
        "ladakh",
        "andaman",
        "kerala",
        "agra",
    ];

    const filteredDestinations =
        search.trim() === ""
            ? []
            : destinations.filter((place) =>
                place.toLowerCase().includes(search.toLowerCase())
            );

    const handleSearch = () => {
        const value = search.trim().toLowerCase();

        if (destinations.includes(value)) {
            navigate(`/destination/${value}`);
            setSearch("");
            setMenuOpen(false);
        } else {
            alert("Destination not found!");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        alert("Logout Successful");

        navigate("/login");
    };

    const navLinkClass = ({ isActive }) =>
        `text-[21px] font-semibold whitespace-nowrap transition duration-300 ${isActive
            ? "text-orange-400"
            : "text-white hover:text-orange-400"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#16213E] via-[#1E3A8A] to-[#3B82F6] shadow-xl">

            <div className="w-full px-4 lg:px-5 xl:px-6 h-20 flex items-center">



                <div className="hidden xl:flex items-center w-full">

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div
                            onClick={() => navigate("/")}
                            className="flex items-center gap-2 cursor-pointer"
                        >
                            <FaCompass className="text-orange-500 text-3xl" />

                            <h1 className="text-white text-[32px] font-bold tracking-tight hover:text-orange-400 transition duration-300">
                                TravelMate
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mx-auto">

                        <NavLink to="/" className={navLinkClass}>
                            🏠 Home
                        </NavLink>

                        <NavLink to="/destination" className={navLinkClass}>
                            🌍 Destinations
                        </NavLink>

                        <NavLink to="/planner" className={navLinkClass}>
                            ✈️ Planner
                        </NavLink>

                        <NavLink to="/about" className={navLinkClass}>
                            🧭 About
                        </NavLink>

                        <NavLink to="/contact" className={navLinkClass}>
                            📞 Contact
                        </NavLink>

                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">

                        <div className="relative flex items-center">

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSearch();
                                    }
                                }}
                                placeholder="Search destination..."
                                className="w-52 h-12 px-4 bg-white/10 border border-white/60 rounded-l-xl text-white placeholder-gray-200 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400 transition"
                            />

                            <button
                                type="button"
                                onClick={handleSearch}
                                className="h-12 px-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-r-xl transition duration-300"
                            >
                                🔍 Search
                            </button>

                            {filteredDestinations.length > 0 && (
                                <div className="absolute top-14 left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">

                                    {filteredDestinations.map((place) => (
                                        <div
                                            key={place}
                                            onClick={() => {
                                                navigate(`/destination/${place}`);
                                                setSearch("");
                                            }}
                                            className="px-4 py-3 text-sm text-gray-700 hover:bg-orange-100 cursor-pointer transition"
                                        >
                                            {place.charAt(0).toUpperCase() + place.slice(1)}
                                        </div>
                                    ))}

                                </div>
                            )}

                        </div>

                        {user ? (
                            <>

                                <Link to="/profile"
                                    className="text-white text-[18px] font-semibold hover:text-orange-400 whitespace-nowrap transition duration-300"
                                >
                                    👤 {user?.name || "Profile"}
                                </Link>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl text-white text-[17px] font-semibold whitespace-nowrap transition duration-300"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2 text-white text-[18px] font-semibold hover:text-orange-400 whitespace-nowrap transition duration-300"
                                >
                                    <FaSignInAlt />
                                    Login
                                </Link>

                                <Link
                                    to="/signup"
                                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl text-white text-[17px] font-semibold whitespace-nowrap transition duration-300"
                                >
                                    <HiOutlineUserPlus />
                                    Signup
                                </Link>
                            </>
                        )}

                    </div>

                </div>

                <button
                    type="button"
                    className="xl:hidden text-3xl text-white ml-auto hover:text-orange-400 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {menuOpen && (
                <div className="xl:hidden bg-[#1E3A8A] px-5 sm:px-8 py-5 flex flex-col gap-2 shadow-xl">

                    {/* Mobile Search */}
                    <div className="relative flex mb-3">

                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            placeholder="Search destination..."
                            className="flex-1 min-w-0 px-4 py-3 rounded-l-xl outline-none text-black border border-white"
                        />

                        <button
                            type="button" onClick={handleSearch}
                            className="bg-orange-500 hover:bg-orange-600 px-4 sm:px-5 rounded-r-xl text-white font-semibold transition duration-300"
                        >
                            🔍 Search
                        </button>

                        {filteredDestinations.length > 0 && (
                            <div className="absolute top-14 left-0 right-0 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">

                                {filteredDestinations.map((place) => (
                                    <div
                                        key={place}
                                        onClick={() => {
                                            navigate(
                                                `/destination/${place}`
                                            );
                                            setSearch("");
                                            setMenuOpen(false);
                                        }}
                                        className="px-4 py-3 text-sm text-gray-700 hover:bg-orange-100 cursor-pointer transition"
                                    >
                                        {place.charAt(0).toUpperCase() +
                                            place.slice(1)}
                                    </div>
                                ))}

                            </div>
                        )}

                    </div>

                    <NavLink
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                    >
                        🏠 Home
                    </NavLink>

                    <NavLink
                        to="/destination"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                    >
                        🌍 Destinations
                    </NavLink>

                    <NavLink
                        to="/planner"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                    >
                        ✈️ Planner
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                    >
                        🧭 About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                    >
                        📞 Contact
                    </NavLink>

                    {user ? (
                        <>
                            <Link
                                to="/profile"
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                            >
                                👤 Profile
                            </Link>

                            <button
                                type="button"
                                onClick={() => {
                                    handleLogout();
                                    setMenuOpen(false);
                                }}
                                className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl text-white text-[17px] font-semibold transition duration-300"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                            >
                                <span className="flex items-center gap-2">
                                    <FaSignInAlt />
                                    Login
                                </span>
                            </Link>

                            <Link
                                to="/signup"
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-[18px] font-semibold py-3 hover:text-orange-400 transition"
                            >
                                <span className="flex items-center gap-2">
                                    <HiOutlineUserPlus />
                                    Signup
                                </span>
                            </Link>
                        </>
                    )}

                </div>
            )}

        </nav>
    );
}