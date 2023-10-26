const express = require('express');
const {
	getAllUsers,
	createUserController,
	getUserByUsername,
	deleteByUsername,
	updateUserByUserame,
} = require('../controllers/users');

const router = express.Router();

router.post('/createUser', createUserController);

router.get('/allUsers', getAllUsers);

router.get('/getUser', getUserByUsername);

router.delete('/deleteUser', deleteByUsername);

router.put('/updateUser', updateUserByUserame);

module.exports = {
	adminRouter: router,
};
