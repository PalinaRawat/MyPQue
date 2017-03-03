'use strict'

const LocalStrategy = require('passport-local').Strategy;
const Recruiter = require('../models/Recruiter');

module.exports = (passport) => {

	//in mongodb every document has an id attribute which is what we are utlizing here.
	passport.serializeUser((rec, done) => {
		done(null, rec.id);
	});

	passport.deserializeUser((id, done) => {
		Recruiter.findById(id, (err, rec) => {
			done(err, rec);
		});
	});

	passport.use('rec-signup', new LocalStrategy ({
		usernameField: 'companyLogin',
		passwordField: 'companyPassword',
		passReqToCallback: true
	},

	(req, login, password, done) => {

		process.nextTick(()=> {
			Recruiter.findOne({'local.companyLogin': login}, (err, rec) => {
				//error with database
				if(err) 
					return done(err);
				//email already exists
				if(rec)
					return done(null, false, req.flash('signupMessage', 'this login was already taken'));
				//create a new user
				else {
					var rec = new Recruiter();

					rec.companyName = req.body.companyName;
					req.companyLogin = req.body.companyLogin;
					rec.local.companyPassword = rec.generateHash(password);
					rec.profile.hasProf = false;

					//save the user
					rec.save((err) => {
						if(err)
							throw err;
						return done(null, rec);
					});
				}
			});
		});
	}));

	passport.use('rec-login', new LocalStrategy({
        usernameField : 'companyLogin',
        passwordField : 'companyPassword',
        passReqToCallback : true 
    },
    (req, login, password, done) => {

        Recruiter.findOne({ 'local.companyLogin' :  login }, (err, rec) => {
            if (err)
                return done(err);

            if (!rec)
                return done(null, false, req.flash('loginMessage', 'No rec found.'));

            if (!rec.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'invalid password'));

            return done(null, rec);
        });
    }));
}