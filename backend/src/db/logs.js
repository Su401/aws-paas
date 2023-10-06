const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const logSchema = new Schema({
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
			oil: [
				{
					equipmentId: {
						type: Number,
						required: true,
					},
					changed: [
						{
							date: {
								type: Date,
								required: true,
								default: Date.now,
							},
							user: {
								type: String,
								required: true,
							},
							changed: {
								type: Boolean,
								required: true,
							},
							observation: {
								type: String,
								required: false,
							},
						},
					],
				},
			],
			icebox: [
				{
					equipmentId: {
						type: Number,
						required: true,
					},
					reading: [
						{
							date: {
								type: Date,
								required: true,
								default: Date.now,
							},
							user: {
								type: String,
								required: true,
							},
							temp: {
								open: {
									type: Number,
									required: false,
								},
								close: {
									type: Number,
									required: false,
								},
							},
							observation: {
								type: String,
								required: false,
							},
						},
					],
				},
			],
			cleaning: [
				{
					counter: [
						{
							date: {
								type: Date,
								required: true,
								default: Date.now,
							},
							user: {
								type: String,
								required: true,
							},
							tasks: {
								floor: {
									type: Boolean,
									required: true,
								},
								ceiling: {
									type: Boolean,
									required: true,
								},
								counter: {
									type: Boolean,
									required: true,
								},
								iceboxPos: {
									type: Boolean,
									required: true,
								},
								iceboxNeg: {
									type: Boolean,
									required: true,
								},
								shelves: {
									type: Boolean,
									required: true,
								},
								doors: {
									type: Boolean,
									required: true,
								},
								garbage: {
									type: Boolean,
									required: true,
								},
								equipment1: {
									type: Boolean,
									required: true,
								},
								others: {
									type: Boolean,
									required: true,
								},
							},
						},
					],
					room: [
						{
							date: {
								type: Date,
								required: true,
								default: Date.now,
							},
							user: {
								type: String,
								required: true,
							},
							tasks: {
								floor: {
									type: Boolean,
									required: true,
								},
								ceiling: {
									type: Boolean,
									required: true,
								},
								counter: {
									type: Boolean,
									required: true,
								},
								garbage: {
									type: Boolean,
									required: true,
								},
								equipment: {
									type: Boolean,
									required: true,
								},
								others: {
									type: Boolean,
									required: true,
								},
							},
						},
					],
					copa: [
						{
							date: {
								type: Date,
								required: true,
								default: Date.now,
							},
							user: {
								type: String,
								required: true,
							},
							tasks: {
								floor: {
									type: Boolean,
									required: true,
								},
								ceiling: {
									type: Boolean,
									required: true,
								},
								counter: {
									type: Boolean,
									required: true,
								},
								shelves: {
									type: Boolean,
									required: true,
								},
								doors: {
									type: Boolean,
									required: true,
								},
								garbage: {
									type: Boolean,
									required: true,
								},
								equipment1: {
									type: Boolean,
									required: true,
								},
								others: {
									type: Boolean,
									required: true,
								},
							},
						},
					],
					kitchen: [
						{
							date: {
								type: Date,
								required: true,
								default: Date.now,
							},
							user: {
								type: String,
								required: true,
							},
							tasks: {
								floor: {
									type: Boolean,
									required: true,
								},
								ceiling: {
									type: Boolean,
									required: true,
								},
								counter: {
									type: Boolean,
									required: true,
								},
								iceboxPos: {
									type: Boolean,
									required: true,
								},
								iceboxNeg: {
									type: Boolean,
									required: true,
								},
								shelves: {
									type: Boolean,
									required: true,
								},
								doors: {
									type: Boolean,
									required: true,
								},
								garbage: {
									type: Boolean,
									required: true,
								},
								equipment1: {
									type: Boolean,
									required: true,
								},
								equipment2: {
									type: Boolean,
									required: true,
								},
								equipment3: {
									type: Boolean,
									required: true,
								},
								equipment4: {
									type: Boolean,
									required: true,
								},
								others: {
									type: Boolean,
									required: true,
								},
							},
						},
					],
				},
			],
		},
	],
});

const Logs = model('Logs', logSchema, 'logs');

module.exports = {
	Logs,
};
