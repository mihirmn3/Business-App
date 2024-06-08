const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
    taxName: {type: String, required: true},
    taxValue: {type: Number, required: true}
});

const Tax = mongoose.model('Tax', taxSchema);
module.exports = Tax;