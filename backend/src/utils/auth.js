// auth.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = 'secret'; // Replace with your actual secret key

// Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.mailId},
    SECRET_KEY,
    { expiresIn: '1h' } // Token expiration
  );
};

// Verify JWT Token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
