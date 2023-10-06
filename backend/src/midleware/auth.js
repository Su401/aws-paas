const protectedEndpoints = ['/api/users/me'];

const checkAuth = (req, res, next) => {
	const { path, method } = req;
	if (protectedEndpoints.includes(path) && method === 'POST') {
		if (req.session.user) {
			next();
		} else {
			next('User not authenticated');
		}
	} else {
		next();
	}
};

module.exports = {
	checkAuth,
};
