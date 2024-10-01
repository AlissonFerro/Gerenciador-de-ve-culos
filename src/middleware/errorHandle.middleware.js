const AppError = require('../../error'); 

function handleError(err, _, res) {
    let status = 500;

    const response = {
        message: err.message || 'Internal Server Error', 
    };

    if (err instanceof AppError) {
        status = err.statusCode || 400; 
    }

    return res.status(status).json(response);
}

module.exports = handleError;