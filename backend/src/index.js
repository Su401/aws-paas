//INSERIR JOI
require('dotenv').config();
const express = require('express');
const { sessionMiddleware } = require('./midleware/sessions');
const { checkAuth } = require('./midleware/auth');
const { openDbConnection, closeDbConnection } = require('./db');
const { userRouter } = require('./router/userRouter');
const { adminRouter } = require('./router/adminRouter');
const { contactsRouter } = require('./router/contactsRouter');
const {
	userController,
	logsController,
	tagController,
	addProductsController,
	getProductsDataController,
	deleteProductController,
	updateProductController,
	getProductTypeController,
	getEquipmentsOilChanging,
	updateOilChangeRecords,
} = require('./controllers');

const { findModalUsersController } = require('./controllers/modalUsers');
const { findRecordsController } = require('./controllers/records');

const { errorHandlerMiddleware } = require('./midleware/errors');

const app = express();
let db;

const initRequest = (req, res, next) => {
	// set the db connection in the "db" attribute of the request,
	// from now on I can access the database from the request
	req.db = db;
	next();
};

app.use(express.static('./frontend'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
app.use(checkAuth);
app.use(sessionMiddleware);
app.use(initRequest);

/* //teste para localhost:3000/
app.get('/', (req, res) => {
	res.send("O servidor está funcionando")
}) */
app.use('/contatos', contactsRouter);

// User router para enpoits acesseiveis para os usuários
app.use('/user', userRouter);

//Admin router para endpoints acessiveis para os admin/gerentes (contem crud users)
app.use('/admin', adminRouter);

// Definindo a rota POST para criar usuários //-->está no abminRouter
//app.post('/api/users', userController);

// Definindo a rota POST para criar logs
app.post('/api/logs', logsController);

// Definindo a rota POST para criar etiquetas
app.post('/api/labels', tagController);

// Definindo a rota POST para adicionar produtos
app.post('/api/adicionarProdutos', addProductsController);

// Definindo a rota DELETE para excluir produtos
app.delete('/api/excluirProduto/:id', deleteProductController);

//Definindo a rota GET para resgatar os dados do banco de dados para a tabela de produtos
app.get('/api/criarTabela', getProductsDataController);

//Definindo a rota UPDATE para editar produtos
app.put('/api/editarProduto/:id', updateProductController);

//Definido a rota get para consultar o registos pedidos
app.post('/api/gerirRegistos', findRecordsController);

// Definindo a rota GET para buscar os produtos para a impressão das etiquetas
app.get('/api/registoDeProdutos/preencheProdutos', getProductTypeController);

app.get('/api/modalUsers', findModalUsersController);

// Definindo a rota GET para buscar os equipamentos de troca de oleo
app.get('/api/registoTarefas/registarTrocaOleo', getEquipmentsOilChanging);

// Definindo a rota PUT para atualizar os registos de troca de óleo ao banco de dados
app.put('/api/registoTarefas/registarTrocaOleo/submeterDados', updateOilChangeRecords)
// every err object has "message" attribute and "code" attribute
/* app.use(errorHandlerMiddleware); */

const server = app.listen(8080, async () => {
	db = await openDbConnection();
});

server.on('close', async () => {
	await closeDbConnection();
});
