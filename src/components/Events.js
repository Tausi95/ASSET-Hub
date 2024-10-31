import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [externalEvents, setExternalEvents] = useState([]);

  useEffect(() => {
    // Fetch upcoming events
    axios.get('http://localhost:5000/api/events/upcoming')
      .then(response => {
        setUpcomingEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching upcoming events:', error);
      });

    // Fetch external events
    axios.get('http://localhost:5000/api/events/external')
      .then(response => {
        setExternalEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching external events:', error);
      });
  }, []);

  const handleAttendEvent = (eventId) => {
    axios.post(`http://localhost:5000/api/events/attend/${eventId}`)
      .then(response => {
        alert('Successfully registered for the event!');
        // Optionally update the state to reflect the change
      })
      .catch(error => {
        console.error('Error registering for event:', error);
      });
  };

  const handleSubscribeWebinars = () => {
    axios.post('http://localhost:5000/api/webinars/subscribe')
      .then(response => {
        alert('Subscribed to webinars successfully!');
      })
      .catch(error => {
        console.error('Error subscribing to webinars:', error);
      });
  };

  const handleShowcaseProject = () => {
    // Implement project showcasing logic
    alert('Feature not yet implemented.');
  };

  return (
    <div className="events-container">
      <h1>Events</h1>
      <p>Discover upcoming STEM events. Participate in live webinars, attend expos, and showcase your projects!</p>

      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
          {upcomingEvents.map(event => (
            <li key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <button
                className="attend-btn"
                onClick={() => handleAttendEvent(event.id)}
              >
                Attend
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="live-webinars">
        <h2>Live Webinars & Scheduled Events</h2>
        <p>Subscribe to live events and participate in scheduled webinars.</p>
        <button className="subscribe-btn" onClick={handleSubscribeWebinars}>
          Subscribe to Webinars
        </button>
      </section>

      <section className="innovation-showcase">
        <h2>Innovation Showcase</h2>
        <p>Explore projects showcased by mentors and students.</p>
        <ul className="showcase-list">
          <li>AI-driven medical diagnosis tool by Dr. Sarah Lee</li>
          <li>Renewable energy solutions for rural areas by John Doe</li>
        </ul>
        <button className="showcase-btn" onClick={handleShowcaseProject}>
          Showcase Your Project
        </button>
      </section>

      <section className="external-events">
        <h2>External Events</h2>
        <p>Discover more STEM events from external platforms.</p>
        <ul className="event-list">
          {externalEvents.map(event => (
            <li key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.description}</p>
              <button
                className="attend-btn"
                onClick={() => handleAttendEvent(event.id)}
              >
                Attend
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Events;

