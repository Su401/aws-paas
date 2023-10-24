import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
//Logged
//Admin
const GerirRegistos = lazy(() => import('../Backoffice/Registos/GerirRegistos'));
const GerirPerfis = lazy(() => import('../Backoffice/GerirPerfis/GerirPerfis'));
const BotoesRedecionais = lazy(() => import('../Static/BotoesRedecionais'));
const GerirProdutos = lazy(() => import('../Backoffice/GerirProdutos'));
const RegistarProdutos = lazy(() => import('../Backoffice/RegistarProdutos'));
const NotFound = lazy(() => import('../Components/404/404'));

export default function AdminRouter() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={<BotoesRedecionais />}
				/>
				<Route
					exact
					path='/gerir-perfis'
					element={<GerirPerfis />}
				/>
				<Route
					exact
					path='/gerir-registos'
					element={<GerirRegistos />}
				/>
				<Route
					exact
					path='/gerir-produtos'
					element={<GerirProdutos />}
				/>
				<Route
					exact
					path='/registar-produtos'
					element={<RegistarProdutos />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</Router>
	);
}
