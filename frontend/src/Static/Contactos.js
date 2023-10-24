import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TemplatePrimario.css';

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

// import React, { useState } from 'react';: Aqui, estamos importando a biblioteca React e o
// hook useState dela. O useState é um hook que permite adicionar estado a componentes de função no React.

export default function Contactos() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [mensagem, setMensagem] = useState('');

	// const [nome, setNome] = useState('');: Isso cria um estado chamado nome e uma função setNome para atualizar esse
	// estado. O estado inicial é uma string vazia (''). O mesmo padrão se aplica a email e mensagem.

	const handleNomeChange = (e) => {
		setNome(e.target.value);
		console.log('Nome:', nome);
	};

	// e: Este é um objeto de evento que é passado como argumento para a função de manipulador de eventos.
	// Ele contém informações sobre o evento que ocorreu.

	// e.target: Este é o elemento do DOM que acionou o evento. No caso de eventos de formulário,
	// como onChange em um campo de entrada (<input>), e.target aponta para esse campo de entrada.

	// e.target.value: Agora, value é uma propriedade de muitos elementos de formulário que representa o
	// valor atual do campo. Para campos de texto (<input type="text">), value representa o texto atualmente inserido no campo.

	// Em resumo, e.target.value é utilizado para obter o valor de um campo de entrada quando ocorre um
	// evento, como a alteração (onChange) desse campo. No seu código, ao usar e.target.value nos manipuladores de eventos onChange,
	// você está capturando dinamicamente o valor inserido nos campos do formulário à medida que o usuário digita.
	// Esse valor é então utilizado para atualizar o estado correspondente usando a função setEstado do useState.

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		console.log('Email:', email);
	};
	const handleMensagemChange = (e) => {
		setMensagem(e.target.value);
		console.log('Mensagem:', mensagem);
	};

	//   const handleNomeChange = (e) => setNome(e.target.value);: Aqui, estamos a criar funções de
	// manipulador de eventos para os campos do formulário. Essas funções são chamadas sempre que o valor
	// dos campos do formulário é alterado,
	// e elas atualizam os estados correspondentes usando as funções setNome, setEmail e setMensagem.

	return (
		<div className='Contactos'>
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

				{/* value={nome}: A propriedade value dos campos do formulário é definida para o estado correspondente 
(nome, email ou mensagem). Isso significa que os campos do formulário serão controlados pelo estado.

onChange={handleNomeChange}: O evento onChange é configurado para chamar a função handleNome
Change sempre que o valor do campo do formulário é alterado. Isso atualiza o estado correspondente. */}

				<section className='row'>
					<div className='col'>
						<h2>Formulário de Contacto</h2>
					</div>
					<div className='col'>
						<Form action='/enviar-mensagem' method='post'>
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
					</div>
				</section>
			</div>
		</div>
	);
}
