const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const router = express.Router();

// Register
router.post('/register', userController.register);

// Login
router.post('/login', authMiddleware, userController.login);

// Forgot Password
router.post('/forgot-password', userController.forgotPassword);

// Reset Password
router.put('/reset-password/:resetToken', authMiddleware, userController.resetPassword);

module.exports = router;
