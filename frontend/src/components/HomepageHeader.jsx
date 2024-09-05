import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        Business App
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search for products"
          className="p-2 rounded border border-gray-300 mr-4"
        />
        <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition-colors">
          <span className="text-white text-lg">🛒</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
