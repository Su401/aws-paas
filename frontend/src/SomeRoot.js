import React from 'react';
import { useAuth } from './Components/Auth/AuthContext';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';

import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import LoginModal from './Components/LoginModal/LoginModal';
export default function SomeRoot() {
	const { user } = useAuth();

	return (
		<div className='App'>
			<header className='sticky-top'>
				{user ? <SecondaryNav /> : <PrimaryNav />}
				<LoginModal />
			</header>
			<main>
				<Outlet />
			</main>
			<footer className='sticky-bottom'>
				<Footer />
			</footer>
		</div>
	);
}
