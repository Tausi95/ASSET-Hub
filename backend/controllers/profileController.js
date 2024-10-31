const Profile = require('../models/Profile');

const getProfilesWithConnections = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      include: [{ model: Profile, as: 'connections' }]
    });
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { role } = req.params;
    const profileData = req.body;

    const [updatedRows] = await Profile.update(profileData, {
      where: { role },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ message: 'Profile not found or no changes detected' });
    }

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  getProfilesWithConnections,
  updateProfile,
};

