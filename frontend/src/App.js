import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import './App.css';
import Homepage from './Static/Homepage';
import AboutUs from './Static/AboutUs';
import Contactos from './Static/Contactos';
import PoliticaPrivacidade from './Static/PoliticaPrivacidade';
import GerirRegistos from './Static/GerirRegistos';

export default function App() {
	return (
		<div className='App'>
			<header className='sticky-top'>
				<PrimaryNav />
			</header>
			<main>
				<GerirRegistos />
			</main>
			<footer className='sticky-bottom'>
				<Footer />
			</footer>
		</div>
	);
}
