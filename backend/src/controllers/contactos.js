const {Contato} = require('../db/contactos'); // Importe o modelo de contato

/* // Controlador para lidar com o envio do formulário
const enviarMensagem = async (req, res) => {
  try {
    // Obtenha os dados do corpo da solicitação (formulário)
    const { nome, email, mensagem } = req.body;

    // Crie uma nova instância de Contato com os dados do formulário
    const novoContato = new Contato({
      nome,
      email,
      mensagem,
    });

    // Salve o novo contato no banco de dados
    await novoContato.save();

    // Responda com uma mensagem de sucesso
    res.status(201).json({ mensagem: 'Mensagem enviada com sucesso!' });
  } catch (erro) {
    console.error('Erro ao processar o formulário:', erro);
    res.status(500).json({ erro: 'Ocorreu um erro ao processar a mensagem.' });
  }
}; */
 
const getAllContacts = async (req, res) =>{
    console.log('get them contacts')
    res.send('waddup from contacts')
/*    try {
       // Crie uma instância do modelo Contato com os dados do formulário
       const Contato = await Contato.find();
       res.status(200).json({status: "success", data: Contato})
       } catch (error) {
       
       res.status(500).json({ erro: 'Erro ao enviar mensagem.' });
     } */
   }
module.exports = {
 /*  enviarMensagem, */
  getAllContacts
};
