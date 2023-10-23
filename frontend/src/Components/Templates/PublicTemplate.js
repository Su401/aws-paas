import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryNav from '../PrimaryNav/PrimaryNav';
import Footer from '../Footer/Footer';
import AuthContext from '../Auth/AuthContext';
import Homepage from '../../Static/Homepage';

function PublicTemplate() {
	const navigate = useNavigate(); // Initialize the useNavigate hook
	const [auth, setAuth] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		// Redirect to the homepage when the component mounts
		navigate('/');
	}, []); // The empty dependency array ensures this effect runs once after the initial render

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<div>
				<header className='sticky-top'>
					<PrimaryNav />
				</header>
				{/* Content for the homepage */}
				<Homepage />
				<footer className='sticky-bottom'>
					<Footer />
				</footer>
			</div>
		</AuthContext.Provider>
	);
}

export default PublicTemplate;
