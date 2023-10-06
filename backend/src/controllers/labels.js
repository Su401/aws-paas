const path = require('path');
const { Tags } = require('../db');

const tagController = async (req, res, next) => {
	const {
		company,
		establishment,
		tag,
		produce,
		user,
		typeProduce,
		batch,
		openDate,
		expireAfterOpen,
		originalExpireDate,
	} = req.body;

	const label = await Tags.create({
		company,
		establishment,
		tag,
		produce,
		user,
		typeProduce,
		batch,
		openDate,
		expireAfterOpen,
		originalExpireDate,
	});

	//	console.log(label);
	res.json({ label });
};

module.exports = {
	tagController,
};
