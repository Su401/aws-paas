// this auth.js contains the authentication middleware
const protectedEndpoints = ['/users', '/admin'];

// this middleware will be executed for every request
// some endpoints require authentication, others are public
// for instance: only authenticated users can access the profile endpoint
const checkAuth = (req, res, next) => {
	// if we have this request http://localhost:3000/api/users
	// then the "path" is "/api/users"
	const { path, method } = req;
	if (protectedEndpoints.includes(path) /* && method === 'POST' */) {
		// the endpoint requires authentication
		if (req.session.user) {
			// the user is authenticated
			next();
		} else {
			// the user is not authenticated
			next('User not authenticated');
		}
	} else {
		// the endpoint does not require authentication
		next();
	}
};

module.exports = {
	checkAuth,
};
