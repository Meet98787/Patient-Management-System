const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/userModel');

// Utility function to generate random token
function generateResetToken() {
    return Math.random().toString(36).substr(2) + new Date().getTime();
}

const register = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, country, state, city, hospital, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });

        user = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
            state,
            city,
            hospital,
            password,
        });

        await user.save();

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ msg: 'User not found' });

        const resetToken = generateResetToken();
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
        await user.save();

        const resetUrl = `http://localhost:5001/api/auth/reset-password/${resetToken}`;
        const message = `You have requested to reset your password. Please click on the following link to reset your password: \n\n${resetUrl}`;

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: { user: user.email, pass: user.password },
        });

        await transporter.sendMail({
            to: user.email,
            subject: 'Password reset token',
            text: message,
        });

        res.json({ msg: 'Email sent' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

const resetPassword = async (req, res) => {
    try {
        const user = await User.findOne({
            resetPasswordToken: req.params.resetToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) return res.status(400).json({ msg: 'Invalid token or token expired' });

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();

        res.json({ msg: 'Password reset successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}


module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword
}
