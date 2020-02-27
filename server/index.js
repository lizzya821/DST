const express = require("express")
const bodyParser = require('body-parser');
const app = express()
const morgan = require('morgan');
const path = require('path')
const {db} = require('./models');


//logging middleware
app.use(morgan('dev'));
//static middleware
app.use(express.static(path.join(__dirname, '../public')));
//body parsing middlware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



//routes
app.use('/api', require('./api/route.js'));


//get requests that arent to an api route
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  //handling endware
  app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

const port = process.env.PORT || 3000;

  db.sync()  
    .then(function(){
      console.log("db synced")
      app.listen(port)
      console.log("hello")
    }) 

module.exports = app