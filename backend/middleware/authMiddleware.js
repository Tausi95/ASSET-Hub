// server.js
const express = require('express'); // Import Express
const dotenv = require('dotenv'); // Import dotenv for environment variables
const connectDB = require('./config/db'); // Import the database connection function
const userRoutes = require('./routes/userRoutes'); // Import user routes
const { notFound, errorHandler } = require('./middleware/errorMiddleware'); // Import error handling middleware

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to MongoDB

const app = express(); // Initialize Express app
app.use(express.json()); // Middleware to parse JSON bodies

// Define routes
app.use('/api/users', userRoutes); // Routes for user-related actions

// Error handling middleware
app.use(notFound); // Handle 404 errors
app.use(errorHandler); // General error handler

const PORT = process.env.PORT || 5000; // Set the server port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start the server
