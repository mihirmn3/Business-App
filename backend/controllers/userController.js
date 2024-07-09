// Import required modules
const User = require('../models/user.js'); // Import the User model
const Cart = require('../models/cart.js');
const generateId = require('../utils/generateId.js');

class UserController {
  // Controller function to get all users
  static getAllUsers = async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the database
      res.status(200).json(users); // Send users as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users', error }); // Handle errors
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

  // Controller function to create a new user
  static createUser = async (req, res) => {
    try {
      let newId = await generateId(User);
      let newCartId = await generateId(Cart);
      const { name, mailId } = req.body;
      const newCart = await Cart.create({
        cartId : newCartId
      });
      // Create a new user object
      const user = await User.create({
        userId: newId,
        name: name,
        mailId: mailId,
        cart: newCart
      });

      res.status(201).json(user); // Send the saved user as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error }); // Handle validation errors
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
module.exports = UserController;
