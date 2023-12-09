const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    CustName: {
        type: String
    },
    PhoneNo: {
        type : Number
    },
    Pan_No: {
        type: Number
    },
    Address: {
        type: String
    }
}, {timestamps: true});

const CustomerModel = mongoose.model('Customer', CustomerSchema)
module.exports = CustomerModel;