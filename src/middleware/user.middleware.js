const AppError = require("../../error");

function verifyBodyCreateUser(req, _, next){
    const { nome, username, password, email } = req.body;

    if(!nome) throw new AppError('No name provider', 400);
    
    if(nome.length < 3) throw new AppError('Name less than 3 characters', 400);
    
    if(!username) throw new AppError('No username provider', 400);
    
    if (username.length < 6)
       throw new AppError('Username menor que 6 caracteres', 400);
    
    if(!password) throw new AppError('No password provider', 400)
    
    if (password.length < 6)
        throw new AppError('Senha menor que 6 caracteres',400);
    
    if(!email) throw new AppError('No email provider', 400);
    
    if (!email.includes('@'))
        throw new AppError('email inválido', 400);
    
    req.nome = nome;
    req.username = username;
    req.password = password;
    req.email = email;
    
    next();
}

module.exports = { verifyBodyCreateUser }