const AppError = require("../../error");
const User = require("../models/User");

async function createUserService(payload){
    return await User.create(payload);
}

async function getAllUsersService() {
    return await User.findAll();
}

async function getUserService(id) {
    const user = await User.findByPk(id);
    if (!user) throw new AppError('User not found', 404);   

    return user
}

async function deleteUserService(id) {
    return await User.destroy({where: {id}})
}

async function modifyUserService(payload, id) {
    return await User.update({payload}, { where: { id }})
}

module.exports = { createUserService, getAllUsersService, getUserService, deleteUserService, modifyUserService }