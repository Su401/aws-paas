import React from 'react';
import "../404/404.css"
export default function NotFound() {
	return (
		<div className='NotFound'>
			<div className='container-fluid'>
				<div className='row mb-5'>

				</div>
				<div className='row mb-5'>

				</div>
				<div className='row'>
					<div className='text-center image-container'>
						<img
							src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
							alt='404'
							className='center'
							style={{
								height: "400px", width: "600px", display: "block",
								marginLeft: "auto",
								marginRight: "auto",
							}}
						/>
						<div className='overlay-text'>
							<h1 className='display-1'>404</h1>
							<div className='row mt-5'>

							</div>
							<div className='row mb-5'>

							</div>
							<div className='row mb-5'>

							</div>
							<div className='row mb-5'>

							</div>
							<h2 className='display-6'>
								Ops! Página não encontrada
							</h2>
							<p className='lead'>
								A página que procura não existe ou foi removida.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div style={{ textAlign: "center" }}>
				<a href='/' className='btn btn-primary mt-5'>
					Voltar para a página inicial
				</a>
			</div>
		</div>
	);
}
