const express = require('express');
const UserController = require('../controllers/User.controller');
const { verifyBodyCreateUser } = require('../middleware/user.middleware');
const { verifyJwt } = require('../middleware/auth.middleware');
const router = express.Router();

router  
    .get('/', UserController.getAll)
    .get('/:id', UserController.getById)
    .post('/', verifyBodyCreateUser, UserController.createUser)
    .patch('/:id', verifyBodyCreateUser, UserController.modifyUser)
    .delete('/:id', verifyJwt, UserController.deleteUser)

module.exports = router;