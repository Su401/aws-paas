import { useState } from 'react';
import React from 'react';
import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import SecondaryUser from './Components/SecondaryNavUser/SecondaryNav';
import './App.css';
import PublicRouter from './Routes/PublicRouter';
import AdminRouter from './Routes/AdminRouter';
import UserRouter from './Routes/UserRouter'


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
						<SecondaryUser />
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





/* 
function Public() {
	return (
		<div className='Public'>
			<header className='sticky-top'>
				<PrimaryNav />
			</header>
			<main></main>
			<footer className='sticky-bottom'>
				<Footer />
			</footer>
		</div>
	);
}

function LogedBabes() {
	return (
		<div className='Public'>
			<header className='sticky-top'>
				<SecondaryNav />
			</header>
			<main></main>
		</div>
	);
} */