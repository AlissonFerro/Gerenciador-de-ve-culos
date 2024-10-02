const AppError = require("../../error");
const Car = require("../models/Car");

async function getAllCarsService() {
    return await Car.findAll();
}

async function getCarByIdService(id) {
    const car = await Car.findByPk(id);
    if(!car) throw new AppError('Car not found', 404);
    return car;
}

async function createCarService(payload) {
    return await Car.create(payload);
}

async function modifyCarService(payload, id) {
    return await Car.update(payload, {where: { id }})
}

async function deleteCarService(id) {
    await Car.destroy({ where: {id}});
}

module.exports = { getAllCarsService, createCarService, modifyCarService, getCarByIdService, deleteCarService }