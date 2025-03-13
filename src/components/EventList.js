import React from 'react';

const EventList = ({ events }) => (
  <ul>
    {events.map(event => (
      <li key={event.id}>
        <h2>{event.title}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
      </li>
    ))}
  </ul>
);

export default EventList;