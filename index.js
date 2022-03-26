const express = require("express");
const app = express();
const path = require("path");
const methodOvereide = require('method-override');
const Product = require('./models/product-front')
const mongoose = require("mongoose");
const req = require("express/lib/request");
mongoose.connect('mongodb://localhost:27017/test');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.listen(3000, (req, res) => {
    console.log("connected to port 30000")
})
app.use(express.urlencoded({ extended: true }))
app.use(methodOvereide('_method'));
app.get('/', async(req, res) => {
    const products = await Product.find({})
    res.render('products/products', { products })
})

app.get('/products', async(req, res) => {
    const products = await Product.find({})

    res.render('products/products', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})
app.post('/products', async(req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${ newProduct._id}`)
})
app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})
app.get('/products/:id/edit', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product })
})
app.put('/products/:id', async(req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`)
})
app.delete('/products/:id', async(req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');

})