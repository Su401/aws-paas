const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
	to: 'fluffyunicorn.yeah@gmail.com', // Change to your recipient
	from: 'sfrs.iefp@alunos.ipb.pt', // Change to your verified sender
	subject: 'Sending with SendGrid is Fun',
	text: 'and easy to do anywhere, even with Node.js',
	html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
	.send(msg)
	.then(() => {
		console.log('Email sent');
	})
	.catch((error) => {
		console.error(error);
	});
/* 
// Compare this snippet from backend/src/routes/contactos.js:
// const express = require('express');
// const router = express.Router();
// const { enviarMensagem } = require('../controllers/contactos');
//
// router.post('/', enviarMensagem);
//
// module.exports = router;
const express = require('express');
const router = express.Router();
const { getAllContacts } = require('../controllers/contactos');
router.get('/contacts/', async (req, res) => await getAllContacts()); */
