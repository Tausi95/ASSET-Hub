// src/components/About.js
import React from 'react';
import './About.css';

const teamMembers = [
  {
    name: 'Member 1',
    linkedin: 'https://linkedin.com/in/member1',
    github: 'https://github.com/member1',
    twitter: 'https://twitter.com/member1'
  }
/*
    name: 'Member 2',
    linkedin: 'https://linkedin.com/in/member2',
    github: 'https://github.com/member2',
    twitter: 'https://twitter.com/member2'
  */
  // Add more members as needed
];

const About = () => {
  return (
    <section className="about">
      <h2>About STEMProlinks</h2>
      <p>
        STEMProlinks was inspired by the need to connect STEM professionals and
        provide opportunities for mentorship, networking, and career development.
        This project is a portfolio project for Holberton School, showcasing our skills
        and dedication to building impactful solutions.
      </p>
      <h3>Team Members</h3>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <p>{member.name}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
        ))}
      </ul>
      <a href="https://github.com/Tausi95/STEMProlinks" target="_blank" rel="noopener noreferrer">
        View the project on GitHub
      </a>
    </section>
  );
};

export default About;
