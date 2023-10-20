//Consultar Tarefas --> Redireciona ConsultaTarefas (ritz)

import '../UserHomeBtn/UserHomeBtn.css';

export default function UserHomeBtn() {
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
									href='/consultar-tarefas'
									className='stretched-link btnedit'
								>
									<span className='letterEdit'>
										CONSULTAR
									</span>
									<br></br>
									<span className='letter2Edit'>
										{' '}
										TAREFAS
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
									href='/registar-tarefas'
									className=' btnedit'
								>
									<span className='letterEdit'>
										REGISTO DE
									</span>
									<br></br>{' '}
									<span className='letter2Edit'>TAREFAS</span>
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
									href='/registar-produtos'
									className='btnedit'
								>
									<span className='letterEdit'>
										REGISTO DE{' '}
									</span>
									<br></br>{' '}
									<span className='letter2Edit'>
										{' '}
										ABERTURA DE
									</span>
									<br></br>{' '}
									<span className='letter2Edit'>
										{' '}
										PRODUTOS
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
