const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const mongooseDateFormat = require('mongoose-date-format');

//const bcryptjs = require('bcrypt');

///////////////////////////////////////////////////////////////////////////////////

//Para a coleção de validade dos produtos
const productSchema = new Schema({
	tipo_produto: {
		type: String,
		required: true,
		index: { unique: false },
	},
	nome_produto: {
		type: String,
		required: true,
	},
	dias_prazo: {
		type: Number,
		required: true,
	}
});

productSchema.plugin(mongooseDateFormat);

const Products = model('Products', productSchema, 'validade_aberto');

/////////////////////////////////////////////////////////////////////////////////////

//Para a coleção que regista a etiqueta dos produtos
const registerProductSchema = new Schema({
	idetiqueta: {
		type: Number,
		required: true,
		index: { unique: true },
	},
	idAtribuido: {
		type: String,
		required: true,
	},
	utilizador: {
		type: String,
		required: true,
	},
	tipoProduto: {
		type: String,
		required: true,
	},
	nomeProduto: {
		type: String,
		required: true,
	},
	lote: {
		type: Number,
		required: true,
	},
	dataAbertura: {
		type: Date,
		required: true,
	},
	dataValidadeDpsAberto: {
		type: Date,
		required: true,
	},
	dataValidadeLote: {
		type: Date,
		required: true,
	}

});


registerProductSchema.plugin(mongooseDateFormat);

const registerProducts = model('registerProducts', registerProductSchema, 'produto');

/////////////////////////////////////////////////////////////////////////////////////

module.exports = {
	Products,
	registerProducts,

};
