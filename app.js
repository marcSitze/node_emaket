

var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');


// connecting to // database

mongoose.connect(config.database);
//mongoose.connect('mongodb://localhost:27017/node_emarket', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});


//initialising app
var app = express();

// view engine & folder setup
app.set('views', path.join(__dirname, 'views'));
    //setting the ejs template engine
app.set('view engine', 'ejs');


// Set global errors variable
app.locals.errors = null;

// setting up the public folder
app.use(express.static(path.join(__dirname, 'public')));

//routing
app.get('/', function(req, res) {
    res.render('layout')
    //return ;
})

// server start
var port = 3000;
app.listen(port, function() {
    console.log('Server started on port' + port);
});
