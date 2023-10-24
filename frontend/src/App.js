import './App.css';
import { useState } from 'react';

import { AuthProvider } from './Components/Auth/AuthContext';

import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';

import PublicRouter from './Routes/PublicRouter';
import UserRouter from './Routes/UserRouter';
import AdminRouter from './Routes/AdminRouter';
export default function App() {
	const [isLoged, setIsLoged] = useState(true);
	const [isAdmin, setIsAdmin] = useState(false);
	if (isLoged) {
		if (isAdmin) {
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
