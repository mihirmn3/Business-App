// Import required modules
const Business = require('../models/business.js');
const generateId = require('../utils/generateId.js');

class BusinessController {
  // Controller function to get all businesss
  static getAllBusinesses = async (req, res) => {
    try {
      const businesss = await Business.find(); // Fetch all businesss from the database
      res.status(200).json(businesss); // Send businesss as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching businesses', error }); // Handle errors
    }
  };

  // Controller function to get a business by ID
  static getBusinessById = async (req, res) => {
    try {
      const id = req.body.businessId;
      const business = await Business.findOne({businessId : id});
      res.status(200).json(business); // Send business as JSON response
    } catch (error) {
      res.status(500).json({ message: 'Error fetching business', error }); // Handle errors
    }
  };

  // Controller function to create a new business
  static createBusiness = async (req, res) => {
    try {
      let newId = await generateId(Business);
      const { name, email, hashedPassword } = req.body;
      // Create a new business object
      const business = await Business.create({
        businessId: newId,
        name: name,
        mailId: email,
        password: hashedPassword,
      });

      res.status(201).json(business); // Send the saved business as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Error creating business', error }); // Handle validation errors
    }
  };

  // Controller function to update a business by ID
  static updateBusiness = async (req, res) => {
    try {
      res.status(200).json(updatedBusiness); // Send updated business as JSON response
    } catch (error) {
      res.status(400).json({ message: 'Error updating business', error }); // Handle validation errors
    }
  };

  // Controller function to delete a business by ID
  static deleteBusiness = async (req, res) => {
    try {
      const id = req.body.businessId;
      await Business.deleteOne({businessId : id});
      res.status(200).json({ message: 'Business deleted' }); // Send confirmation message
    } catch (error) {
      res.status(500).json({ message: 'Error deleting business', error }); // Handle errors
    }
  };

  static deleteAllBusinesses = async (req, res) => {
    try { 
      await Business.deleteMany([]);
      res.status(200).json({ message: 'All businesses deleted' }); // Send confirmation message
    }
    catch (error) {
      res.status(500).json({ message: 'Error deleting business', error }); // Handle errors
    }
  }
}
// Export controller functions
module.exports = BusinessController;
