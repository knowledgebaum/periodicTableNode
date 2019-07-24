
//Includes
var express = require('express');
var periodicController = require('./controllers/periodicController');
var periodicApp =  express();

//Template
periodicApp.set('view engine', 'pug'); //TEMPLATE ENGINE

//static
periodicApp.use(express.static('assets'));

//fire controllers
periodicController(periodicApp);



periodicApp.listen(process.env.PORT || 5000);