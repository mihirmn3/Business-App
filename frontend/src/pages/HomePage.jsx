import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/HomepageHeader';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    var storedUser = JSON.parse(localStorage.getItem('user'));
    // storedUser = JSON.parse(storedUser)
    setUser(storedUser);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  // Dummy transactions data with date and time
  const transactions = [
    {
      business: 'Tech Store',
      product: 'Laptop',
      cost: 1200,
      creditTaken: 200,
      dateTime: '2024-08-01T14:30:00Z'
    },
    {
      business: 'Book Haven',
      product: 'Novel',
      cost: 15,
      creditTaken: 5,
      dateTime: '2024-08-02T09:15:00Z'
    },
    {
      business: 'Home Goods',
      product: 'Blender',
      cost: 75,
      creditTaken: 0,
      dateTime: '2024-08-03T18:45:00Z'
    },
  ];

  // Calculate pending credit and total transactions
  const totalCost = transactions.reduce((acc, curr) => acc + curr.cost, 0);
  const totalCredit = transactions.reduce((acc, curr) => acc + curr.creditTaken, 0);
  const pendingCredit = totalCost - totalCredit;
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Home Page</h1>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Profile</h2>
          <div className="flex items-center">
            <img
              src={user.profilePicture || 'https://avatar.iran.liara.run/public/26'}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-6"
            />
            <div>
              <p className="text-lg font-medium">Name: {user.name}</p>
              <p className="text-lg">Email: {user.mailId}</p>
            </div>
          </div>
        </div>

        {/* Transaction table */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Previous Transactions</h2>
          <div className="mb-4">
            <p className="text-lg font-medium">Pending Credit: Rs.{pendingCredit.toFixed(2)}</p>
            <p className="text-lg font-medium">Total Transactions: Rs.{totalCost.toFixed(2)}</p>
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4">Business</th>
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Cost</th>
                <th className="py-2 px-4">Credit Taken</th>
                <th className="py-2 px-4">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{transaction.business}</td>
                  <td className="py-2 px-4">{transaction.product}</td>
                  <td className="py-2 px-4">Rs.{transaction.cost.toFixed(2)}</td>
                  <td className="py-2 px-4">Rs.{transaction.creditTaken.toFixed(2)}</td>
                  <td className="py-2 px-4">{new Date(transaction.dateTime).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
