'use strict'

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

module.exports = (passport) => {

	//in mongodb every document has an id attribute which is what we are utlizing here.
	passport.serializeUser((user, done) => {
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy ({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},

	(req, email, password, done) => {

		process.nextTick(()=> {
			User.findOne({'local.email': email}, (err, user) => {
				//error with database
				if(err) 
					return done(err);
				//email already exists
				if(user)
					return done(null, false, req.flash('signupMessage', 'This email was already taken'));
				//create a new user
				else {
					var user = new User();

					user.local.email = req.body.email;
					user.local.password = user.generateHash(password);
					user.profile.hasProf = false;

					//save the user
					user.save((err) => {
						if(err)
							throw err;
						return done(null, user);
					});
				}
			});
		});
	}));

	passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    (req, email, password, done) => {

        User.findOne({ 'local.email' :  email }, (err, user) => {
            if (err)
                return done(err);

            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.'));

            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'invalid password'));

            return done(null, user);
        });
    }));
}