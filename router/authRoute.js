const express = require('express');
const { signup } = require('../controller/authController');
const authRouter = express.Router();

// Post is used for create entity and excess and secure data

authRouter.post('/signup', signup);

module.exports = authRouter;