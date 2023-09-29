import React from 'react';
import './PrimaryNav.css';
import logo from '../../Images/logo.png';
export default function PrimaryNav() {
	return (
		<div className='PrimaryNav '>
			<nav className='navbar navbar-expand-md bg-body py-3 shadow nav'>
				<div className='container-fluid me-5'>
					<div className='navbar-brand d-flex align-items-center logo'>
						<a href='/'>
							<img src={logo} alt='paas logo' />
						</a>
					</div>
					<button
						className='navbar-toggler'
						data-bs-toggle='collapse'
						data-bs-target='#navcol-2'
					>
						<span className='visually-hidden'>
							Toggle navigation
						</span>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div id='navcol-2' className='collapse navbar-collapse'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a
									className='nav-link Typograph'
									href='./homepage.html'
								>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									href='#myModal'
									data-bs-toggle='modal'
									data-bs-target='#exampleModal'
									className='nav-link Typograph'
								>
									Login
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link active Typograph_active'
									href='/'
								>
									About Us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
