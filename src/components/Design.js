import React, { useState } from 'react';

function Design() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [resumeOutput, setResumeOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeOutput(`
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
    `);
  };

  return (
    <div>
      <h1>Design Page</h1>
      <section id="resume-builder">
        <h2>Resume Builder</h2>
        <form id="resume-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <label htmlFor="experience">Experience:</label>
          <textarea id="experience" value={experience} onChange={(e) => setExperience(e.target.value)} required></textarea>
          <button type="submit">Create Resume</button>
        </form>
        <div id="resume-output" dangerouslySetInnerHTML={{ __html: resumeOutput }}></div>
      </section>
    </div>
  );
}

export default Design;
