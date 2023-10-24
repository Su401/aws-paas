const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseDateFormat = require('mongoose-date-format');


const modalUsersSchema = new Schema({
    username: {
        type: String,
        index: { unique: true },
    }
});

modalUsersSchema.plugin(mongooseDateFormat);
const ModalUsers = model('ModalUsers', modalUsersSchema, 'users');

module.exports = {
    ModalUsers,
};
