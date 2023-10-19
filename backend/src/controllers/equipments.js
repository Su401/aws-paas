const { Equipaments} = require('../db')

const getEquipmentsOilChanging = async (req, res, next) => {
    try {
		const equipaments = await Equipaments.find({"type":"troca_oleo"});
		res.json({
			allEquipaments: equipaments,
		})
	} catch (error) {
		console.log("Ocorreu um problema na busca dos dados de equipamentos ", error);
		res.status(500).json({error: "Um problema foi detectado"})
	}
}

module.exports = { 
	getEquipmentsOilChanging,
}