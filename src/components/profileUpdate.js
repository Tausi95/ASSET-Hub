// profileUpdate.js
import axios from 'axios';

// Update Profile Function
export const updateProfile = async (role, formData) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/profile/role/${role}`, formData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};

