import express from 'express';
const router = express.Router();

import { loginUser, registerUser } from '../Controllers/userController.js';
import isAuthorized from '../Middleware/isAuthorized.js';

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user
router.post('/login', loginUser);

// Endpoint to check if user is logged in
router.get('/is-logged-in', isAuthorized, (req, res) => {
  if (req.user) {
    res.json({ success: true, isLoggedIn: true });
  } else {
    res.json({ success: false, isLoggedIn: false });
  }

});

// // Route to get user profile
// router.get('/profile', getUserProfile);

// // Route to update user profile
// router.put('/profile', updateUserProfile);

// // Route to delete user account
// router.delete('/profile', deleteUser);

export default router;
