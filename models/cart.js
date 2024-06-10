const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const cartSchema = new Schema({
  cartId: { type: Number, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  products: [cartItemSchema],
  total: {type: Number, required: true, default: 0}
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;
