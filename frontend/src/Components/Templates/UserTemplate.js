import React from 'react';
import SecondaryNav from '../SecondaryNav/SecondaryNav';

function UserTemplate({ children }) {
	return (
		<div className='User'>
			<header className='sticky-top'>
				<SecondaryNav />
			</header>
			<main>{children}</main>
		</div>
	);
}

export default UserTemplate;
