import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Replaced useHistory with useNavigate
import './Home.css';

function Home() {
  const [isAuthenticated] = useState(false); // Removed setIsAuthenticated since it’s not used
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  const handleLogin = () => {
    navigate('/login'); // Redirect to the login page
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to ASSETHub</h1>
        <p>Your gateway to connecting with STEM professionals, educators, and students.</p>

        {isAuthenticated ? (
          // Show search form only if logged in
          <form className="search-form">
            <input
              type="text"
              placeholder="Search for mentors, events, or topics..."
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        ) : (
          // Show login/sign-up buttons if not authenticated
          <div className="auth-buttons">
            <button className="auth-btn login" onClick={handleLogin}>Login</button>
            <button className="auth-btn signup" onClick={handleSignUp}>Sign Up</button>
          </div>
        )}
      </header>

      {isAuthenticated ? (
        // Only show this content if the user is authenticated
        <>
          <section className="cta-section">
            <h2>Explore ASSETHub</h2>
            <div className="cta-buttons">
              <button className="cta-btn" onClick={() => navigate("/mentorship")}>Find a Mentor</button>
              <button className="cta-btn" onClick={() => navigate("/events")}>Discover Events</button>
              <button className="cta-btn" onClick={() => navigate("/network")}>Join the Network</button>
            </div>
          </section>

          <section className="highlights-section">
            <h2>Platform Highlights</h2>
            <div className="highlights">
              <div className="highlight">
                <h3>Mentorship Opportunities</h3>
                <p>Connect with experienced STEM professionals to guide your career journey.</p>
              </div>
              <div className="highlight">
                <h3>Networking</h3>
                <p>Build your professional network and collaborate with peers in your field.</p>
              </div>
              <div className="highlight">
                <h3>STEM Events & Webinars</h3>
                <p>Attend live webinars, conferences, and workshops to stay ahead in STEM.</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        // Show message for non-authenticated users
        <section className="restricted-access">
          <h2>Explore ASSETHub</h2>
          <p>Please <span className="login-link" onClick={handleLogin}>log in</span> or <span className="signup-link" onClick={handleSignUp}>sign up</span> to access mentorship, events, and networking features.</p>
        </section>
      )}
    </div>
  );
}

export default Home;