'use strict'

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

//get port from environment variable otherwise for local testing use 3000
const port = process.env.PORT || 3000;

const configDB = require('./config/database');
//connect to mongodb
mongoose.connect(configDB.url);

//setup passport js
require('./config/Passport') (passport);

const app = express();

//setup middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({	extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: 'thisistopsecret',
	resave: true,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//setup routes
require('./routes/routes') (app, passport);

//serving static files
app.use(express.static('public/login'));

app.listen(port, () => {
	console.log('Example app listening on port '+port);
});