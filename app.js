var config = require('./config');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');
var initPassport = require('./passport/init');
var mongoose = require('mongoose');
var url = require('./config');
var userValues = require('./config/config.json')

var router = require('./Controllers/router');

var port = process.env.PORT || 3000;


mongoose.connect(url.DbString());

//passport initialization 
app.use(expressSession({secret: 'secretAwesomeKey'}));
app.use(passport.initialize());
app.use(passport.session());

//cors for local front-end requests
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

initPassport(passport);

app.use(flash());

//router
app.use('/', router);

app.listen(port);


