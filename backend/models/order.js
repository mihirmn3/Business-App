const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  quantity: { type: Number, required: true, min: 1 }
});

const orderSchema = new Schema({
  orderId: { type: Number, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: { type: [orderItemSchema], required: true },
  bill: { type: String, required: true }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;