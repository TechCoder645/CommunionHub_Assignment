import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventListingPage from './pages/EventListingPage';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/events" element={<EventListingPage />} />
    </Routes>
  </Router>
);

export default App;