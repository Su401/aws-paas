const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
