const requestIP = require("request-ip");

const ipMiddleware = (req, res, next) => {
  try {
    const clientIP = requestIP.getClientIp(req);
    req.clientIP = clientIP; // Optionally, you can attach the IP to the request object for later use
    next(); // Call next to move to the next middleware or route handler
  } catch (error) {
    // Handle the error if necessary
    console.error("Error getting client IP:", error);
    next(error); // Pass the error to the error handling middleware
  }
};

ipMiddleware();
