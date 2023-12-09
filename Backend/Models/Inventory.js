const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    Category: {
        type: String
    },
    Weight: {
        type : Number
    },
    Quantity: {
        type: Number
    }
}, {timestamps: true});

const InventoryModel = mongoose.model('Inventory', InventorySchema)
module.exports = InventoryModel;