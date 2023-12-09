const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillSchema = new Schema({
    Items: {
        type: [{
            OrnamentType : { type: String },
            Weight : { type: Number },
            MackingCharge : { type: Number },
            Sgst : { type: Number },
            Cgst : { type: Number },
            Amount : { type: Number }
        }],
        default: []
    },
    AddCharges: {
        type: [{
            ChargeType: { type: String },
            ChargeAmount: { type: Number }
        }],
        default: []
    },
    PaymentMode: {
        type : String
    },
    TotalAmount: {
        type: Number
    }
}, {timestamps: true});

const BillModel = mongoose.model('Bill', BillSchema);
module.exports = BillModel;