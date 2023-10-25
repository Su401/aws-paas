import React, { useState } from 'react';
import './SecondaryNav.css';
import LoginModal from '../LoginModal/LoginModal';
import logo from '../../Images/logo.png';

export default function SecondaryNav() {
	const [show, setShow] = useState(false);
	const [dbUsers, setdbUsers] = useState([]);

	const HandleLogin = async (e) => {
		e.preventDefault();
		setShow(true);
		try {
			const response = await fetch(
				'http://localhost:8080/api/modalUsers',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (response.ok) {
				const dados = await response.json();
				const dbUserIds = new Set(dbUsers.map((user) => user.id));
				const newUserData = dados.filter(
					(user) => !dbUserIds.has(user.id)
				);
				const result = [...dbUsers, ...newUserData];
				setdbUsers(result);
			} else {
				console.log('Something went wrong with your data');
			}
		} catch (error) {
			console.error('Erro na solicitação', error);
		}
	};
	return (
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
						<a href='/' className='nav-item'>
							<button
								className='btn btn-primary me-2'
								type='button'
								style={{ color: 'white' }}
							>
								Área do utilizador
							</button>
						</a>
						<a
							className='nav-item btn btn-primary'
							href='/login'
							onClick={HandleLogin}
							style={{ color: 'white' }}
						>
							Mudar de Conta
						</a>
						<LoginModal
							show={show}
							setShow={setShow}
							dbUsers={dbUsers}
							setdbUsers={setdbUsers}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
}
