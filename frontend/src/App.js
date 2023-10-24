import './App.css';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Router';
import { AuthProvider } from './Components/Auth/AuthContext';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import SecondaryUser from './Components/SecondaryNavUser/SecondaryNav';
import './App.css';
import PublicRouter from './Routes/PublicRouter';
import UserRouter from './Routes/UserRouter';
import AdminRouter from './Routes/AdminRouter';
export default function App() {
	const [isLoged, setIsLoged] = useState(true);
	const [isAdmin, setIsAdmin] = useState(true);
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
