// database.js

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/stemprolinks_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Check connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
}).on('error', (error) => {
  console.log('Connection error:', error);
});
