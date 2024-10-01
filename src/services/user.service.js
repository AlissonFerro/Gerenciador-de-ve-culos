const User = require("../models/User");

async function createUserService(payload){
    return await User.create(payload);
}

async function getAllUsersService() {
    return await User.findAll();
}

module.exports = { createUserService, getAllUsersService }