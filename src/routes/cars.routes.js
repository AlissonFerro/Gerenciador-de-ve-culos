const express = require('express');
const CarController = require('../controllers/Car.controller');
const { verifyPayloadCar } = require('../middleware/car.middleware');
const router = express.Router();

router
    .get('/', CarController.getAll)
    .post('/', verifyPayloadCar, CarController.create)

module.exports = router;