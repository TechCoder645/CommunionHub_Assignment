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
    setEvents([...events, newEvent]);
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