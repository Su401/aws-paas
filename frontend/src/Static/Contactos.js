import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TemplatePrimario.css';

export default function Contactos() {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [mensagem, setMensagem] = useState('');

	const handleNomeChange = (e) => {
		setNome(e.target.value);
		console.log('Nome:', nome);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		console.log('Email:', email);
	};
	const handleMensagemChange = (e) => {
		setMensagem(e.target.value);
		console.log('Mensagem:', mensagem);
	};

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

				<section>
					<h2>Formulário de Contacto</h2>
					<div className='col-3 contact'>
						<Form action='/enviar-mensagem' method='post'>
							<Form.Group controlId='nome'>
								<Form.Label>Nome:</Form.Label>
								<Form.Control
									type='text'
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
