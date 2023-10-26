const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
    mensagem: {
    type: String, 
    required: true,
  },
});

const Contato = mongoose.model('Contato', contatoSchema, 'contacts' );

module.exports = { Contato };