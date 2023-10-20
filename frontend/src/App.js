import { useState } from 'react';
import React from 'react';
import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import SecondaryNav from './Components/SecondaryNav/SecondaryNav';
import './App.css';
import PublicRouter from './Routes/PublicRouter';
import AdminRouter from './Routes/AdminRouter';
import UserRouter from './Routes/UserRouter';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDNaGiCK1d5CGXCh4uPU53rrfaC5iQWa-I',
	authDomain: 'paas-0410.firebaseapp.com',
	projectId: 'paas-0410',
	storageBucket: 'paas-0410.appspot.com',
	messagingSenderId: '1071927480753',
	appId: '1:1071927480753:web:046fba0245b3873c2b6d90',
	measurementId: 'G-9T714640V3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
