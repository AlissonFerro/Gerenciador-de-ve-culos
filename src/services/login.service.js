const { Op } = require("sequelize");
const AppError = require("../../error");
const User = require("../models/User");

async function loginService(payload) {
    return await User.findOne({
        where: {
            email: payload.email,
            deletedAt: { [Op.is]: null } 
        }
    });
}

module.exports = { loginService }