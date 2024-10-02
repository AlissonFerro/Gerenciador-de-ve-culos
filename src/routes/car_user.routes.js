const express = require('express');
const CarUserController = require('../controllers/CarUser.controller');
const router = express.Router();

router
    .get('/', CarUserController.getAllCar_User)
    .get('/:id', CarUserController.getByIdCar_User)
    .post('/', CarUserController.createCar_User)

module.exports = router;