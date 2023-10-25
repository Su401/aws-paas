const { User } = require('../db/users');

/* const getUserByUsernameAndPassword = async (req, res, next) => {
	const { username, password } = req.body;
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
}; */

const loginController = async (req, res, next) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username, password });
	if (!user) {
		return res.status(401).json({ error: 'Invalid credentials' });
	}
	req.session.user = user;
	res.json(user);
};

const getCurrentUserController = (req, res, next) => {
	const user = req.session.user;
	res.json({
		_id: user._id,
		username: user.username,
	});
};

module.exports = {
	loginController,
	/* getUserByUsernameAndPassword */
	getCurrentUserController,
};
