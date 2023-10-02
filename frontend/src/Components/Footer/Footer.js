import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<div className='Footer'>
			<div className='container-fluid shadowf '>
				<div className='row'>
					<div className='col-md-9'>
						<div className='use-links'>
							<ul>
								<li className='options_footer'>
									<a
										className='black-link'
										href='./contactos.html'
									>
										Contactos
									</a>
									<span className='m-3'>|</span>
								</li>
								<li className='options_footer'>
									<a
										className='black-link'
										href='https://www.livroreclamacoes.pt/Inicio/'
									>
										Livro de Reclamações
									</a>
									<span className='m-3'>|</span>
								</li>
								<li className='options_footer'>
									<a
										className='black-link'
										href='./politica_privacidade.html'
									>
										Política de Privacidade
									</a>
									<span className='m-3'>|</span>
								</li>
								<li className='options_footer'>
									<a
										className='black-link'
										href='./termos_condicoes.html'
									>
										Termos e Condições
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='social-icons'>
							<li>
								<a href='/'>
									<i className='bi bi-linkedin color'></i>
								</a>
							</li>
							<li>
								<a href='/'>
									<i className='bi bi-facebook color'></i>
								</a>
							</li>
							<li>
								<a href='/'>
									<i className='bi bi-whatsapp color'></i>
								</a>
							</li>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
