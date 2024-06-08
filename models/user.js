const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId : { type: Number, required: true, unique: true },
    name: { type: String, required: true},
    mailId: { type: String, required: true},
    company: { type: Schema.Types.ObjectId, ref: 'Company'},
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order'}],
    credit: { type: Number, required: true}
})

const User = mongoose.model('User', userSchema);
module.exports = User;