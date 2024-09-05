import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user'); // Default to 'user'
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      const userData = response.data.user;
      // Store user data in local storage
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', response.data.token); // Store token in local storage
      // Redirect or handle successful login
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
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
            <label className="block text-gray-700 mb-2">Login as:</label>
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
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
