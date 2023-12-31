const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const equipamentsSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    }
});

const Equipaments = model('Equipaments', equipamentsSchema, 'equipment');

module.exports = { 
    Equipaments,
}