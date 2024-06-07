const mongoose = require('mongoose')
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  itemId: {type: Number, required: true},
  name: {type: String, required: true},
  type: {type: String, required: true},
  price: {type: Number, required: true},
  description: String,
  image: String
});

const Item = model('Item', itemSchema);
module.exports = Item;