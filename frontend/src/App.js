import { useState } from 'react';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import './App.css';
import Homepage from './Static/Homepage';
import PublicRouter from './Routes/PublicRouter';

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
}

export default function App() {
	const [isLoged, setIsLoged] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);
	if (isLoged) {
		if (isAdmin) {
			return (
				<div className='Admin'>
					<header className='sticky-top'>
						<SecondaryNav />
					</header>
					<main></main>
				</div>
			);
		} else {
			return (
				<div className='User'>
					<header className='sticky-top'>
						<SecondaryNav />
					</header>
					<main></main>
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
