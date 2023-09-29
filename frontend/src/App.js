import PrimaryNav from './Components/PrimaryNav/PrimaryNav';
import Footer from './Components/Footer/Footer';
import './App.css';

export default function App() {
	return (
		<div className='App'>
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
