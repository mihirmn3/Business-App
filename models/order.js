const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    itemId: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    quantity: { type: Number, required: true, min: 1 }
  });

const orderSchema = new Schema({
    orderId: {type: Number, required: true, unique: true},
    items: [{type: orderItemSchema, required: true}],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    bill: {type: String, required: true}
});

const Order = model('Order', orderSchema);
module.exports = Order;