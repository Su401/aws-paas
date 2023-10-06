import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

//Public

const Homepage = lazy(() => import('../Static/Homepage'));
const AboutUs = lazy(() => import('../Static/AboutUs'));
const ContactUs = lazy(() => import('../Static/Contactos'));
const Policies = lazy(() => import('../Static/PoliticaPrivacidade'));
const Terms = lazy(() => import('../Static/TermosCondicoes'));
const LoginModal = lazy(() => import('../Components/LoginModal/LoginModal'));
const NotFound = lazy(() => import('../Components/404'));

export default function PublicRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Homepage />} />
				<Route exact path='/about-us' element={<AboutUs />} />
				<Route exact path='/contact-us' element={<ContactUs />} />
				<Route exact path='/policies' element={<Policies />} />
				<Route exact path='/terms' element={<Terms />} />
				<Route exact path='/login' element={<LoginModal />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}