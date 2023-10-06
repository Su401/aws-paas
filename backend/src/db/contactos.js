const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  mensagem: String,
});

const Contato = mongoose.model('Contato', contatoSchema, 'contacts' );

module.exports = { Contato };