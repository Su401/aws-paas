import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// Logged
// Admin
const AdminHome = lazy(() => import('../Backoffice/AdminComp/AdminHomebtn/AdminHomebtn'));
const GerirProdutos = lazy(() => import('../Backoffice/AdminComp/GerirProdutos/GerirProdutos'));
const GerirPerfis = lazy(() => import('../Backoffice/AdminComp/GerirPerfis/GerirPerfis'));
const GerirRegistos = lazy(() => import('../Backoffice/AdminComp/GerirRegistos/GeirRegistosBtn/GerirRegistosBtn'));
const UserBtnRegistos = lazy(() => import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn'));
const RegistarTarefas = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'))
const RegistarProdutos = lazy(() => import('../Backoffice/UserComp/RegistoProdutos/RegistarProdutos'));
const ConsultarRegistos = lazy(() => import('../Backoffice/AdminComp/ConsultarRegistos/ConsultarRegistos'));
const NotFound = lazy(() => import('../Components/404/404'));

export default function AdminRouter() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={<AdminHome />}
				/>
				<Route
					exact
					path='/gerir-produtos'
					element={<GerirProdutos />}
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
					path='/registar-tarefas'
					element={<RegistarTarefas />}
				/>
				<Route
					exact
					path='/registar-tarefas'
					element={<UserBtnRegistos />}
				/>
				<Route
					exact
					path='/registar-produtos'
					element={<RegistarProdutos />}
				/>
				<Route
					exact
					path='/consultar-registos'
					element={<ConsultarRegistos />}
				/>

				<Route
					path='*'
					element={<NotFound />} />
			</Routes>
		</Router>
	);
}
