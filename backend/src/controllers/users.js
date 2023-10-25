const path = require('path');

const { User } = require('../db/users');

const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find({});
		res.json({ allUsers: users });
	} catch (err) {
		next(err);
	}
};

const getUserByUsername = async (req, res, next) => {
	const { username } = req.query;
	if (!username) {
		return res.status(400).json({ error: 'Username parameter missing' });
	}
	try {
		const user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		next(err);
	}
};

const deleteByUsername = async (req, res, next) => {
	const { username } = req.query;
	try {
		const user = await User.findOneAndDelete({ username });
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		next(err);
	}
};

const updateUserByUserame = async (req, res, next) => {
	const { username } = req.body;
	try {
		const {
			password,
			fullName,
			birthday,
			email,
			phone,
			role,
			isAdmin,
			nif,
			userAddress,
			insuranceName,
			insurancePolicy,
			companyName,
			companyAddress,
			companyCAE,
			companyNIPC,
		} = req.body;
		const user = await User.findOneAndUpdate(
			{ username },
			{
				password,
				fullName,
				birthday,
				email,
				phone,
				role,
				isAdmin,
				nif,
				userAddress,
				insurance: {
					name: insuranceName,
					policy: insurancePolicy,
				},
				company: {
					name: companyName,
					address: companyAddress,
					cae: companyCAE,
					nipc: companyNIPC,
				},
				$set: {
					updatedAt: new Date(),
				},
			},
			{ new: true }
		);
		res.json({ user });
	} catch (err) {
		next(err);
	}
};

const createUserController = async (req, res, next) => {
	const {
		username,
		password,
		fullName,
		birthday,
		email,
		phone,
		role,
		isAdmin,
		nif,
		userAddress,
		insuranceName,
		insurancePolicy,
		companyName,
		companyAddress,
		companyCAE,
		companyNIPC,
	} = req.body;

	try {
		/* 		if (
			!username ||
			!password ||
			!fullName ||
			!birthday ||
			!email ||
			!phone ||
			!role ||
			!userAddress ||
			!nif ||
			!insuranceName ||
			!insurancePolicy ||
			!companyName ||
			!companyAddress ||
			!companyCAE ||
			!companyNIPC
		) {
			res.status(400).json({
				message: 'All fields are required, please fill all fields',
			});
		} */
		const user = await User.findOne({ username });
		if (user) {
			res.status(400).json({
				message: 'User already exists',
			});
		} else {
			await User.create({
				username,
				password,
				fullName,
				birthday,
				email,
				phone,
				role,
				isAdmin,
				userAddress,
				nif,
				insurance: {
					name: insuranceName,
					policy: insurancePolicy,
				},
				company: {
					name: companyName,
					address: companyAddress,
					cae: companyCAE,
					nipc: companyNIPC,
				},
			});
			res.status(200).json({
				message: 'User created',
			});
		}
	} catch (err) {
		next(err);
	}
};

module.exports = {
	createUserController,
	getAllUsers,
	getUserByUsername,
	deleteByUsername,
	updateUserByUserame,
};
