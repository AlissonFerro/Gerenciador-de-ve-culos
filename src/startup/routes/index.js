const express = require('express');
const user = require('../../routes/user.routes');
const auth = require('../../routes/auth.routes');
const cars = require('../../routes/cars.routes');
const car_user = require('../../routes/car_user.routes');

module.exports = function(app){
    app
        .use(express.json())
        .use('/api/user', user)
        .use('/api/auth', auth)
        .use('/api/cars', cars)
        .use('/api/car_user', car_user)
}