const express = require('express');
const router = express.Router();
const { Mentor } = require('../models');

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.findAll();
    if (mentors.length === 0) {
      return res.status(404).json({ message: "No mentors found." });
    }
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching mentors: " + error.message });
  }
});

// Get mentors by field
router.get('/:field', async (req, res) => {
  try {
    const mentors = await Mentor.findAll({ where: { field: req.params.field } });
    if (mentors.length === 0) {
      return res.status(404).json({ message: `No mentors found in the field: ${req.params.field}.` });
    }
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching mentors: " + error.message });
  }
});

module.exports = router;

