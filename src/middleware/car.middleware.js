const AppError = require("../../error");

function verifyPayloadCar(req, _, next){
    const { modelo, marca, placa, ano } = req.body;

    if(!modelo) throw new AppError('Sem modelo fornecido', 400);

    if(!marca) throw new AppError('Sem marca fornecido', 400);

    if(!placa) throw new AppError('Sem placa fornecida', 400);

    if(!ano) throw new AppError('Sem ano fornecido', 400);
    
    if(ano > new Date().getFullYear() +1) 
        throw new AppError('Ano inválido', 400); 

    req.modelo = modelo;
    req.marca = marca;
    req.placa = placa;
    req.ano = ano;

    next();
}

module.exports = { verifyPayloadCar }