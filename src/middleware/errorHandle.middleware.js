const AppError = require('../../error'); 

function handleError(err, _, res, next) {
    let status = 500;

    const message = err.message || 'Internal Server Error';


    if (err instanceof AppError) {
        status = err.statusCode || 400; 
    }
    
    return res.status(status).json({message});
}

module.exports = handleError;