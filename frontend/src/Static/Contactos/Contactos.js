// Resumo da Mecânica do useState:
// Declaração de Estado: const [estado, setEstado] = useState(valorInicial);

// estado: Variável que armazena o valor do estado.
// setEstado: Função usada para atualizar o estado.
// valorInicial: Valor inicial do estado.
// Atualização do Estado: setEstado(novoValor);

// novoValor: Valor que será atribuído ao estado.
// O useState permite adicionar estado a componentes de função no React,
// permitindo que você mantenha e atualize dinamicamente informações no seu componente.
// Cada estado tem sua própria função de atualização, e a função setEstado é usada para alterar o valor do estado,
// o que aciona uma re-renderização do componente com o novo estado.

// import  { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../Static/TemplatePrimario.css';
// import { contatos } from './apiCalls';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";



// export default function Contactos() {
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [mensagem, setMensagem] = useState('');
//   const [mensagemEnviada, setMensagemEnviada] = useState(false);
//   const [erroEnvio, setErroEnvio] = useState('');

//   const handleNomeChange = (e) => {
//     setNome(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMensagemChange = (e) => {
//     setMensagem(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // todos os campos estão preenchidos?
//     if (!nome || !email || !mensagem) {
//       setErroEnvio('Por favor, preencha todos os campos.');
//       return;
//     }
//     console.log('Valores enviados para o backend:', { nome, email, mensagem });
//     // limpa mensagem de erro anterior, se houver
//     setErroEnvio('');

//     try {
//       // envia a mensagem ao servidor
//       await contatos({ nome, email, mensagem });

//       // mensagem foi enviada com sucesso
//       setMensagemEnviada(true);

//       // limpa campos form
//       setNome('');
//       setEmail('');
//       setMensagem('');
//     } catch (error) {
//       console.error('Erro ao enviar mensagem:', error);
//       setErroEnvio('Ocorreu um erro ao processar a mensagem. Por favor, tente novamente.');
//     }
//   };

//    return (
//     <div className='Contactos'>
//       <div className='body'>
//         <h1>Contactos</h1>
//         <section className='boas-vindas'>
//           <article className='primeiro'>
//             <address>
//               <p>
//                 <strong>Morada:</strong> Rua da Empresa, 123
//                 <br />
//                 5300-123 Bragança
//                 <br />
//                 Portugal
//               </p>
//               <p>
//                 <strong>Telefone:</strong> +351 123 456 789
//               </p>
//               <p>
//                 <strong>Email:</strong> info@empresa-xyz.pt
//               </p>
//             </address>
//           </article>
//         </section>

//         <section className='row'>
//           <div className='col'>
//             <h2>Formulário de Contacto</h2>
//           </div>
//           <div className='col-form'>
//             {erroEnvio && <p className='mensagem-erro'>{erroEnvio}</p>}
//             {mensagemEnviada ? (
//               <p className='mensagem-confirmacao'>
//                 Obrigado por entrar em contacto! Recebemos a sua mensagem.
//               </p>
//             ) : (
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group controlId='nome'>
//                   <Form.Label>Nome:</Form.Label>
//                   <Form.Control
//                     type='text'
//                     placeholder='insira o seu nome p.f.'
//                     className='rounded-2'
//                     required
//                     value={nome}
//                     onChange={handleNomeChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId='email'>
//                   <Form.Label>Email:</Form.Label>
//                   <Form.Control
//                     type='email'
//                     placeholder='insira o seu email p.f.'
//                     className='rounded-2'
//                     required
//                     value={email}
//                     onChange={handleEmailChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId='mensagem'>
//                   <Form.Label>Mensagem:</Form.Label>
//                   <Form.Control
//                     as='textarea'
//                     rows={4}
//                     placeholder='p.f indique o seu motivo de contacto e entraremos em contacto consigo assim que possível'
//                     className='rounded-2'
//                     required
//                     value={mensagem}
//                     onChange={handleMensagemChange}
//                   />
//                 </Form.Group>
//                 <Button
//                   variant='primary'
//                   type='submit'
//                   className='shadow-sm btn-lg-custom'
//                 >
//                   Enviar Mensagem
//                 </Button>
//               </Form>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Static/TemplatePrimario.css';
import { contatos } from './apiCalls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactos() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const [erroEnvio, setErroEnvio] = useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMensagemChange = (e) => {
    setMensagem(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // todos os campos estão preenchidos?
    if (!nome || !email || !mensagem) {
      setErroEnvio('Por favor, preencha todos os campos.');
      return;
    }

    // limpa mensagem de erro anterior, se houver
    setErroEnvio('');

    try {
      // envia a mensagem ao servidor
      await contatos({ nome, email, mensagem });

      // mensagem foi enviada com sucesso
      setMensagemEnviada(true);

      // limpa campos form
      setNome('');
      setEmail('');
      setMensagem('');

      // Exibe a mensagem de sucesso
      toast.success('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setErroEnvio('Ocorreu um erro ao processar a mensagem. Por favor, tente novamente.');

      // Exibe a mensagem de erro
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <div className='Contactos'>
      <ToastContainer position='top-right' autoClose={3000} />
      <div className='body'>
      <h1>Contactos</h1>
             <section className='boas-vindas'>
          <article className='primeiro'>
             <address>
               <p>
                 <strong>Morada:</strong> Rua da Empresa, 123
                 <br />
                 5300-123 Bragança
                 <br />
                 Portugal
               </p>
               <p>
                 <strong>Telefone:</strong> +351 123 456 789
               </p>
               <p>
                 <strong>Email:</strong> info@empresa-xyz.pt
               </p>
             </address>
           </article>
         </section>

         <section className='row'>
           <div className='col'>
             <h2>Formulário de Contacto</h2>
           </div>
           <div className='col-form'>
             {erroEnvio && <p className='mensagem-erro'>{erroEnvio}</p>}
             {mensagemEnviada ? (
               <p className='mensagem-confirmacao'>
                 Obrigado por entrar em contacto! Recebemos a sua mensagem.
               </p>
             ) : (
               <Form onSubmit={handleSubmit}>
                 <Form.Group controlId='nome'>
                   <Form.Label>Nome:</Form.Label>
                   <Form.Control
                     type='text'
                     placeholder='insira o seu nome p.f.'
                     className='rounded-2'
                     required
                     value={nome}
                     onChange={handleNomeChange}
                   />
                 </Form.Group>
                 <Form.Group controlId='email'>
                   <Form.Label>Email:</Form.Label>
                   <Form.Control
                     type='email'
                     placeholder='insira o seu email p.f.'
                     className='rounded-2'
                     required
                     value={email}
                    onChange={handleEmailChange}
                   />
                 </Form.Group>
                 <Form.Group controlId='mensagem'>
                   <Form.Label>Mensagem:</Form.Label>
                   <Form.Control
                     as='textarea'
                     rows={4}
                     placeholder='p.f indique o seu motivo de contacto e entraremos em contacto consigo assim que possível'
                     className='rounded-2'
                     required
                     value={mensagem}
                     onChange={handleMensagemChange}
                   />
                 </Form.Group>
                 <Button
                   variant='primary'
                   type='submit'
                   className='shadow-sm btn-lg-custom'
                 >
                   Enviar Mensagem
                 </Button>
               </Form>
             )}
           </div>
         </section> 
      </div>
    </div>
  );
}
