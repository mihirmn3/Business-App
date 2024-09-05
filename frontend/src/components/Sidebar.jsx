import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/login')
    }
  return (
    <div className="w-64 bg-gray-800 text-white h-full fixed top-0 left-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul>
          <li className="mb-4">
            <Link to="/settings" className="block text-gray-300 hover:bg-gray-700 p-2 rounded">
              Settings
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="block text-gray-300 hover:bg-gray-700 p-2 rounded">
              View Profile
            </Link>
          </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 rounded text-white"
          >
            Logout
          </button>
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
