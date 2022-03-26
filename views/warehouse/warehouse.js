const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
const warehouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    warehouse_number: {
        type: Number,
        required: true,
    }
})
const Warehouse = mongoose.model('Warehouse', warehouseSchema);
module.exports = Warehouse;