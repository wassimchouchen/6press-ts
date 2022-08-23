// const mongoose = require('mongoose');
// const express = require('express');
// const {
//     Product
// } = require('../models/Product');
// const { createError } = require('../utils/error');
// const router = express.Router();

// //get  all offers
// router.get('/', async(req, res, next) => {
//     const failed = true;

//     if (failed) return next(createError(404, "you are not authenticated"));
//     try {
//         const products = await Product.find()
//         res.status(200).json(products)
//     } catch (err) {
//         next(err);
//     }
// })


// //get a single offer
// router.get('/:id', async(req, res) => {
//     try {
//         const product = await Product.findById(req.params.id)
//         res.status(200).json(product)
//     } catch (err) {
//         res.status(404).json(err)
//     }
// })


// //create an  offer
// router.post('/', async(req, res) => {


//     const newProduct = new Product(req.body)
//     try {
//         const savedProduct = await newProduct.save()
//         res.status(200).json(savedProduct)

//     } catch (err) {
//         res.status(404).json(error)
//     }
// })

// //delete a single offer
// router.delete('/:id', async(req, res) => {
//     try {
//         await Product.findByIdAndDelete(req.params.id, { $set: req.body }, { new: true });

//         res.status(200).json("hotel has been deleted")
//     } catch (err) {
//         res.status(404).json(err)

//     }
// })


// //update an offer

// router.put('/:id', async(req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
//         res.status(200).json(updatedProduct)
//     } catch (err) {
//         res.status(404).json(err)
//     }
// })



// module.exports = router;