import React from 'react';

export default function NotFound() {
	return (
		<div className='NotFound'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-6'>
						<div className='text-center'>
							<h1 className='display-1'>404</h1>
							<h2 className='display-6'>
								Ops! Página não encontrada
							</h2>
							<p className='lead'>
								A página que procura não existe ou foi removida.
							</p>
							<a href='/' className='btn btn-primary'>
								Voltar para a página inicial
							</a>
						</div>
					</div>
					<div className='col-md-6'>
						<img
							src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
							alt='404'
							className='img-fluid'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
