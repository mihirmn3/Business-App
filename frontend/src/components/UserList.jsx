// UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
        try {
        const response = await fetch('http://localhost:3000/user/all'); // Replace with your actual backend URL
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Update state with fetched users
        } catch (error) {
        console.error('Error fetching users:', error);
        }
    };

    fetchUsers(); // Invoke the fetch function when component mounts
    }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="space-y-4">
        {users.map(user => (
          <li key={user.userId} className="bg-white p-4 rounded shadow-md">
            <p className="font-bold">{user.name}</p>
            <p className="text-gray-600">{user.mailId}</p>
            {/* Add more user details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
