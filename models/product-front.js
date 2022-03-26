const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
})
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;