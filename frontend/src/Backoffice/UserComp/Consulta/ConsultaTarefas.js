//Nheco Nheco Butones

//Troca Oleo ---> Sem Template
//Limpeza Copa ---> Sem Template
//Limpeza Cozinha ---> Sem Template
//Registo produtos ---> Sem Template

import '../Consulta/ConsultarTarefas.css';

// Componente Pai: ConsultaTarefas
export default function ConsultaTarefas() {
	return (
		<div className='ConsultaTarefas backgroundSec'>
			<div className='container'>
				<div className='container-title'>
					<h1>Consulta de Tarefas</h1>
				</div>
				<div className='btn-container'>
					<div className='row mt-3'>
						<div className='col-12 col-md-12 col-btn'>
							<a href='#'>
								<button
									className='btn btn-primary shadow-sm btn-lg'
									type='button'
								>
									Trocar o Óleo
								</button>
							</a>
						</div>
						<div className='col-12 col-md-12 col-btn'>
							<a href='#'>
								<button
									className='btn btn-primary shadow-sm btn-lg'
									type='button'
								>
									Limpeza da Copa
								</button>
							</a>
						</div>
						<div className='col-12 col-md-12 col-btn'>
							<a href='#'>
								<button
									className='btn btn-primary shadow-sm btn-lg'
									type='button'
								>
									Limpeza da Cozinha
								</button>
							</a>
						</div>
						<div className='col-12 col-md-12 col-btn'>
							<a href='./registarProdutos.html'>
								<button
									className='btn btn-primary shadow-sm btn-lg'
									type='button'
								>
									Registo de Produto
								</button>
							</a>
						</div>
					</div>
				</div>

				<div className='btn-bottom-container'>
					<div className='row'>
						<div className='col-12 col-md-12 col-btn'>
							<a href='/user'>
								<button
									className='btn btn-primary m-3 m-md-5 area_col typography'
									type='button'
								>
									Área do Colaborador
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// adicionar roteamento para navegação entre diferentes páginas.
// Isso permitiria que cada botão redirecionasse para uma página específica.
// Criar as páginas do utilizador
// Caso haja necessidade de compartilhar estado entre diferentes partes da aplicação,
// podemos considerar a utilização do Context API ou de bibliotecas de gerenciamento de estado como Redux.
// Manipulação de Estado (useState):

// Se houver necessidade de gerenciar o estado dos botões
// (por exemplo, alterar a cor do botão quando clicado), podemos usar o Hook useState para isso.
