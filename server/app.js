const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

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

//get port from environment variable otherwise for local testing use 3000
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
	res.send('hello please login or signup!');
});

app.post('/signup', passport.authenticate('local-signup', 
	{
		successRedirect: '/main',
		failureRedirect: '/login',
		failureFlash: true
	}
));
app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/main', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
}));
// app.post('/login', passport.authenticate('local-login', {failureRedirect: '/login', failureFlash: true}), 
// 	function(req, res) {
// 		User.findOne({ 'local.email' :  req.body.email }, function(err, user) {
// 		    if (err)
// 		            return done(err);
// 	        if (user)
// 	            res.redirect('/main');
// 	        else {
// 	            res.redirect('/login');
// 	        }
// 		});
// 	}
// );
app.get('/login', function(req, res) {
	res.send('failed to login');
});

app.get('/main', isLoggedIn, function(req, res) {
	res.send('logged in succesful\n');
});

app.post('/logout', function(req, res) {
	req.logout();
	res.redirect('/');
});

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/login');
};

app.listen(port, () => {
	console.log('Example app listening on port '+port);
});