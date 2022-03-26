const Warehouse = require('./views/warehouse/warehouse.js')
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
const seedwarehouse = [{
    name: 'mobile warehouse',
    warehouse_number: '1'
}, {
    name: 'fruits',
    warehouse_number: '2'
}]
Warehouse.insertMany(seedwarehouse);