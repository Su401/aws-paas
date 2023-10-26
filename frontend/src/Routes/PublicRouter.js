import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from 'react-router-dom';
import { lazy } from 'react';

//Public
const Homepage = lazy(() => import('../Static/Homepage/Homepage'));

//Static
const AboutUs = lazy(() => import('../Static/AboutUs'));
const ContactUs = lazy(() => import('../Static/Contactos/Contactos'));
const Policies = lazy(() => import('../Static/PoliticaPrivacidade'));
const Terms = lazy(() => import('../Static/TermosCondicoes'));
const Beneficios = lazy(() => import('../Static/Beneficios'));
const Diversos = lazy(() => import('../Static/Diversos'));
const NotFound = lazy(() => import('../Components/404/404'));

export const PublicRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route exact path='/' element={<Homepage />}>
				<Route path='about-us' element={<AboutUs />} />
				<Route path='contact-us' element={<ContactUs />} />
				<Route path='policies' element={<Policies />} />
				<Route path='terms' element={<Terms />} />
				<Route path='beneficios' element={<Beneficios />} />
				<Route path='diversos' element={<Diversos />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</>
	)
);
