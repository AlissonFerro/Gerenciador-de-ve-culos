const AppError = require("../../error");

function verifyLogin(req, _, next){
    const { email, password } = req.body;

    if(!email) throw new AppError('No email provider', 400);
    if(!password) throw new AppError('No password provider', 400);

    req.email = email;
    req.password = password;

    next();
}

module.exports = { verifyLogin }