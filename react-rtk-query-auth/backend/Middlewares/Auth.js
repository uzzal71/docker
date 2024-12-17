const jwt = require("jsonwebtoken");

// Secret key for JWT (store securely in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || "57016d0cb37efdb522d59a7a7140c8fb9982619bd45b944b9fbc7fab41a8457d";

const authenticate = (req, res, next) => {
  // Get the token from the Authorization header
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or invalid." });
  }

  const token = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the user information to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token.", error: error.message });
  }
};

module.exports = authenticate;
