import { useState } from 'react';
import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import './App.css';
import Homepage from './Static/Homepage';

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
	return <div className='App'></div>;
}
