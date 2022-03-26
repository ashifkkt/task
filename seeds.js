const Product = require('./models/product-front')
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
const seedproucts = [{
    name: 'samsung',
    category: 'phone'
}, {
    name: 'apple',
    category: 'fruits'
}]
Product.insertMany(seedproucts);