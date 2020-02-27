const Sequelize = require("sequelize")
let db = new Sequelize('postgres://localhost:5432/DST', {
    logging: false 
  });


  module.exports = db