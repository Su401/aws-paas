import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
//Logged
//Admin
//const Homepage = lazy(() => import('../Static/AdminBtn'));
const GerirRegistos = lazy(() => import('../Backoffice/Registos/GerirRegistos'));
const GerirPerfis = lazy(() => import('../Backoffice/GerirPerfis/GerirPerfis'));
const BotoesRedecionais = lazy(() => import('../Static/BotoesRedecionais'));
const GerirProdutos = lazy(() => import('../Backoffice/GerirProdutos'));
/* const RegistarProdutos = lazy(() => import('../Backoffice/RegistarProdutos')) */
const BotoesRedecionais2 = lazy(() => import('../Static/BotoesRedirecionais2'));
/* const PrintPerfis = lazy(() => import('../Backoffice/GerirPerfis/PrintPerfis')); */
const NotFound = lazy(() => import('../Components/404/404'));
const UserHomeBtn = lazy(() =>
	import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn')
);

export default function AdminRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/admin' element={<BotoesRedecionais />} />
				<Route exact path='/gerir-perfis' element={<GerirPerfis />} />
				<Route
					exact
					path='/gerirRegistos'
					element={<GerirRegistos />}
				/>
				<Route
					exact
					path='/botoesRedecionais'
					element={<BotoesRedecionais />}
				/>
				<Route
					exact
					path='/gerirProdutos'
					element={<GerirProdutos />}
				/>
				{/* 				<Route exact path='/registarProdutos' element={<RegistarProdutos />} />
				 */}{' '}
				<Route
					exact
					path='/botoesRedecionais2'
					element={<BotoesRedecionais2 />}
				/>
				<Route exact path='/user' element={<UserHomeBtn />} />
				{/* <Route exact path='/consultar-perfis' element={<PrintPerfis />} /> */}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
