const AppError = require("../../error");
const { jwtDecode } = require('jwt-decode');

function verifyLogin(req, _, next){
    const { email, password } = req.body;

    if(!email) throw new AppError('No email provider', 400);
    if(!password) throw new AppError('No password provider', 400);

    req.email = email;
    req.password = password;

    next();
}

function verifyJwt(req, _, next){
    const { token } = req.headers;

    if(!token) throw new AppError('No token provider', 403);

    const decode = jwtDecode(token);
    
    const { exp } = decode;
    if(exp+'000' < Date.now()) throw new AppError('No token valid', 401);

    req.decode = decode
    next();
}

module.exports = { verifyLogin, verifyJwt }