import './SecondaryNav.css';

export default function SecondaryNav() {
	return (
		<div className='SecondaryNav'>
			<nav className='navbar navbar-expand-sm sticky-top navSec'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/'>
						<img src='../images/logo.png' alt='logo' />
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo02'
						aria-controls='navbarTogglerDemo02'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarTogglerDemo02'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
						<a href='/' className='nav-item'>
							<button
								className='btn btn-primary me-2'
								type='button'
							>
								Área do utilizador
							</button>
						</a>
						<a
							className='nav-item btn btn-primary'
							href='#myModal'
							data-bs-toggle='modal'
							data-bs-target='#exampleModal'
						>
							Mudar de Conta
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}