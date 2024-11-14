const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ message });
  };
  module.exports = errorHandler;