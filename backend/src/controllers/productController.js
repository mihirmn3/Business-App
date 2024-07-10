const Product = require('../models/product.js');
const generateId = require('../utils/generateId.js');

class ProductController {
    // Controller function to get all products
    static getAllProducts = async (req, res) => {
      try {
        const products = await Product.find(); // Fetch all products from the database
        res.status(200).json(products); // Send products as JSON response
      } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error }); // Handle errors
      }
    };
  
    // Controller function to get a user by ID
    static getUserById = async (req, res) => {
      try {
        const id = req.body.userId;
        const user = await User.findOne({userId : id});
        res.status(200).json(user); // Send user as JSON response
      } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error }); // Handle errors
      }
    };
  
    // Controller function to create a new product
    static createProduct = async (req, res) => {
      try {
        let newId = await generateId(Product);
        const { name, type, description } = req.body;
        // Create a new product object
        const product = await Product.create({
          productId: newId,
          name: name,
          type: type,
          description: description
        });
  
        res.status(201).json(product); // Send the saved product as JSON response
      } catch (error) {
        res.status(400).json({ message: 'Error creating product', error }); // Handle validation errors
      }
    };
  
    // Controller function to update a user by ID
    static updateUser = async (req, res) => {
      try {
        res.status(200).json(updatedUser); // Send updated user as JSON response
      } catch (error) {
        res.status(400).json({ message: 'Error updating user', error }); // Handle validation errors
      }
    };
  
    // Controller function to delete a user by ID
    static deleteUser = async (req, res) => {
      try {
        const id = req.body.userId;
        await User.deleteOne({userId : id});
        res.status(200).json({ message: 'User deleted' }); // Send confirmation message
      } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error }); // Handle errors
      }
    };
  
    static deleteAllUsers = async (req, res) => {
      try { 
        await User.deleteMany([]);
        res.status(200).json({ message: 'All users deleted' }); // Send confirmation message
      }
      catch (error) {
        res.status(500).json({ message: 'Error deleting user', error }); // Handle errors
      }
    }
  }
  // Export controller functions
  module.exports = ProductController;