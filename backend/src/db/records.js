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

const changeSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    mudanca: {
        type: Boolean,
        required: true,
    },
    observacoes: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: false
    }
})

const oilChangeRecordsSchema = new Schema({
    id_equipamento: {
        type: String,
        required: true,
    },
    trocas: [changeSchema]
})



recordsSchema.plugin(mongooseDateFormat);
const Records = model('Records', recordsSchema, 'records');

oilChangeRecordsSchema.plugin(mongooseDateFormat);
const OilChangeRecords = model('OilChangeRecords', oilChangeRecordsSchema, 'registo');

module.exports = {
    Records,
    OilChangeRecords,
};
