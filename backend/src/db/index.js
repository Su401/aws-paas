// Requiring module
const mongoose = require('mongoose');
//const { Schema, model } = mongoose;
const usersModule = require('./users');
const logsModule = require('./logs');
const labelsModule = require('./labels');
const productsModule = require('./products')

const openDbConnection = async function main() {
	try {
		const db = await mongoose.connect(
			'mongodb+srv://susana_silva:NTmF9V20QcXF25Hg@project.dmf683l.mongodb.net/paas',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		console.log(`Connected to ${db.connection.host}`);
	} catch (e) {
		console.error(e.message);
	}
};

const closeDbConnection = async () => {
	await mongoose.disconnect();
};

module.exports = {
	openDbConnection,
	closeDbConnection,
	...usersModule,
	...logsModule,
	...labelsModule,
	...productsModule,
};
