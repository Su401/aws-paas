import { Outlet } from 'react-router-dom';
import PrimaryNav from '../PrimaryNav/PrimaryNav';
import Footer from '../Footer/Footer';

function PublicTemplate() {
	return (
		<div className='PublicTemplate'>
			<header className='sticky-top'>
				<PrimaryNav />
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

export default PublicTemplate;
