const { logger } = require('./logger');

// all the operations we want to perform when an error occurs
const errorHandler = (error) => {
	logger.error('An error occurred');
	logger.error(error);

	// in production, send an email to app admin
};

// the error middleware that will be invoked every time you call
// next(...) with a parameter, like next(error)
const errorHandlerMiddleware = (error, req, res, next) => {
	errorHandler(error);
	res.status(error.code);
	res.json({
		errorMessage: error.message,
	});
};

module.exports = {
	errorHandler,
	errorHandlerMiddleware,
};
