const AppError = require('../../error'); 

function handleError(err, req, res, next) {
    let status = 500;

    const response = {
        message: err.message || 'Internal Server Error', // Mensagem padrão
    };

    // Verifica se err é uma instância de AppError e se statusCode está definido
    if (err instanceof AppError) {
        status = err.statusCode || 400; // Se statusCode não estiver definido, usa 400
    }

    return res.status(status).json(response);
}

module.exports = handleError;