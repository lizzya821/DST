
const Sequelize = require('sequelize');
const db = require('./db.js');

const Food = db.define("food", {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    health: {
        type: Sequelize.DECIMAL, 
        allowNull: false
    }, 
    sanity: {
        type: Sequelize.DECIMAL, 
        allowNull: false
    }, 
    hunger: {
        type: Sequelize.DECIMAL, 
        allowNull: false
    }, 
    restrictions: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }, 
    imageURL: {
        type: Sequelize.STRING
    }, 
    containsMeat: {
        type: Sequelize.BOOLEAN, 
        defaultValue: false
    }
})


module.exports = Food