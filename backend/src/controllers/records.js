const { Records, OilChangeRecords } = require('../db/records');

const findRecordsController = async (req, res, next) => {
    const limischecked = req.body.limischecked;
    const troischecked = req.body.troischecked;
    const temischecked = req.body.temischecked;
    const dia = req.body.datacheck;
    const checked = [];


    if (limischecked) {
        checked.push({ "tarefa": "limpeza" });
    }
    if (troischecked) {
        checked.push({ "tarefa": "troca de oleo" });
    }
    if (temischecked) {
        checked.push({ "tarefa": "temperatura de frio" });
    }

    const query = {
        $and: [
            { "data": dia },
            { $or: checked }
        ]
    };

    try {
        const products = await Records.find(query);
        res.status(200).json(products);
        console.log(products);
    } catch (error) {
        console.log("Um problema foi detectado", error);
        res.status(500).json({ error: "Um problema foi detectado" });
    }
};

const updateOilChangeRecords = async (req, res, next) => {
    const oilChangeRecord = req.body;
    try {
        const documento = await OilChangeRecords.find({_id: "65383c3f900669a4502e0ab5"});
        res.status(200).json(documento);
    } catch(error) {
        console.log("Um problema foi detectado", error);
        res.status(500);
    }
}

module.exports = {
    findRecordsController,
    updateOilChangeRecords
};

