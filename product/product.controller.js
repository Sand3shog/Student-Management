import express from 'express';
import productTable from "./product.model.js";
import productValidationSchema from './product.validation.js';
import mongoose from 'mongoose';
import isStudent from '../middleware/authentication.middleware.js';
import validateMongoIdFromReqParams from '../middleware/mongo.validate.js';

const router = express.Router();

// add product
router.post('/product/add', isStudent , async (req, res, next) => {
    // console.log("I am from middleware")               // this is middle ware
    // data validation
    try {
        req.body = await productValidationSchema.validate(req.body);
        next();
    } catch (error) {
        return res.status(400).send({message: error.message});
    }                 
}, async (req, res) => {
    // extract product from body
    const newProduct = req.body;

    // add product
    await productTable.create(newProduct);

    return res.status(201).send({message: 'Product is added successfully....', productDetails: newProduct});
});

// get product by id
router.get('/product/details/:id', isStudent , validateMongoIdFromReqParams, async (req, res) => {
    // extract product id from req params
    const productId = req.params.id;

    // find product
    const product = await productTable.findOne({_id: productId});

    // if not product throw error
    if(!product) {
        return res.status(404).send({message: 'Product does not exist'});
    }

    // send res product details
    return res.status(200).send({message: 'success', productData: product});
});

// delete product by id
router.delete('/product/delete/:id', isStudent,  validateMongoIdFromReqParams, async (req, res) => {
    // extract product id from req params
    const productId = req.params.id;

    //find product
    const product = await productTable.findOne({_id: productId});

    // if not product throw error
    if(!product) {
        return res.status(404).send({message: 'Product does not exist'});
    }

    // delete product   
    await productTable.deleteOne({_id: productId});

    // send res 
    return res.status(200).send({message: 'Product is deleted successfully'});
});

export { router as productController};