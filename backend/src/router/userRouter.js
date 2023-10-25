const express = require('express');

const { getAllUsers } = require('../controllers/users');

const { getUserByUsernameAndPassword } = require('../controllers/login');

const { findModalUsersController } = require('../controllers/modalUsers');

const { findRecordsController } = require('../controllers/records');

const router = express.Router();

router.get('/allUsers', getAllUsers);

router.post('/login', getUserByUsernameAndPassword);

router.post('/gerirRegistos', findRecordsController);

router.post('/modalUsers', findModalUsersController);

module.exports = {
	userRouter: router,
};
