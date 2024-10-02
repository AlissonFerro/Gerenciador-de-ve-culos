const AppError = require("../../error");
const Car_User = require("../models/CarUser");

async function getAllCarsUsersService() {
    return await Car_User.findAll();
}

async function getCarUserByIdService(id) {
    const car_user = await Car_User.findByPk(id);
    if(!car_user) throw new AppError('Car_User not found', 404)
    
    return car_user;
}

async function createCar_UserService(payload) {
    return await Car_User.create(payload);
}

module.exports = { getAllCarsUsersService, getCarUserByIdService, createCar_UserService }