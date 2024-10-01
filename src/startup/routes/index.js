const express = require('express');
const user = require('../../routes/user.routes');
const auth = require('../../routes/auth.routes');

module.exports = function(app){
    app
        .use(express.json())
        .use('/api/user', user)
        .use('/api/auth', auth)
}