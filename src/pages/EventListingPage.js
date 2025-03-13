import React, { useState } from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';
import EventFilter from '../components/EventFilter';
import AddEventForm from '../components/AddEventForm';

const EventListingPage = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddEvent = (event) => {
    setEvents([...events, { ...event, id: events.length + 1 }]);
  };

  const filteredEvents = filter
    ? events.filter(event => event.category === filter)
    : events;

  return (
    <div>
      <Header />
      <EventFilter
        categories={['Religious', 'Social', 'Charity']}
        onFilter={setFilter}
      />
      <EventList events={filteredEvents} />
      <AddEventForm onAddEvent={handleAddEvent} />
    </div>
  );
};

export default EventListingPage;