const ElectronPDF = require('electron-pdf');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const exporter = new ElectronPDF();
exporter.on('charged', () => {
	app.listen(port, hostname, () => {
		console.log(`Export Server running at http://${hostname}:${port}`);
	});
});
exporter.start();
