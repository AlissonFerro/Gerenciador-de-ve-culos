const Car = require("../models/Car");

async function getAllCarsService() {
    return await Car.findAll();
}

async function createCarService(payload) {
    return await Car.create(payload);
}

module.exports = { getAllCarsService, createCarService }