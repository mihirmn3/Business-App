// ProductList.js
import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
        try {
        const response = await fetch('http://localhost:3000/product/all'); // Replace with your actual backend URL
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setProducts(data); // Update state with fetched users
        } catch (error) {
        console.error('Error fetching products:', error);
        }
    };

    fetchProducts(); // Invoke the fetch function when component mounts
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <ul className="space-y-4">
        {products.map(product => (
          <li key={product.productId} className="bg-white p-4 rounded shadow-md">
            <p className="font-bold">{product.name}</p>
            <p className="text-gray-600">{product.description}</p>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
