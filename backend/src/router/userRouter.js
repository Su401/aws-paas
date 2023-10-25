const express = require('express');

const { getAllUsers } = require('../controllers/users');

const { loginController } = require('../controllers/login');

const { findModalUsersController } = require('../controllers/modalUsers');

const { findRecordsController } = require('../controllers/records');

const router = express.Router();

router.get('/allUsers', getAllUsers);

router.post('/login', loginController);

router.post('/gerirRegistos', findRecordsController);

router.post('/modalUsers', findModalUsersController);

module.exports = {
	userRouter: router,
};
