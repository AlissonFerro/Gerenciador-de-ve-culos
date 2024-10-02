const express = require('express');
const CarController = require('../controllers/Car.controller');
const { verifyPayloadCar } = require('../middleware/car.middleware');
const { verifyJwt } = require('../middleware/auth.middleware');
const router = express.Router();

router
    .get('/', CarController.getAll)
    .get('/:id', CarController.getCarById)
    .post('/', verifyPayloadCar, CarController.create)
    .patch('/:id', verifyPayloadCar, CarController.modifyCar)
    .delete('/:id', verifyJwt, CarController.deleteCar)

module.exports = router;