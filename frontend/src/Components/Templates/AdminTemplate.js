import React from 'react';
import SecondaryNav from '../SecondaryNav/SecondaryNav';

function AdminTemplate({ children }) {
	return (
		<div className='Admin'>
			<header className='sticky-top'>
				<SecondaryNav />
			</header>
			<main>{children}</main>
		</div>
	);
}

export default AdminTemplate;
