const Car_User = require("../models/CarUser");

async function getAllCarsUsersService() {
    return await Car_User.findAll();
}

module.exports = { getAllCarsUsersService }