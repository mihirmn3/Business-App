// src/components/Signup.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs'

var secretKey = "secret"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [userType, setUserType] = useState('user'); // Default to 'user'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      name,
      email,
      hashedPassword
    };

    try {
      var response
      if (userType == 'user'){
        response = await fetch('http://localhost:3000/user/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
      } else {
        response = await fetch('http://localhost:3000/business/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
      }
      if (response.ok) {
        // Handle success (e.g., redirect to login page)
        alert('User/Business created successfully!');
      } else {
        // Handle errors
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Sign Up as:</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="user">User</option>
              <option value="business">Business Owner</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
