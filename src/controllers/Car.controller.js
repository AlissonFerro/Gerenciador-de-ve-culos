const { getAllCarsService, createCarService, modifyCarService, getCarByIdService, deleteCarService } = require("../services/car.service");

class CarController{
    static async getAll(_, res){
        const cars = await getAllCarsService();
        return res.status(200).send(cars);
    }

    static async getCarById(req, res){
        const {id} = req.params;
        const car = await getCarByIdService(id);

        return res.status(200).send(car);
    }

    static async create(req, res){
        const { modelo, marca, placa, ano } = req;
        
        const car = await createCarService({modelo, marca, placa, ano});
        return res.status(201).send(car);
    }

    static async modifyCar(req, res) {
        const { id } = req.params;
        const { modelo, marca, placa, ano } = req;

        await getCarByIdService(id);
        await modifyCarService({ modelo, marca, placa, ano }, id);

        return res.status(200).send("Car modify successfully");
    }

    static async deleteCar(req, res){
        const { id } = req.params;

        await getCarByIdService(id);
        await deleteCarService(id);

        return res.status(200).send('Car deleted successfully');
    }
}

module.exports = CarController;