const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Product", ProductSchema)