const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//const bcryptjs = require('bcrypt');

const userSchema = new Schema({
	username: {
		type: String,
		/* 		required: true, */
		index: { unique: true },
	},
	password: {
		type: String,
		default: '1111',
		/* 		required: true, */
	},
	fullName: {
		type: String,
		/* 		required: true, */
	},
	birthday: {
		type: Date,
		default: new Date(),
		/* 		required: true, */
	},
	email: {
		type: String,
		/* 		required: true, */
	},
	phone: {
		type: Number,
		/* 		required: true, */
	},
	role: {
		type: Boolean,
		default: false,
		/* 		required: true, */
	},
	userAddress: {
		type: String,
		/* 		required: true, */
	},
	nif: {
		type: Number,
		/* 		required: true, */
	},
	insurance: {
		name: {
			type: String,
			/* 		required: true, */
		},
		policy: {
			type: Number,
			/* 		required: true, */
		},
	},
	company: {
		name: {
			type: String,
			/* 		required: true, */
		},
		address: {
			type: String,
			/* 		required: true, */
		},
		cae: {
			type: Number,
			/* 		required: true, */
		},
		nipc: {
			type: Number,
			/* 		required: true, */
		},
	},
});
//console.log(userSchema);
/* userSchema.pre('save', async function (next) {
	const user = this;
	if (user.isModified('password')) {
		user.password = await bcryptjs.hash(user.password, 8);
	}
	next();
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
	bcryptjs.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
}; */

const User = model('User', userSchema, 'users');

module.exports = {
	User,
};
