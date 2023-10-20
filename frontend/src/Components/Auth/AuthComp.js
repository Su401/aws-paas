import { useContext } from 'react';
import AuthContext from './AuthContext';
import PublicRouter from '../../Routes/PublicRouter';

import PrimaryNav from '../PrimaryNav/PrimaryNav';
import Footer from '../Footer/Footer';

const AuthComp = (props) => {
	const { auth } = useContext(AuthContext);
	return (
		<>
			{(auth & props.role) > 0 ? (
				<div>{props.children}</div>
			) : (
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
			)}
		</>
	);
};

export default AuthComp;
