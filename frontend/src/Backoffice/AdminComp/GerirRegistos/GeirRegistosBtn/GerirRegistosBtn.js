import './GerirRegistosBtn.css';
export default function GerirRegistosBtn() {
	return (
		<div>
			<div className='row'>
				<div className='mt-lg-4'>
					<span></span>
				</div>
				<div className='col greetings'>
					<span className='hello'>Olá </span>
					<span className='user'>Susana !</span>
				</div>
			</div>
			<div className='container-fluid'>
				<div className='row'>
					<div className='mb-lg-5 mb-md-5 mb-sm-5'></div>
				</div>
				<div className='d-flex justify-content-evenly'>
					<div className='row mt-lg-5 mt-md-5'>
						<div className='col-lg-4'>
							<div
								className='card pb-lg-5'
								style={{ width: '22rem', height: '15rem' }}
							>
								<div className='card-body'>
									<a
										href='/admin/gerir-registos-equipamentos'
										className='stretched-link btnedit'
									>
										<span className='letterEdit'>
											GERIR EQUIPAMENTOS
										</span>
										<br></br>
										<span className='letter2Edit'>
											{' '}
											DE FRIO E TROCA DE ÓLEO
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div
								className='card pb-lg-5'
								style={{ width: '22rem', height: '15rem' }}
							>
								<div className='card-body'>
									<a
										href='/admin/gerir-registos-limpeza'
										className='stretched-link btnedit'
									>
										<span className='letterEdit'>
											GERIR REGISTOS
										</span>
										<br></br>{' '}
										<span className='letter2Edit'>
											{' '}
											DE LIMPEZA
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-4'>
							<div
								className='card pb-lg-5'
								style={{ width: '22rem', height: '15rem' }}
							>
								<div className='card-body'>
									<a
										href='/admin/gerir-registos-utilizador'
										className='stretched-link btnedit'
									>
										<span className='letterEdit'>
											GERIR REGISTOS
										</span>
										<br></br>{' '}
										<span className='letter2Edit'>
											{' '}
											DE UTILIZADOR
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
