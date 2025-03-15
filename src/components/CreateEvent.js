import React from "react";
import AddEventForm from "./AddEventForm";

const CreateEvent = ({ addEvent }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-8">
          Create a New Event
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-600 font-bold mt-2">
          Fill in the details to create your event
        </h2>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          Fill out the form below with the key details about your event, 
          including date, location, and highlights. Make it engaging to 
          attract your audience and ensure everything is set for a successful launch.
        </p>
      </div>

      {/* Trusted By Section */}
      <div className="mt-6 flex items-center">
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="User 1"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="User 2"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/women/3.jpg"
            alt="User 3"
          />
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="User 4"
          />
        </div>
        <p className="ml-4 text-gray-700 font-medium">
          <span className="font-bold">Trusted by Over 15k+</span> Individuals Worldwide.
        </p>
      </div>

      {/* Explore Events Button */}
      <div className="mt-6">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-700 transition">
          Explore Events →
        </button>
      </div>

      {/* Event Form */}
      <div className="mt-10">
        <AddEventForm addEvent={addEvent} />
      </div>
    </div>
  );
};

export default CreateEvent;
