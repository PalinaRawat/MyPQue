'use strict'

const User = require('../models/User');
const Config = require('../config/Config');
const path = require('path');
var request = require('request');
var axios = require('axios');
var mongoose = require('mongoose');
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
				res.redirect('/main')
			});
		});
	});

	app.post('/CompanyProfile', isLoggedIn, isRec, (req, res) => {
		User.findOne({'Recruiter.companyLogin' :req.user.Recruiter.companyLogin}, (err, user) => {
			if(err)
				res.send(err);
			user.profile.description = req.body.description;
			user.profile.lookingFor = req.body.lookingFor;
			user.profile.hiring = req.body.hiring;
			user.profile.majors = req.body.majors;
			
			if(req.body.sponsers == 'Yes')
				user.profile.sponsers = true;
			else 
				user.profile.sponsers = false;
			user.profile.timePer = req.body.timePer;
			user.profile.hasProf = true;
			user.save((err) => {
				if(err)
					res.send(err);
				res.redirect('/recmain')
			});

			//post the information to the java service
			const route = '/createcompany';
			var id = user._id+"";
			console.log(user.profile.timePer);
			request.post(Config.algorithm+route).form({
				time: user.profile.timePer,
				company: id
			});
		});
	});

	app.get('/Companies', (req, res) =>  {
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
				
				companyObject.FullTime = false;
        		companyObject.Internships = false;
        		companyObject._id = company._id;
        		var lookingfor = company.profile.lookingFor;
        		for(var j = 0; j<lookingfor.length; j++) {
        			companyObject[lookingfor[j]] = true;
        		}

        		var hiring = company.profile.hiring;
        		console.log(hiring)
        		for(var j = 0; j<hiring.length; j++) {
        			companyObject[hiring[j]] = true;
        		}
        		companyObject.computerScience = false;
        		companyObject.computerEngineering = false;
        		companyObject.electricalEngineering = false;
        		var majors = company.profile.majors;
        		for(var j = 0; j<majors.length; j++) {
        			companyObject[majors[j]] = true;
        		}
        		newArr.push(companyObject);
      		}
			res.send(newArr);
		});
	});

	app.get('/Students', hasCompanyProfile, (req, res) => {
		//gets the list of students
		User.find({'Recruiter.isRec': false}, (err, students) => {
			if(err)
				res.send(err);
			var newArr = [];
			for(var j = 0; j<students.length; j++) {
				var student = students[j];
				var studentObject = new Object();
				studentObject.firstName = student.local.firstName;
				studentObject.lastName = student.local.lastName;
				studentObject.link = student.profile.resume;
				newArr.push(studentObject);
			}
			res.send(newArr);
		});
	});

	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	//post the students preferences
	app.post('/studentPreferences', isStudent, (req, res) => {
		User.findOne({'local.email': req.user.local.email}, (err, user) => {
			var id = user._id;
			var companies = req.body.companies;
			const route = '/create';
			id = id +"";
			request.post(Config.algorithm+route).form({
				student: id,
				companies: companies
			});
		});
	});
	app.get('/companyQueue', (req, res) => {
		const route = '/getqueue';
		request(Config.algorithm+route, (err, algoResponse, body) => {
			if(err) {
				res.send(err);
			}
			if(algoResponse) {
				console.log('res is '+algoResponse);
			}
			console.log('body is '+body);
			res.send(body);
		});
		// res.sendStatus(500);
	});

	app.get('/gettime', (req, res) => {
		const route = '/gettime';
		console.log("student id is "+req.user._id);
		axios.get(Config.algorithm+route+'?student='+req.user._id).then((response) => {
			let body = response.data;
			var newArr = [];
			for(let i = 0; i<body.length; i++) {
				let company = new Object();
				company.companyID = body[i].companyID
				company.timeRemaining = body[i].timeRemaining;

				const companyID = body[i].companyID;
				var _id = mongoose.mongo.ObjectId(companyID);

				User.findById(_id, (err, user) => {
					company.Name = user.Recruiter.companyName;
					newArr.push(company);
					if(i == body.length-1)
						res.send(newArr);
				});
			}
		})
		.catch((err) => {
			if(err)
				res.send(err);
		});
		// res.sendStatus(500);
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