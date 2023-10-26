const express = require('express');
const router = express.Router();

const { getAllContacts, enviarMensagem} =require ("../controllers/contactos")



router.post("/enviar-mensagem", enviarMensagem )
router.get("/enviar-mensagem", getAllContacts)



module.exports = {contactsRouter : router};
