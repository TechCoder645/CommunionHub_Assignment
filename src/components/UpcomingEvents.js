import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterEvents } from "../utils/filterEvents"; // Import the filter function
import "../styles/animations.css"; // Import the custom CSS

const UpcomingEvents = ({ events }) => {
  const [selectedFilter, setSelectedFilter] = useState("This Month");

  const filteredEvents = filterEvents(events, selectedFilter); // Apply filter

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Upcoming Events Heading Section */}
      <div className="text-center mb-8 mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We Helped Communities Connect & Flourish
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-blue-700 flex items-center justify-center mt-2 mb-10">
          <span className="text-2xl pr-2">✨</span> Upcoming Events
        </h3>

        {/* Filter Buttons */}
        <div className="mt-4 flex justify-center space-x-3">
          {["Today", "Tomorrow", "This Week", "Next Week", "This Month"].map(
            (filter) => (
              <button
                key={filter}
                className={`px-4 py-2 border rounded-full text-sm font-medium ${
                  selectedFilter === filter
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform duration-300 hover:zoom-in"
              onMouseEnter={(e) => e.currentTarget.classList.add('zoom-in')}
              onMouseLeave={(e) => e.currentTarget.classList.remove('zoom-in')}
            >
              {/* Event Image with Date */}
              <div className="relative h-48">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                {event.date && event.date.includes(",") ? (
                  <div className="absolute top-2 right-2 bg-gray-900 text-white px-3 py-1 text-sm font-bold rounded-lg text-center">
                    {event.date.split(",")[0]} <br /> {event.date.split(",")[1].trim()}
                  </div>
                ) : (
                  <div className="absolute top-2 right-2 bg-gray-900 text-white px-3 py-1 text-sm font-bold rounded-lg text-center">
                    {event.date}
                  </div>
                )}
              </div>

              {/* Event Details */}
              <div className="p-4 flex flex-col flex-grow">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    event.category === "FREE" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {event.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">{event.title}</h3>

                <p className="text-gray-600 text-sm mt-1 mb-4 flex items-center whitespace-nowrap">
                  📅 {event.date}
                </p>
                <p className="text-gray-600 text-sm flex items-center">⏰ {event.time}</p>

                <Link to="#" className="text-blue-600 text-sm mt-2 block hover:underline">
                  ⭐ Join others in this event
                </Link>

                {/* Event Details Button */}
                <span
                  className="mt-4 block bg-gray-900 text-white text-center py-2 rounded-lg hover:bg-gray-800 cursor-pointer"
                >
                  Event Details →
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No events found for this filter.</p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;