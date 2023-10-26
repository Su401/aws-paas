//Consultar Tarefas --> Redireciona ConsultaTarefas (ritz)

import '../UserBtnRegistos/UserBtnRegistos.css';

export default function UserBtnRegistos() {
	return (
		<div>
			<GreetingsUser />
			<DirectionalButtons />
		</div>
	);
}

function GreetingsUser() {
	return (
		<div className='row'>
			<div className='mt-lg-4'>
				<span></span>
			</div>
			<div className='col greetings'>
				<span className='hello'>Olá </span>
				<span className='user'>Susana !</span>
			</div>
		</div>
	);
}

function DirectionalButtons() {
	return (
		<>
			<div className='d-flex justify-content-evenly backgroundSec'>
				<div className='row mt-lg-5 mt-md-5'>
					<div className='col-lg-4'>
						<div
							className='card pb-lg-5'
							style={{ width: '20rem', height: '15rem' }}
						>
							<div className='card-body'>
								<a
									href='/user/registo-troca-oleo'
									className='stretched-link btnedit'
								>
									<span className='letterEdit'>REGISTAR</span>
									<br></br>
									<span className='letter2Edit'>
										{' '}
										TROCA DE ÓLEO
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<div
							className='card pb-lg-5'
							style={{ width: '20rem', height: '15rem' }}
						>
							<div className='card-body'>
								<a
									href='user/registo-limpeza'
									className=' btnedit'
								>
									<span className='letterEdit'>REGISTAR</span>
									<br></br>{' '}
									<span className='letter2Edit'>LIMPEZA</span>
								</a>
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<div
							className='card pb-lg-5'
							style={{ width: '20rem', height: '15rem' }}
						>
							<div className='card-body'>
								<a
									href='user/registo-temperaturas'
									className='btnedit'
								>
									<span className='letterEdit'>REGISTAR</span>
									<br></br>{' '}
									<span className='letter2Edit'>
										{' '}
										TEMPERATURA
									</span>
									<br></br>{' '}
									<span className='letter2Edit'>
										{' '}
										DO FRIO
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<div className='mt-lg-5'></div>
				</div>
			</div>
		</>
	);
}
