const AppError = require("../../error");
const { loginService } = require("../services/login.service");
const jwt = require('jsonwebtoken');

class AuthController{
    static async login(req, res, next){ 
        const {email, password} = req;       
        const user = await loginService({email, password});
        if(!user) return next(new AppError('User not found', 404));
        
        if(user.password != password)
            return next(new AppError('User not found', 404));

        const token = jwt.sign({id: user.id}, "asd", {
            expiresIn: '30 min'
        })
        
        return res.status(200).send(token);
    }
}

module.exports = AuthController;