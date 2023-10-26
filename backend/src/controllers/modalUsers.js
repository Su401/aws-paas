const { ModalUsers } = require('../db/modalUsers');

const findModalUsersController = async (req, res, next) => {
	try {
		const products = await ModalUsers.find({});
		res.status(200).json(products);
	} catch (error) {
		console.log('Um problema foi detectado', error);
		res.status(500).json({ error: 'Um problema foi detectado' });
	}
};

module.exports = {
	findModalUsersController,
};
