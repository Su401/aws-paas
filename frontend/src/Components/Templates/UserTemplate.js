import { Outlet } from 'react-router';
import SecondaryNav from '../SecondaryNav/SecondaryNav';

function UserTemplate() {
	return (
		<div className='User'>
			<header className='sticky-top'>
				<SecondaryNav />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default UserTemplate;
