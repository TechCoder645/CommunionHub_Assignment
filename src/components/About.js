import React from "react";
import { motion } from "framer-motion";
import event1 from '../assets/event-1.avif';
import event2 from '../assets/event-2.webp';
import event3 from '../assets/event-3.avif';
import event4 from '../assets/hero-1.e9ab6d260ce2077bcebe.avif';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-300 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mt-8">
          Uniting Communities Through{" "}
          <span className="text-blue-400">✨ Inspiring Events</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          At Communion, we're committed to organizing events that foster
          connections, inspire personal and professional growth, and bring
          people together to share meaningful experiences. From workshops to
          conferences, every event is designed to leave a lasting impact on our
          attendees.
        </p>

        {/* Trust Badge */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-x-4">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              src="https://randomuser.me/api/portraits/women/31.jpg"
              alt="User"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="User"
            />
          </div>
          <p className="text-gray-300">Trusted by Over 15k+ Individuals Worldwide</p>
        </div>

        {/* Explore Events Button */}
        <button className="mt-6 bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
          Explore Events →
        </button>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        <motion.img
          className="w-full h-48 object-cover rounded-lg"
          src={event1}
          alt="Event 1"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          className="w-full h-48 object-cover rounded-lg"
          src={event2}
          alt="Event 2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          className="w-full h-48 object-cover rounded-lg"
          src={event3}
          alt="Event 3"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          className="w-full h-48 object-cover rounded-lg"
          src={event4}
          alt="Event 4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Statistics Section */}
      <div className="bg-white text-gray-900 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">
          Helping You Connect, Learn, and Thrive <span className="text-blue-400">✨ 2x Impact</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center mt-6 space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-4xl font-bold">98%</h3>
            <p className="text-gray-600">Opportunities Expanded</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">89%</h3>
            <p className="text-gray-600">Attendee Satisfaction</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">15k+</h3>
            <p className="text-gray-600">Engaged Participants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;