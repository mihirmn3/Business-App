const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyId: { type: Number, required: true, unique: true},
    name: { type: String, required: true},
    mail: { type: String, required: true},
    employees: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;