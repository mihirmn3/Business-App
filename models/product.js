const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: {type: Number, required: true, unique: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: Number, required: true, default: 0},
  description: String,
  image: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;