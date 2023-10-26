import SecondaryNav from '../SecondaryNav/SecondaryNav';
import { Outlet } from 'react-router';

function AdminTemplate() {
	return (
		<div className='AdminTemplate'>
			<header className='sticky-top'>
				<SecondaryNav />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default AdminTemplate;
