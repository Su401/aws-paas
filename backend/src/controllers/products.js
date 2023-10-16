const path = require('path');

const { Products, registerProducts } = require('../db');

const addProductsController = async (req, res, next) => {
	const items = req.body;
	console.log(items)
	
	try{
		 
		
		const products = await Products.create({
        tipo_produto : items.tipo,
        nome_produto: items.nome,
        dias_prazo: items.validade,
    })

		res.json({
			blah: products,
		});
	} catch (error) {
		console.log("Um problema foi detectado", error);
		res.status(500).json({error: "Um problema foi detectado"})
	}
};

const getProductsDataController = async (req, res, next) => {
	try {
		const products = await Products.find({});
		res.json({
			allProducts: products
		})
	} catch (error) {
		console.log("Ocorreu um problema na renderização da tabela ", error);
	}
}

const deleteProductController = async (req, res, next) => {
	const resourceId = req.params.id;

	try {
		console.log(resourceId)
		const response = await Products.findOneAndDelete({_id: resourceId});
		res.status(204).send(response)
	} catch (error){
		console.error("Ocorreu um erro na operação ", error)
		res.status(500).json({error: "Um problema foi detectado"})
	}
}

const updateProductController = async (req, res, next) => {
	const resourceId = req.params.id;
	const corpo = req.body;
	const caixaTipo = corpo.tipoProduto;
	const caixaNome = corpo.nomeProduto;
	const caixaValidade = corpo.validadeProduto;

	try {
		const response = await Products.findByIdAndUpdate({_id: resourceId}, 
			{
				tipo_produto: caixaTipo,
				nome_produto: caixaNome,
				dias_prazo: caixaValidade,
			})
		res.status(204).send(response);
	} catch (error){
		console.error("Ocorreu um erro na operação ", error)
		res.status(500).json({error: "Um problema foi detectado"})
	}
}

const getProductTypeController = async (req, res, next) => {
	try {
		const products = await Products.aggregate([
			{
				$group: {
					_id: "$tipo_produto",
					valoresUnicos: { $addToSet:"$tipo_produto"},
					produtosArray: { 
						$push: {
							nomeProduto: "$nome_produto",
							validade: "$dias_prazo"
						}
					}
				}
			},
			{
				$project: {
					_id: 0,
					tipo_produto: '$_id',
					valoresUnicos: 1,
					produtosArray: 1
				}
			}
		]).exec()	
		res.status(200).send({allProducts: products});
	} catch (error){
		console.error("Ocorreu um erro na operação ", error);
		res.status(500).json({error: "Um problema foi detectado"})
	}
}

module.exports = {
	addProductsController,
	getProductsDataController,
	deleteProductController,
	updateProductController,
	getProductTypeController,

};
