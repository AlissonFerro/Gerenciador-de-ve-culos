const Sequelize = require('sequelize');
const sequelize = require('../startup/db');
const Car = require('./Car');
const User = require('./User');

const Car_User = sequelize.define('Car_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Car,
            key: 'id'
        }
    },
    idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

module.exports = Car_User;