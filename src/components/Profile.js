import React, { useState, useEffect } from 'react';
import { updateProfile } from './profileUpdate'; // Import the updateProfile function
import './Profile.css';
import axios from 'axios';

function Profile() {
  const [role, setRole] = useState('student');
  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/api/profile/${role}`)
      .then(response => {
        setProfileData(response.data);
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, [role]);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(role, formData);
      alert('Profile updated successfully');
      setProfileData(formData); // Update profileData with formData
    } catch (error) {
      alert('Error updating profile');
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="role-selection">
        <button onClick={() => handleRoleChange('student')}>Student</button>
        <button onClick={() => handleRoleChange('mentor')}>Mentor</button>
        <button onClick={() => handleRoleChange('event_creator')}>Event Creator</button>
      </div>

      {/* Conditional rendering based on role */}
      {role === 'student' && (
        <div className="profile-section">
          <h2>Student Profile</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Learning Goals:
              <input
                type="text"
                name="learningGoals"
                value={formData.learningGoals || ''}
                onChange={handleChange}
                placeholder="Enter your learning goals"
              />
            </label>
            <label>
              Preferred Mentor:
              <input
                type="text"
                name="preferredMentor"
                value={formData.preferredMentor || ''}
                onChange={handleChange}
                placeholder="Choose a mentor"
              />
            </label>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}

      {role === 'mentor' && (
        <div className="profile-section">
          <h2>Mentor Profile</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Availability:
              <input
                type="text"
                name="availability"
                value={formData.availability || ''}
                onChange={handleChange}
                placeholder="Enter available times"
              />
            </label>
            <label>
              Bio:
              <textarea
                name="bio"
                value={formData.bio || ''}
                onChange={handleChange}
                placeholder="Write a short bio"
              ></textarea>
            </label>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}

      {role === 'event_creator' && (
        <div className="profile-section">
          <h2>Event Creator Profile</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Event Name:
              <input
                type="text"
                name="eventName"
                value={formData.eventName || ''}
                onChange={handleChange}
                placeholder="Enter event name"
              />
            </label>
            <label>
              Event Date:
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate || ''}
                onChange={handleChange}
              />
            </label>
            <label>
              Event Description:
              <textarea
                name="eventDescription"
                value={formData.eventDescription || ''}
                onChange={handleChange}
                placeholder="Describe the event"
              ></textarea>
            </label>
            <button type="submit">Create Event</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Profile;

