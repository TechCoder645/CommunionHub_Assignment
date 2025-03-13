import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import event1 from "../assets/event-1.avif";
import event2 from "../assets/event-2.webp";
import event3 from "../assets/event-3.avif";

const HeroSection = () => {
  return (
    <section className="text-center px-6 py-16 bg-white relative overflow-hidden">
      {/* Main Heading */}
      <h1 className="text-6xl font-extrabold text-black mt-8">
        Connect Communities
      </h1>
      <p className="text-gray-600 mt-3 text-lg">
      "Connecting People Across Faiths & Interests"
      </p>

      {/* Verified Badge */}
      <div className="flex items-center justify-center mt-4">
  <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full flex items-center">
    ✅ Unlimited Advantages
  </span>
</div>

{/* Heading with Images (No Animation) */}
<div className="flex flex-wrap justify-center items-center text-black font-bold text-4xl mt-8 space-x-4">
  <div className="relative flex items-center">
    <img src={event1} alt="event 1" className="w-12 h-12 rounded-full mr-2 shadow-md" />
    Unite,
  </div>
  <div className="relative flex items-center">
    <img src={event2} alt="event 2" className="w-12 h-12 rounded-full mr-2 shadow-md" />
    Innovate,
  </div>
  Connect, Inspire
  <div className="relative flex items-center ml-3">
    <img src={event3} alt="event 3" className="w-12 h-12 rounded-full mr-2 shadow-md" />
    Together
  </div>
</div>


      {/* People Icons */}
      <div className="flex justify-center items-center mt-6">
  <div className="flex -space-x-2 bg-gray-100 px-4 py-2 rounded-full shadow-md">
    <img className="w-10 h-10 rounded-full border-2 border-white" src={event1} alt="User" />
    <img className="w-10 h-10 rounded-full border-2 border-white" src={event2} alt="User" />
    <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full">
      +8 people
    </span>
  </div>
</div>


      {/* CTA Button */}
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Join us to be part of a community where spirituality meets innovation.
        Together, we'll build a world that's more inclusive, engaging, and
        connected than ever before!
      </p>

      <Link to="/">
        <motion.button
          className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Our Services →
        </motion.button>
      </Link>

      {/* Animated Curved Images Section */}
      <div className="flex justify-center gap-6 mt-10">
  <motion.img
    src={event1}
    alt="Community 1"
    className="w-56 h-72 rounded-3xl object-cover shadow-lg"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }} // Faster zoom-in
    whileTap={{ scale: 0.9, transition: { duration: 0.1 } }} // Faster zoom-out
  />
  <motion.img
    src={event2}
    alt="Community 2"
    className="w-56 h-72 rounded-3xl object-cover shadow-lg"
    animate={{ y: [-10, 5, -10] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
  />
  <motion.img
    src={event3}
    alt="Community 3"
    className="w-56 h-72 rounded-3xl object-cover shadow-lg"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
  />
</div>


    </section>
  );
};

export default HeroSection;
