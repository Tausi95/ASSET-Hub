const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Route to register a new user
router.post('/register', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to log in an existing user
router.post('/login', async (req, res) => {
  try {
    const user = await loginUser(req.body);
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;

