const express = require('express');
const {
	getAllUsers,
	createUserController,
	getUserByUsername,
	deleteByUsername,
	updateUserByUserame,
} = require('../controllers/users');

const {
	findModalUsersController
} = require('../controllers/modalUsers')

const {
	findRecordsController
} = require('../controllers/records')

const router = express.Router();

router.post('/createUser', createUserController);

router.get('/allUsers', getAllUsers);

router.get('/getUser', getUserByUsername);

router.delete('/deleteUser', deleteByUsername);

router.put('/updateUser', updateUserByUserame);

router.post('/gerirRegistos', findRecordsController);

router.get('/modalUsers', findModalUsersController)

module.exports = {
	adminRouter: router,
};
