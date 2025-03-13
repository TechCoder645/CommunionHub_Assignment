import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import UpcomingEvents from "./components/UpcomingEvents";
import CreateEvent from "./components/CreateEvent"; // Import CreateEvent
import initialEvents from "./data/events"; // Import initialEvents

const App = () => {
  const [events, setEvents] = useState(initialEvents);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route path="/events/upcoming" element={<UpcomingEvents events={events} />} />
        <Route path="/events/create" element={<CreateEvent addEvent={addEvent} />} /> {/* Add CreateEvent route */}
      </Routes>
    </Router>
  );
};

export default App;