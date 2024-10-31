import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Mentorship.css';

const fieldsOfInterest = [
  'Mathematics',
  'Physics',
  'Biology',
  'Chemistry',
  'Economics',
  'Accounting',
  'Software Engineering',
  'Bio-Informatics',
  'Quantity Survey',
  'Medicine',
  'Civil Engineering',
  'Data Science',
  'Mechanical Engineering'
];

function Mentorship() {
  const [selectedField, setSelectedField] = useState('');
  const [mentors, setMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFieldChange = async (event) => {
    const field = event.target.value;
    setSelectedField(field);

    if (field) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/mentors?field=${field}`);
        setMentors(response.data);
      } catch (err) {
        setError('Failed to fetch mentors');
      } finally {
        setLoading(false);
      }
    } else {
      setMentors([]);
    }
  };

  return (
    <div className="mentorship-container">
      <h1>Find Your Mentor</h1>
      <p>
        Select your field of interest to connect with experienced mentors who can help guide your journey.
      </p>
      <div className="field-selection">
        <label htmlFor="field">Choose your field of interest:</label>
        <select id="field" value={selectedField} onChange={handleFieldChange}>
          <option value="">-- Select Field --</option>
          {fieldsOfInterest.map((field, index) => (
            <option key={index} value={field}>{field}</option>
          ))}
        </select>
      </div>
      {selectedField && (
        <div className="selected-field-info">
          <h2>Mentors for {selectedField}</h2>
          {loading ? (
            <p>Loading mentors...</p>
          ) : error ? (
            <p>{error}</p>
          ) : mentors.length > 0 ? (
            <ul className="mentor-list">
              {mentors.map((mentor, index) => (
                <li key={index} className="mentor-item">
                  <strong>{mentor.name}</strong> - {mentor.profession}
                  <button className="connect-btn">Connect</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No mentors found for this field.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Mentorship;

