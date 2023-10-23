import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './SecondaryNav.css';
import LoginModal from '../LoginModal/LoginModal';
import logo from '../../Images/logo.png';
//import AuthContext from '../Auth/AuthContext';

export default function SecondaryNav() {
	console.log('SecNav');
	const [show, setShow] = useState(false);
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		setShow(true);
	};

	return (
		<div>
			<div className='SecondaryNav'>
				<nav className='navbar navbar-expand-sm sticky-top navSec'>
					<div className='container-fluid'>
						<a className='navbar-brand' href='/'>
							<img src={logo} alt='logo' />
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
							<li className='nav-item'>
								<a href='/user' className='nav-link'>
									<button
										className='btn btn-primary me-2'
										type='button'
										style={{ color: 'white' }}
									>
										Área do utilizador
									</button>
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link btn btn-primary'
									href='/login'
									onClick={handleLogin}
									style={{ color: 'white' }}
								>
									Mudar de Conta
								</a>
							</li>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}
