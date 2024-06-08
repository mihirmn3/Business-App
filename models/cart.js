const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const cartSchema = new mongoose.Schema({
  cartId: { type: Number, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [cartItemSchema],
  total: {type: Number, required: true}
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
