const express = require('express');
const { getConnections, addConnection } = require('../controllers/networkController');

const router = express.Router();

// Route to get all connections
router.get('/', async (req, res) => {
  try {
    const connections = await getConnections();
    if (connections.length === 0) {
      return res.status(404).json({ message: "No connections found." });
    }
    res.status(200).json(connections);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching connections: " + error.message });
  }
});

// Route to add a new connection
router.post('/', async (req, res) => {
  try {
    const newConnection = await addConnection(req.body); // Assuming addConnection handles the creation logic
    res.status(201).json({ message: "Connection added successfully.", connection: newConnection });
  } catch (error) {
    res.status(400).json({ error: "An error occurred while adding the connection: " + error.message });
  }
});

module.exports = router;

