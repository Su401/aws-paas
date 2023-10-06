const { Records } = require('../db/records');

const findRecordsController = async (req, res, next) => {
    const selectedValues = req.body.selectedValues;
    const dia = req.body.inicioInserido;

    try {
        const query = {
            data: dia,
        };

        if (selectedValues.length > 0) {
            query.tarefa = { $in: selectedValues };
        }

        const products = await Records.find(query);

        res.status(200).json(products);
    } catch (error) {
        console.log("Um problema foi detectado", error);
        res.status(500).json({ error: "Um problema foi detectado" });
    }
};

module.exports = {
    findRecordsController
};