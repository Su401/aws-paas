import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
//Logged
//Admin
//const Homepage = lazy(() => import('../Static/AdminBtn'));

const GerirPerfis = lazy(() => import('../Backoffice/GerirPerfis/GerirPerfis'));
/* const PrintPerfis = lazy(() => import('../Backoffice/GerirPerfis/PrintPerfis'));
 */
const NotFound = lazy(() => import('../Components/404'));

export default function AdminRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/gerir-perfis' element={<GerirPerfis />} />
				{/* 				<Route
					exact
					path='/consultar-perfis'
					element={<PrintPerfis />}
				/> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
