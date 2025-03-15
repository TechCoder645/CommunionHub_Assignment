import React, { useState } from "react";

const AddEventForm = ({ addEvent }) => {
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    category: "Social",
    image: "",
    location: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    capacityType: "Unlimited",
    capacity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.endDate < eventData.startDate || (eventData.endDate === eventData.startDate && eventData.endTime <= eventData.startTime)) {
      alert("End date/time must be after start date/time");
      return;
    }
    addEvent(eventData);
    setEventData({
      title: "",
      description: "",
      category: "Social",
      image: "",
      location: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      capacityType: "Unlimited",
      capacity: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Create Event</h2>
      <input type="text" name="title" placeholder="Event Title" value={eventData.title} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <textarea name="description" placeholder="Event Description" value={eventData.description} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <div className="flex gap-2 mb-2">
        <input type="text" name="category" placeholder="Category" value={eventData.category} onChange={handleChange} className="p-2 border" />
      </div>
      <input type="file" accept="image/*" onChange={(e) => handleChange({ target: { name: 'image', value: URL.createObjectURL(e.target.files[0]) } })} className="mb-2" />
      {eventData.image && <img src={eventData.image} alt="Preview" className="w-32 h-32 object-cover mb-2" />}
      <input type="text" name="location" placeholder="Location" value={eventData.location} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <input type="date" name="startDate" value={eventData.startDate} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <input type="time" name="startTime" value={eventData.startTime} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <input type="date" name="endDate" value={eventData.endDate} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <input type="time" name="endTime" value={eventData.endTime} onChange={handleChange} className="w-full p-2 border mb-2" required />
      <div className="mb-2">
        <label className="mr-2">Capacity:</label>
        <select name="capacityType" value={eventData.capacityType} onChange={handleChange} className="p-2 border">
          <option value="Unlimited">Unlimited</option>
          <option value="Limited">Limited</option>
        </select>
        {eventData.capacityType === "Limited" && (
          <input type="number" name="capacity" placeholder="Capacity" value={eventData.capacity} onChange={handleChange} className="p-2 border ml-2" required />
        )}
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2">Create Event</button>
    </form>
  );
};

export default AddEventForm;