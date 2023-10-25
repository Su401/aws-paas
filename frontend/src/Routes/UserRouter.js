import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// Logged
// Users
const UserHomeBtn = lazy(() => import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn'));
const UserBtnRegistos = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'));
const BtnRegistoLimp = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Limpezas/BtnRegistoLimpezas/BtnRegistoLimpezas'));
const RegLimpBalcao = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpBalcao/RegLimpBalcao'));
const RegLimpCopa = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCopa/RegLimpCopa'));
const RegLimpCozinha = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCozinha/RegLimpCozinha'));
const RegLimpSala = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpSala/RegLimpSala'));
const RegTrocaOleo = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Oleo/RegistarTrocaOleo'));
const RegTemperaturas = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Temperaturas/RegTemperaturas'));
const RegistarProdutos = lazy(() => import('../Backoffice/UserComp/RegistoProdutos/RegistarProdutos'));
const ConsultaTarefas = lazy(() => import('../Backoffice/UserComp/Consulta/ConsultaTarefas'));
const NotFound = lazy(() => import('../Components/404/404'));

export default function UserRouter() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path='/'
					element={<UserHomeBtn />}
				/>
				<Route
					exact
					path='/consultar-tarefas'
					element={<ConsultaTarefas />}
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
					path='/registo-troca-oleo'
					element={<RegTrocaOleo />}
				/>
				<Route
					exact
					path='/registo-temperaturas'
					element={<RegTemperaturas />}
				/>
				<Route
					exact
					path='/registo-limpeza'
					element={<BtnRegistoLimp />}
				/>
				<Route
					exact
					path='/registo-limpeza-balcao'
					element={<RegLimpBalcao />}
				/>
				<Route
					exact
					path='/registo-limpeza-copa'
					element={<RegLimpCopa />}
				/>
				<Route
					exact
					path='/registo-limpeza-cozinha'
					element={<RegLimpCozinha />}
				/>
				<Route
					exact
					path='/registo-limpeza-sala'
					element={<RegLimpSala />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</Router>
	);
}
