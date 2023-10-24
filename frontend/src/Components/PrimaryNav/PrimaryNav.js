import React, { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import './PrimaryNav.css';
import logo from '../../Images/logo.png';

export default function PrimaryNav() {
	const [show, setShow] = useState(false);

	// Handle opening the login modal
	const handleLogin = (e) => {
		e.preventDefault();
		setShow(true);
	};

	return (
		<div className='PrimaryNav '>
			<nav className='navbar navbar-expand-md bg-body py-3 shadow nav'>
				<div className='container-fluid me-5'>
					<div className='navbar-brand d-flex align-items-center logo'>
						<a href='/'>
							{/* Use handleNavigation to navigate to the home page */}
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
								<a className='nav-link Typograph' href='/'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a
									className='nav-link Typograph'
									href='/login'
									onClick={handleLogin}
								>
									Login
								</a>
								<LoginModal show={show} setShow={setShow} />
							</li>
							<li className='nav-item'>
								<a
									className='nav-link Typograph'
									href='/about-us'
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
