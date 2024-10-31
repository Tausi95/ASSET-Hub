const express = require('express');
const { updateProfile, getProfilesWithConnections } = require('../controllers/profileController');

const router = express.Router();

// Route to get all profiles with their connections
router.get('/connections', async (req, res) => {
  try {
    const profiles = await getProfilesWithConnections();
    if (!profiles.length) {
      return res.status(404).json({ message: "No profiles found." });
    }
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching profiles: " + error.message });
  }
});

// Route to update profile based on role
router.put('/:role', async (req, res) => {
  try {
    const { role } = req.params;
    const updatedProfile = await updateProfile(role, req.body); // Assuming updateProfile takes role and body

    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found for the specified role." });
    }
    
    res.status(200).json({ message: "Profile updated successfully.", profile: updatedProfile });
  } catch (error) {
    res.status(400).json({ error: "An error occurred while updating the profile: " + error.message });
  }
});

module.exports = router;

