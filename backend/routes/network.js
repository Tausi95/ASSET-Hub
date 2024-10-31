const express = require('express');
const router = express.Router();
const { Profile } = require('../models');

// Get all profiles (network of students, mentors, etc.)
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

