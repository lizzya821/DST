const Sequelize = require('sequelize');
const db = require('./db.js');

const Ingredient = db.define("ingredient", {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    }, 
    imageURL: {
        type: Sequelize.STRING
    }
})

module.exports = Ingredient