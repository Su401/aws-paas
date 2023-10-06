const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseDateFormat = require('mongoose-date-format');


const recordsSchema = new Schema({
    data: {
        type: String,
        required: true,
    },
    espaço: {
        type: String,
        required: true,
    },
    tarefa: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    }
});

recordsSchema.plugin(mongooseDateFormat);
const Records = model('Records', recordsSchema, 'records');

module.exports = {
    Records,
};
