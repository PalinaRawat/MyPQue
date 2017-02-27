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
		res.sendFile(path.join(__dirname+'/../../login/build/index.html'));
	});

	app.get('/main', isLoggedIn, (req, res)=> {
		res.send('main app goes here\n');
	});

	app.post('/StudentProfile', isLoggedIn, (req, res) => {

		User.findById(req.user.id, (err, user) => {
			if(err)
				res.send(err);
			if(!user.profile.hasProf) {
				//update company profile
				user.profile.LookingFor = req.body.LookingFor;
				user.profile.CompanyName = req.body.CompanyName;
				user.profile.CompanyDescription = req.body.CompanyDescription;

				user.save((err) => {
					if(err)
						res.send(err);
					res.redirect('main');
				})
			}

		});
	});

	app.get('/StudentHasProfile/:student_email', isLoggedIn, (req, res) => {
		User.findOne({'local.email': email}, (err, user) => {
			if(err)
				res.send(err);
			if(user)
				res.json(user.profile);
		});
	});

	app.post('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	function isLoggedIn(req, res, next) {
		if(req.isAuthenticated())
			return next();
		res.redirect('/login');
	};
}