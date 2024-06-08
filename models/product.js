const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productId: {type: Number, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: Number, required: true},
  description: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;