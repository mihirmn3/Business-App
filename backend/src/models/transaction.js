const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  cost: { type: Number, required: true },
  credit: { type: Number, required: true }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
