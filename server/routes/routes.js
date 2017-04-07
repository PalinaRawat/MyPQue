'use strict'

const User = require('../models/User');
const path = require('path')

module.exports = (app, passport) => {

	app.get('/', (req, res) => {
		console.log('test this route');
		res.redirect('/main');
	});

	app.post('/signup', passport.authenticate('local-signup', {
			successRedirect: '/main',
			failureRedirect: '/login',
			failureFlash: true
	}));

	app.post('/signupCompany', passport.authenticate('rec-signup', {
		successRedirect: '/recmain',
		failureRedirect:  '/login',
		failureFlash: true
	}));

	app.post('/loginCompany', passport.authenticate('rec-login', {
		successRedirect: '/recmain',
		failureRedirect:  '/login',
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

	app.get('/main', isLoggedIn, hasProfile, isStudent, (req, res)=> {
		res.sendFile(path.join(__dirname+'/../public/frontend_login/index.html'));
	});

	app.get('/recmain', isLoggedIn, hasCompanyProfile, isRec, (req, res) => {
		res.sendFile(path.join(__dirname+'/../public/frontend_recruiter/index.html'));
	});

	app.get('/student', isLoggedIn, isStudent, (req, res) => {
		res.sendFile(path.join(__dirname+'/../public/frontend_login/index.html'));
	});

	app.get('/recruiter', isLoggedIn, isRec, (req, res) => {
		res.sendFile(path.join(__dirname+'/../public/frontend_recruiter/index.html'));
	});

	app.post('/StudentProfile', isLoggedIn, isStudent, (req, res) => {
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
	app.get('/Companies', (req, res) =>  {
		console.log('test companies route');
		User.find({'Recruiter.isRec' : true}, (err, companies) => {
			
			if(err)
				res.send(err);

			var newArr = [];
			for(var i = 0; i<companies.length; i++) {
        		var company = companies[i];
        		var companyObject = new Object();
        		companyObject.Name = company.Recruiter.companyName;
        		companyObject.Description = company.profile.description;
        		companyObject.SponseringVisa = company.profile.sponsers;

        		companyObject.Freshman = false;
        		companyObject.Sophomore = false;
        		companyObject.Junior = false;
        		companyObject.Senior = false;

        		var lookingfor = company.profile.lookingFor;
        		for(var j = 0; j<lookingfor.length; j++) {
        			companyObject[lookingfor[j]] = true;
        		}
        		companyObject.FullTime = false;
        		companyObject.Internships = false;

        		var hiring = company.profile.hiring;
        		for(var j = 0; j<hiring.length; j++) {
        			companyObject[hiring[j]] = true;
        		}
        		companyObject.computerScience = true;
        		companyObject.computerEngineering = false;
        		companyObject.electricalEngineering = false;
        		newArr.push(companyObject);
      		}
			res.send(newArr);
		});
	});
	app.post('/CompanyProfile', isLoggedIn, isRec, (req, res) => {
		User.findOne({'Recruiter.companyLogin' :req.user.Recruiter.companyLogin}, (err, user) => {
			if(err)
				res.send(err);
			user.profile.description = req.body.description;
			user.profile.lookingFor = req.body.lookingFor;
			user.profile.hiring = req.body.hiring;
			
			if(req.body.sponsers == 'Yes')
				user.profile.sponsers = true;
			else 
				user.profile.sponsers = false;
			user.profile.timePer = req.body.timePer;
			user.profile.hasProf = true;
			user.save((err) => {
				if(err)
					res.send(err);
				res.redirect('/recmain');
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
	function hasCompanyProfile(req, res, next) {
		User.findOne({'Recruiter.companyLogin': req.user.Recruiter.companyLogin}, (err, user) => {
			if(err)
				res.send(err)
			if(user.profile.hasProf)
				return next();
		
			res.redirect('/recruiter');
		});
	};
	function isStudent(req, res, next) {
		User.findOne({'local.email': req.user.local.email}, (err, user) => {
			if(err)
				res.send(err);
			if(!user)
				res.redirect('/login');
			if(!user.Recruiter.isRec)
				return next();
			res.redirect('/login');
		});
	}
	function isRec(req, res, next) {
		User.findOne({'Recruiter.companyLogin': req.user.Recruiter.companyLogin}, (err, user) => {
			if(err)
				res.send(err);
			if(!user)
				res.redirect('/login');
			if(user.Recruiter.isRec)
				return next();
			res.redirect('/login');
		});
	}
}