import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

//Public

const GerirPerfis = lazy(() => import('../Backoffice/GerirPerfis/GerirPerfis'));
const PrintPerfis = lazy(() => import('../Backoffice/GerirPerfis/PrintPerfis'));
const ContactUs = lazy(() => import('../Static/Contactos'));
const Policies = lazy(() => import('../Static/PoliticaPrivacidade'));
const Terms = lazy(() => import('../Static/TermosCondicoes'));
const LoginModal = lazy(() => import('../Components/LoginModal/LoginModal'));
const NotFound = lazy(() => import('../Components/404'));

export default function PublicRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/gerir-perfis' element={<GerirPerfis />} />
				<Route
					exact
					path='/consultar-perfis'
					element={<PrintPerfis />}
				/>
				<Route exact path='/contact-us' element={<ContactUs />} />
				<Route exact path='/policies' element={<Policies />} />
				<Route exact path='/terms' element={<Terms />} />
				<Route exact path='/login' element={<LoginModal />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
