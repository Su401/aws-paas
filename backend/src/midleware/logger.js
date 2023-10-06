const winston = require('winston');

// read the NODE_ENV environment variable
const environment = process.env.NODE_ENV;

// "production" constant will be true if we're running
// our application in production, so if environment variables
// NODE_ENV is set to "production"
const production = environment === 'production';

// create a new logger
const logger = winston.createLogger({
	// in production, the log level will be "info",
	// otherwise it will be "debug"
	level: production ? 'info' : 'debug',
	format: production
		? // in production we use JSON format
		  winston.format.combine(
				winston.format.timestamp(),
				winston.format.json()
		  )
		: // otherwise we use simple format
		  // (human readable)
		  winston.format.combine(
				// this formatter adds colors
				winston.format.colorize(),
				winston.format.timestamp(),
				winston.format.simple()
		  ),
	transports: production
		? // in production write logs to this file
		  new winston.transports.File({
				filename: './application.log',
		  })
		: // otherwise print logs in the console
		  new winston.transports.Console(),
});

// this is an Express middleware that logs the path and the method
// of every request
const requestLoggerMiddleware = (request, response, next) => {
	// extract path and method attributes from the request
	const { path, method } = request;
	// log this message
	logger.info(`${method} request to ${path}`);
	// proceed with the routing chain
	next();
};

// we want to access "logger" and "requestLoggerMiddleware"
// outside of this file
module.exports = {
	logger,
	requestLoggerMiddleware,
	production,
};
