import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './PrimaryNav.css';
import logo from '../../Images/logo.png';
export default function PrimaryNav() {
	const [homeActive, setHomeActive] = useState(false);
	const [loginActive, setLoginActive] = useState(false);
	const [aboutActive, setAboutActive] = useState(false);

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
							<li
								className={`nav-item ${homeActive ? 'active' : ''
									}`}
							>
								<a
									className={`nav-link Typograph ${homeActive ? 'active' : ''
										}`}
									href='./homepage.html'
									onClick={() => {
										setHomeActive(true);
										setLoginActive(false);
										setAboutActive(false);
									}}
								>
									Home
								</a>
							</li>
							<li
								className={`nav-item ${loginActive ? 'active' : ''
									}`}
							>
								<a
									className={`nav-link Typograph ${loginActive ? 'active' : ''
										}`}
									href='/'
									data-bs-toggle='modal'
									data-bs-target='#exampleModal'
									onClick={() => {
										setHomeActive(false);
										setLoginActive(true);
										setAboutActive(false);
									}}
								>
									Login
								</a>
							</li>
							<li
								className={`nav-item ${aboutActive ? 'active' : ''
									}`}
							>
								<a
									className={`nav-link Typograph ${aboutActive ? 'active' : ''
										}`}
									href='/'
									onClick={() => {
										setHomeActive(false);
										setLoginActive(false);
										setAboutActive(true);
									}}
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
