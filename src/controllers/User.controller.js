const User = require("../models/User");
const AppError = require("../../error");
const { createUserService, getAllUsersService } = require("../services/user.service");

class UserController {
    static async getAll(_, res) {
        const users = await getAllUsersService();
        return res.status(200).send(users);
    }

    static async createUser(req, res) {
        const { nome, username, password, email } = req;
        const user = await createUserService({nome, username, password, email})
        return res.status(201).send(user);
    }

    static async getById(req, res, next) {
        const { id } = req.params;

        try {
            const user = await User.findByPk(id);

            if(!user) throw new AppError('User not found', 404);

            return res.status(200).json(user);
        } catch (error) {
            next(error); 
        }
    }

    static async modifyUser(req, res, next) {
        const { id } = req.params;
        const { nome, username, email } = req.body;

        try {
            const user = await User.findByPk(id);

            if(!user) throw new AppError('User not found', 404);
            
            await User.update({
                nome, username, email
            }, {
                where: { id }

            });

            return res.status(200).send("User modify successfully");
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findByPk(id);
            if (!user) return res.status(404).send('User not found');

            await User.destroy({
                where: {
                    id
                }
            })
            return res.status(200).send('User deleted succefully');
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}

module.exports = UserController;