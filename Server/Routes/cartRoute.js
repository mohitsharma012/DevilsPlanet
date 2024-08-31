import express from 'express';
const router = express.Router();

import { addToCart ,getCart, removeFromCart  } from '../Controllers/cartController.js';

// Route to add product to cart
router.post('/add-to-cart', addToCart);

// Route to get all items in the cart
router.get('/get-cart', getCart);

// Route to remove an item from the cart
router.delete('/remove/:id', removeFromCart);

// // Route to update a cart item
// router.put('/:id', protect, updateCartItem);


// // Route to clear the cart
// router.delete('/', protect, clearCart);

export default router;