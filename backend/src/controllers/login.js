const { User } = require('../db/users');

const getUserByUsernameAndPassword = async (req, res, next) => {
	const { username, password } = req.query;
	if (!username || !password) {
		return res
			.status(400)
			.json({ error: 'Username and password parameters missing' });
	}
	try {
		const user = await User.findOne({ username, password });
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		next(err);
	}
};

const login = async (req, res, next) => {
	const { username, password } = request.body;
	const user = await getUserByUsernameAndPassword(username, password);
	if (user) {
		const { password, ...userWithoutPassword } = user;
		request.session = userWithoutPassword;
		response.status(200).json(userWithoutPassword);
	} else {
		response.status(401).json({
			errorMessage: 'Invalid credentials',
		});
	}
};

const getCurrentUserController = (req, res, next) => {
	const user = req.session.user;
	res.json({
		_id: user._id,
		username: user.username,
	});
};

module.exports = {
	getUserByUsernameAndPassword,
	getCurrentUserController,
};
