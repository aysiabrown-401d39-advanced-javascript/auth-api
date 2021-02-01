'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    category: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: String, required: false},
    img: {type: String, required: true},
    count: {type: Number, required: true}
});

const productsModel = mongoose.model('todo', productSchema);

module.exports = productsModel;