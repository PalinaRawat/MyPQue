module.exports = (app, passport) => {
	
	app.get('/', (req, res) => {
		res.send('hello please login or signup!');
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
		res.send('failed to login');
	});

	app.get('/main', isLoggedIn, (req, res)=> {
		res.send('logged in succesful\n');
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