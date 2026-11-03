import { useState } from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import toast from "react-hot-toast";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = form;

    if (!name.trim()) {
      return toast.error("Please enter your name.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return toast.error("Please enter a valid email.");
    }

    if (!/^\d{10}$/.test(phone)) {
      return toast.error("Phone number must contain 10 digits.");
    }

    if (!message.trim()) {
      return toast.error("Please enter your message.");
    }

    try {
      await axios.post(
        "http://https://https://travelmate-backend-gogp.onrender.com/api/contact",
        form
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send message"
      );
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-2xl mx-auto">

        {/* Page Heading */}
        <div className="text-center text-white mb-10">

          <p className="text-orange-500 font-extrabold text-lg">
            GET IN TOUCH
          </p>

          <h1 className="text-5xl font-extrabold mt-2">
            Contact Us
          </h1>

          <p className="text-white/90 mt-3">
            Have a question? We'd love to hear from you.
          </p>

        </div>

        <div className="bg-white/95 rounded-2xl shadow-2xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
            />

            <input
              name="phone"
              type="tel"
              maxLength="10"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-orange-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}


































































// import { useState } from "react";
// import heroBg from "../assets/images/hero-bg.jpg";
// import toast from "react-hot-toast";
// import axios from "axios";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name.trim()) {
//       toast.error("Please enter your name.");
//       return;
//     }

//     if (!email.trim()) {
//       toast.error("Please enter your email.");
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!emailPattern.test(email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     if (!phone.trim()) {
//       toast.error("Please enter your phone number.");
//       return;
//     }

//     if (!/^\d{10}$/.test(phone)) {
//       toast.error("Phone number must contain exactly 10 digits.");
//       return;
//     }

//     if (!message.trim()) {
//       toast.error("Please enter your message.");
//       return;
//     }

//     try {
//       await axios.post(
//         "http://https://https://travelmate-backend-gogp.onrender.com/api/contact",
//         {
//           name,
//           email,
//           phone,
//           message,
//         }
//       );

//       toast.success(
//         "Thank you for contacting TravelMate! We will get back to you soon."
//       );

//       setName("");
//       setEmail("");
//       setPhone("");
//       setMessage("");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to send message"
//       );
//     }
//   };

//   return (
//     <section
//       className="min-h-screen bg-cover bg-center relative py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url(${heroBg})`,
//       }}
//     >
//       <div className="absolute inset-0 bg-black/55"></div>

//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center text-white mb-10 sm:mb-12">
//           <span className="inline-block bg-white/15 backdrop-blur-md border border-white/25 px-5 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide">
//             📞 GET IN TOUCH
//           </span>

//           <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
//             Contact Us
//           </h1>

//           <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90">
//             We'd love to hear from you. Send us a message and our
//             TravelMate team will get back to you soon.
//           </p>
//         </div>

//         {/* Contact Card */}
//         <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-3">
//             {/* Contact Information */}
//             <div className="bg-slate-900 text-white p-7 sm:p-9 lg:p-10">
//               <h2 className="text-2xl sm:text-3xl font-bold text-orange-400">
//                 Let's Talk ✨
//               </h2>

//               <p className="mt-4 text-gray-300 leading-7">
//                 Have a question about your trip or need help with
//                 TravelMate? We're here to help.
//               </p>

//               <div className="mt-8 space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl">
//                     📧
//                   </div>

//                   <div>
//                     <p className="font-semibold">Email</p>
//                     <p className="text-gray-400 text-sm mt-1 break-words">
//                       support@travelmate.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl">
//                     📞
//                   </div>

//                   <div>
//                     <p className="font-semibold">Phone</p>
//                     <p className="text-gray-400 text-sm mt-1">
//                       +91 98765 43210
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="w-11 h-11 shrink-0 rounded-xl bg-orange-500/20 flex items-center justify-center text-xl">
//                     📍
//                   </div>

//                   <div>
//                     <p className="font-semibold">Location</p>
//                     <p className="text-gray-400 text-sm mt-1">
//                       Maharashtra, India
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-10 pt-6 border-t border-slate-700">
//                 <p className="text-gray-400 text-sm">
//                   🕐 Available for travel assistance
//                 </p>
//               </div>
//             </div>

//             {/* Form */}
//             <div className="lg:col-span-2 p-7 sm:p-9 lg:p-10">
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-7">
//                 Send Us a Message
//               </h2>

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-5"
//               >
//                 <div>
//                   <label className="block font-semibold text-gray-700 mb-2">
//                     Your Name
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Enter your name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold text-gray-700 mb-2">
//                     Email Address
//                   </label>

//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold text-gray-700 mb-2">
//                     Phone Number
//                   </label>

//                   <input
//                     type="tel"
//                     placeholder="Enter 10 digit phone number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     maxLength="10"
//                     className="w-full border border-gray-200 p-4 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//                   />
//                 </div>

//                 <div>
//                   <label className="block font-semibold text-gray-700 mb-2">
//                     Your Message
//                   </label>

//                   <textarea
//                     rows="5"
//                     placeholder="Write your message..."
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     className="w-full border border-gray-200 p-4 rounded-xl resize-none outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                   Send Message 🚀
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


