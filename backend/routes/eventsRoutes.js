const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventsController');

const router = express.Router();

// Route to get all events
router.get('/', async (req, res) => {
  try {
    const events = await getEvents();
    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found." });
    }
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching events: " + error.message });
  }
});

// Route to create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = await createEvent(req.body); // Assuming createEvent handles the body validation
    res.status(201).json({ message: "Event created successfully.", event: newEvent });
  } catch (error) {
    res.status(400).json({ error: "An error occurred while creating the event: " + error.message });
  }
});

module.exports = router;

