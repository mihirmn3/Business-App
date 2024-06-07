const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  itemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const cartSchema = new Schema({
  cartId: { type: Number, required: true, unique: true },
  items: [cartItemSchema],
  total: {type: Number, required: true}
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
