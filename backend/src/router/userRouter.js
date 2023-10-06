const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
	res.send('Hello from users!!');
});

module.exports = {
	userRouter: router,
};
