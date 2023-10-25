const usersModule = require('./users');
const logsModule = require('./logs');
const labelsModule = require('./labels');
const productsModule = require('./products')
const equipamentsModule = require('./equipments')
const recordsModule = require('./records')

module.exports = {
	...usersModule,
	...logsModule,
	...labelsModule,
	...productsModule,
	...equipamentsModule,
	...recordsModule,
};
