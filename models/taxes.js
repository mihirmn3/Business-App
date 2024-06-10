const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxSchema = new Schema({
    taxId: {type: Number, required: true},
    taxName: {type: String, required: true},
    taxValue: {type: Number, required: true}
});

const Tax = mongoose.model('Tax', taxSchema);
module.exports = Tax;