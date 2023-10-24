const usersModule = require('./users');
const logsModule = require('./logs');
const labelsModule = require('./labels');
const productsModule = require('./products')
const equipamentsModule = require('./equipments')

module.exports = {
	...usersModule,
	...logsModule,
	...labelsModule,
	...productsModule,
	...equipamentsModule,
};
