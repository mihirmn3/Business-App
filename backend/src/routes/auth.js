// src/routes/auth.js
const express = require('express');
const router = express.Router();
const { generateToken } = require('../utils/auth');
const bcrypt = require('bcryptjs')
const User = require('../models/user.js');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
    console.log('here')
  try {
    const user = await User.findOne({ mailId: email });
    console.log(user)
    if (!user || !(await bcrypt.compare(password, user.password))) {
        console.log("login error")
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    console.log("generating token")
    const token = generateToken(user);
    console.log("token generated")
    res.json({ token: token, user: user});
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

module.exports = router;
