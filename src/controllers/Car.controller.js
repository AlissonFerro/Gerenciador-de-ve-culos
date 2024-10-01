const { getAllCarsService, createCarService } = require("../services/car.service");

class CarController{
    static async getAll(req, res){
        const cars = await getAllCarsService();
        return res.status(200).send(cars);
    }

    static async create(req, res){
        const { modelo, marca, placa, ano } = req;
        
        const car = await createCarService({modelo, marca, placa, ano});
        return res.status(200).send(car);
    }
}

module.exports = CarController;