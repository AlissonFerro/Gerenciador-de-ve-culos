const { getAllCarsUsersService } = require("../services/carsusers.service");

class CarUserController{
    static async getAll(req, res){
        const carsUsers = await getAllCarsUsersService();
        return res.status(200).send(carsUsers);
    }
}

module.exports = CarUserController;