import './App.css';
import { useState } from 'react';
import { useAuth } from './Components/Auth/AuthContext';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';

import AdminRouter from './Routes/AdminRouter';
import PublicRouter from './Routes/PublicRouter';
import UserRouter from './Routes/UserRouter';

export default function App() {
	const { user } = useAuth();

	if (user) {
		if (user.isAdmin) {
			return (
				<div className='Admin'>
					<header className='sticky-top'>
						<SecondaryNav />
					</header>
					<main>
						<AdminRouter />
					</main>
				</div>
			);
		} else {
			return (
				<div className='User'>
					<header className='sticky-top'>
						<SecondaryNav />
					</header>
					<main>
						<UserRouter />
					</main>
				</div>
			);
		}
	} else {
		return (
			<div className='Public'>
				<header className='sticky-top'>
					<PrimaryNav />
				</header>
				<main>
					<PublicRouter />
				</main>
				<footer className='sticky-bottom'>
					<Footer />
				</footer>
			</div>
		);
	}
}
