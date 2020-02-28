const Sequelize = require("sequelize")
require("dotenv").config()
let db = new Sequelize( process.env.DATABASE_URL || 'postgres://localhost:5432/DST', {
    logging: false 
  });


  module.exports = db