// src/components/HamburgerMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-icon">
        ☰
      </button>
      {isOpen && (
        <nav className="menu">
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
            <li><Link to="/network" onClick={toggleMenu}>Network</Link></li>
            <li><Link to="/mentorship" onClick={toggleMenu}>Mentorship</Link></li>
            <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
            <li><Link to="/signup" onClick={toggleMenu}>Sign Up</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
