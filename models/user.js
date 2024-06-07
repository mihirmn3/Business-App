const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId : { type: Number, required: true, unique: true },
    name: { type: String, required: true},
    mailId: { type: String, required: true},
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order'}]
})

const User = model('User', userSchema);
module.exports = User;