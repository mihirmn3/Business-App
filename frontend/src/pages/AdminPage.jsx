// AdminPage.js
import React from 'react';
import UserList from '../components/UserList';
import ProductList from '../components/ProductList';

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <UserList />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
