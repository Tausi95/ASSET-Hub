const Mentor = require('../models/Mentor'); // Sequelize model

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.findAll();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

const applyForMentorship = async (req, res) => {
  try {
    const applicationData = req.body;
    // Handle application logic here (e.g., save to the database)
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getMentors,
  applyForMentorship,
};

