// src/components/About.js
import React from 'react';
import './About.css';
// Import social media icons
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Chancy Tsonga', // Updated with your name
    linkedin: 'https://linkedin.com/in/TausiTsonga',
    github: 'https://github.com/Tausi95',
    twitter: 'https://twitter.com/ChancyTausi',
    role: 'Develope ',
    photo: 'path/to/your/photo.jpg' // Optional: Add a path to your photo
  }
];

const About = () => {
  return (
    <section className="about">
      <h2>About ASSETHub </h2>
      <p>
         ASSETHub is an online learning  platform dedicated to assisting highschool learneris,
	 connecting STEM professionals, mentorship and career development opportunities. This project is part of
        ASSET learnership and training to building real life skills, showcasing real-world skills and a passion for building 
        innovative solutions
      </p>

      <h3>Our Mission</h3>
      <p>
        Our goal is to provide education to underpriviledge commuities, at the ASSETH:ub we 
        learn, and grow together. Whether you're a student looking for guidance or an expert 
        willing to mentor, ASSETHub bridges the gap between talent and opportunity.
      </p>

      <h3>Team Member</h3>
      <ul className="team-list">
        {teamMembers.map((member, index) => (
          <li key={index} className="team-member">
            <img src={member.photo} alt={member.name} className="team-photo" /> {/* Optional */}
            <div>
              <p className="team-name">{member.name} - {member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a>
            </div>
          </li>
        ))}
      </ul>

      <a href="https://github.com/Tausi95/STEMProlinks" target="_blank" rel="noopener noreferrer" className="github-link">
        View the project on GitHub
      </a>
    </section>
  );
};

export default About;

