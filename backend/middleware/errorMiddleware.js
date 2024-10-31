// errorMiddleware.js
// Middleware to handle 404 errors
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error); // Pass the error to the next middleware
};

// Middleware to handle general errors
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Set status code
  res.status(statusCode);
  res.json({
    message: err.message, // Send error message
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Include stack trace if not in production
  });
};

module.exports = { notFound, errorHandler }; // Export error handling middleware
