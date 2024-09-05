const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId : { type: Number, required: true, unique: true },
    name: { type: String, required: true},
    mailId: { type: String, required: true},
    password: { type: String, required: true},
    company: { type: Schema.Types.ObjectId, ref: 'Company'},
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order'}],
    cart: { type: Schema.Types.ObjectId, ref: 'Cart', required: true },
    credit: { type: Number, required: true, default: 0}
})

const User = mongoose.model('User', userSchema);
module.exports = User;