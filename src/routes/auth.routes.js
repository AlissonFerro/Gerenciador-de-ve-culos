const express = require('express');
const { verifyLogin } = require('../middleware/auth.middleware');
const AuthController = require('../controllers/Auth.controller');
const router = express.Router();

router
    .post('/login', verifyLogin, AuthController.login)

module.exports = router;