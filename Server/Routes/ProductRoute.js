import express from "express";
const router = express.Router();

import { getAllProducts, getProductsByCategory, createProduct, getProductById } from "../Controllers/productController.js";

// Route to get all products
router.get('/products', getAllProducts);

// Route to get products by category
router.get('/category/:category', getProductsByCategory);

// Route to create a new product
router.post('/create-product', createProduct);

// Route to get a product by ID
router.get('/products/:id', getProductById);

// // Route to delete a product by ID
// router.delete('/products/:id', deleteProduct);

// Route to update a product by ID
// router.put('/products/:id', updateProduct);

export default router;

