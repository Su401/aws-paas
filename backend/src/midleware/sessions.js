const session = require('express-session');

// how long the session cookie will last before it expires
//<----------REVER TEMPO DE SESSAO------------>
const oneHourInMillis = 60 * 60 * 1000;

const sessionMiddleware = session({
	cookie: {
		maxAge: oneHourInMillis,
	},
	// this is a random string used to encrypt the session ID in the cookie
	secret: 'epd36OFxfH2VAJch6km9',
	// this option means that the session object will be saved only if it changes
	resave: false,
	// this means that the session object won't be saved until it is used
	saveUninitialized: false,
});

module.exports = {
	// you can import and use this middleware in your application with
	// app.use(sessionMiddleware)
	sessionMiddleware,
};
