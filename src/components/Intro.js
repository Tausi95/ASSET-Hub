// src/components/Intro.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css';
import introVideo from '../assets/intro-video.mp4'; // Import your video file

const Intro = () => {
  return (
    <section className="intro">
      <div className="video-container">
        {/* Embed local video */}
        <video width="100%" height="auto" controls>
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1>ASSETHub</h1>
      <p>Your gateway to STEM professional networking and opportunities.</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <button><Link to="/app">Visit the Application</Link></button>
    </section>
  );
};

export default Intro;