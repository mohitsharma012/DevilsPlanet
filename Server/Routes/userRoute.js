import express from 'express';
const router = express.Router();

import { loginUser, registerUser } from '../Controllers/userController.js';

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user
router.post('/login', loginUser);

// // Route to get user profile
// router.get('/profile', getUserProfile);

// // Route to update user profile
// router.put('/profile', updateUserProfile);

// // Route to delete user account
// router.delete('/profile', deleteUser);

export default router;
