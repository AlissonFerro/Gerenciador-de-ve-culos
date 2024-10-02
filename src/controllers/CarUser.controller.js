const { getCarByIdService } = require("../services/car.service");
const { getUserService } = require("../services/user.service");
const { 
    getAllCarsUsersService, 
    getCarUserByIdService, 
    createCar_UserService 
} = require("../services/car_users.service");


class CarUserController{
    static async getAllCar_User(_, res){
        const car_user = await getAllCarsUsersService();

        return res.status(200).send(car_user);
    }

    static async getByIdCar_User(req, res){
        const { id } = req.params;

        const car_user = await getCarUserByIdService(id)

        return res.status(200).send(car_user);
    }

    static async createCar_User(req, res){
        const { userId, carId } = req.body;

        await getCarByIdService(carId);
        await getUserService(userId);
        
        const car_user = await createCar_UserService({idUser: userId, idCar: carId});
        return res.status(201).send(car_user);
    }
}

module.exports = CarUserController;