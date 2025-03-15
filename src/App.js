import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import UpcomingEvents from "./components/UpcomingEvents";
import CreateEvent from "./components/CreateEvent"; 
import Footer from "./components/Footer"; 
import About from "./components/About"; // Import the About component
import initialEvents from "./data/events"; 

const App = () => {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (newEvent) => {
    // Format the date and time to match the expected format
    const dateObj = new Date(newEvent.startDate);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    // Convert 24-hour time format to 12-hour format with AM/PM
    const timeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' };
    const formattedTime = new Date(`${newEvent.startDate}T${newEvent.startTime}`).toLocaleTimeString('en-US', timeFormatOptions) + " IST";
    
    const eventWithId = { 
      ...newEvent, 
      id: events.length + 1,
      date: formattedDate,
      time: formattedTime,
      // Keep other fields that are needed by UpcomingEvents
      category: newEvent.category.toUpperCase()
    };
    
    console.log("Adding event:", eventWithId);
    setEvents([...events, eventWithId]);
  };


  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={
          <div>
            <HeroSection />
            <About /> {/* Include the About component on the main page */}
          </div>
        } />
        <Route path="/events/upcoming" element={<UpcomingEvents events={events} />} />
        <Route path="/events/create" element={<CreateEvent addEvent={addEvent} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
