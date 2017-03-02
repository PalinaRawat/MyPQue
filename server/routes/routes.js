'use strict'

const User = require('../models/User');
const path = require('path')

module.exports = (app, passport) => {

	app.get('/', (req, res) => {
		res.redirect('/main');
	});

	app.post('/signup', passport.authenticate('local-signup', {
			successRedirect: '/main',
			failureRedirect: '/login',
			failureFlash: true
	}));

	app.post('/login', passport.authenticate('local-login', {
	        successRedirect : '/main', // redirect to the secure profile section
	        failureRedirect : '/login', // redirect back to the signup page if there is an error
	        failureFlash : true // allow flash messages
	}));

	app.get('/login', (req, res) => {
		res.sendFile(path.join(__dirname+'/../public/login/index.html'));
	});

	app.get('/main', isLoggedIn, hasProfile, (req, res)=> {
		res.send('logged in succesful as '+req.user.local.firstName);
	});

	app.get('/student', isLoggedIn, (req, res) => {
		res.sendFile(path.join(__dirname+'/../public/frontend_login/index.html'));
	});

	app.post('/StudentProfile', isLoggedIn, (req, res) => {
		User.findOne({'local.email': req.user.local.email}, (err, user) => {
			if(err)
				res.send(err);
			//update company profile
			user.profile.standing = req.body.standing;
			user.profile.major = req.body.major;
			user.profile.gradYear = req.body.gradYear;
			user.profile.opType = req.body.opType;

			if(req.body.sponsorship === "Yes")
				user.profile.sponsorship = true;
			else
				user.profile.sponsorship = false;

			user.profile.resume = req.body.resume;
			user.profile.hasProf = true;

			user.save((err) => {
				if(err)
					res.send(err);
				res.redirect('/main');
			});
		});
	});

	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated())
			return next();
		res.redirect('/login');
	};
	function hasProfile(req, res, next) {
		User.findOne({'local.email': req.user.local.email}, (err, user) => {
			if(err)
				res.send(err);
			if(user.profile.hasProf)
				return next();
			res.redirect('/student');
		});
	};
}