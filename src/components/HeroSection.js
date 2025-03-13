import React from "react";
import { Link } from "react-router-dom";
import event1 from "../assets/event-1.avif";
import event2 from "../assets/event-2.webp";
import event3 from "../assets/event-3.avif";

const HeroSection = () => {
  return (
    <section className="text-center px-6 py-16 bg-white">
      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-black">
        Connect Communities
      </h1>
      <p className="text-gray-600 mt-3 text-lg">
        Bridging gaps between faiths with tech and a dash of fun!
      </p>

      {/* Badges */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <span className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full flex items-center">
          ✅ Unlimited Advantages
        </span>
      </div>

      {/* Stylized text with images */}
      <div className="flex flex-wrap justify-center items-center text-black font-bold text-4xl mt-8">
        <span className="relative flex items-center">
          <img
            src={event1}
            alt="event 1"
            className="w-10 h-10 rounded-full mr-2"
          />
          Unite,
        </span>{" "}
        <span className="relative flex items-center">
          <img
            src={event2}
            alt="event 2"
            className="w-10 h-10 rounded-full mr-2"
          />
          Innovate,
        </span>{" "}
        Connect, Inspire
        <div className="flex items-center ml-3">
          <img
            src={event3}
            alt="event 3"
            className="w-10 h-10 rounded-full mr-2"
          />
          Together
        </div>
      </div>

      {/* People Icons */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex -space-x-2">
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={event1}
            alt="User"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-white"
            src={event2}
            alt="User"
          />
          <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full">
            +8 peoples
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <p className="text-gray-600 mt-4 max-w-xl mx-auto">
        Join us to be part of a community where spirituality meets innovation.
        Together, we'll build a world that's more inclusive, engaging, and
        connected than ever before!
      </p>

      <Link to="/services">
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition">
          View Our Services →
        </button>
      </Link>

      {/* Curved Images Section */}
      <div className="flex justify-center gap-4 mt-10">
        <img src={event1} alt="Community 1" className="w-48 h-64 rounded-3xl object-cover" />
        <img src={event2} alt="Community 2" className="w-48 h-64 rounded-3xl object-cover" />
        <img src={event3} alt="Community 3" className="w-48 h-64 rounded-3xl object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
