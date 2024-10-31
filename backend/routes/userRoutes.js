const express = require('express'); // Import Express
const { registerUser, authUser } = require('../controllers/userController'); // Import user controller functions

const router = express.Router(); // Create router

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const user = await registerUser(req.body); // Assuming registerUser returns user data
    res.status(201).json({ message: "User registered successfully.", user });
  } catch (error) {
    res.status(400).json({ error: "Registration failed: " + error.message });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const token = await authUser(req.body); // Assuming authUser returns a token
    res.status(200).json({ message: "Login successful.", token });
  } catch (error) {
    res.status(401).json({ error: "Login failed: " + error.message });
  }
});

// Optional: Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ message: "User API is running properly." });
});

module.exports = router; // Export the router

