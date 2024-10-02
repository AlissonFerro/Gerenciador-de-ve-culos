const { 
    createUserService, 
    getAllUsersService, 
    getUserService, 
    deleteUserService, 
    modifyUserService
} = require("../services/user.service");

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

    static async getById(req, res) {
        const { id } = req.params;

        const user = await getUserService(id);

        return res.status(200).json(user);
    }

    static async modifyUser(req, res) {
        const { id } = req.params;
        const { nome, username, email, password } = req.body;

        await getUserService(id);
        
        await modifyUserService({ nome, username, email, password }, id);

        return res.status(204).send("User modify successfully");
    }
    
    static async deleteUser(req, res) {
        const { id } = req.params;
        
        await getUserService(id);

        await deleteUserService(id);

        return res.status(200).send('User deleted succefully');        
    }
}

module.exports = UserController;