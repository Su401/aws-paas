const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tagSchema = new Schema({
	company: {
		type: String,
		required: true,
		index: { unique: true },
	},
	establishment: {
		type: String,
		required: false,
	},
	logs: [
		{
			tag: {
				type: Number,
				required: true,
			},
			produce: {
				type: String,
				required: true,
			},
			user: {
				type: String,
				required: true,
			},
			typeProduce: {
				type: String,
				required: true,
			},
			batch: {
				type: Number,
				required: true,
			},
			openDate: {
				type: Date,
				required: true,
				default: Date.now,
			},
			expireAfterOpen: {
				type: Date,
				required: true,
			},
			originalExpireDate: {
				type: Date,
				required: true,
			},
		},
	],
});

const Tags = model('Tags', tagSchema, 'tags');

module.exports = {
	Tags,
};
