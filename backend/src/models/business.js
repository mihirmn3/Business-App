const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    businessId : { type: Number, required: true, unique: true },
    name: { type: String, required: true},
    mailId: { type: String, required: true},
    password: { type: String, required: true},
    products: [{ type: Schema.Types.ObjectId, ref: 'Product'}],
    buyers: [{
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        productsBought: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }]
      }]
}) 

const Business = mongoose.model('Business', businessSchema);
module.exports = Business;