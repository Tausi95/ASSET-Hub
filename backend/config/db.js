require('dotenv').config(); // Load environment variables from .env at the very top
const { Sequelize } = require('sequelize');

// Check if all required environment variables are set
if (!process.env.DB_DATABASE || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_DIALECT) {
  console.error('One or more required environment variables are missing. Please check your .env file.');
  process.exit(1);
}

// Create a new Sequelize instance using environment variables from .env
const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Database name
  process.env.DB_USERNAME, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Hostname
    port: process.env.DB_PORT || 3306, // MySQL port, default to 3306
    dialect: process.env.DB_DIALECT || 'mysql', // Dialect to use, default to MySQL
    logging: false, // Disable SQL logging (optional)
  }
);

// Function to connect to MySQL database
const connectDB = async () => {
  try {
    // Test the connection
    await sequelize.authenticate();
    console.log('MySQL Database connected successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
    process.exit(1); // Exit with failure
  }
};

// Export the sequelize instance and the connect function
module.exports = { connectDB, sequelize };

