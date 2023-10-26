import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// Logged
// Admin
const AdminHome = lazy(() =>
	import('../Backoffice/AdminComp/AdminHomebtn/AdminHomebtn')
);
const GerirProdutos = lazy(() =>
	import('../Backoffice/AdminComp/GerirProdutos/GerirProdutos')
);
const GerirPerfis = lazy(() =>
	import('../Backoffice/AdminComp/GerirPerfis/GerirPerfis')
);
const GerirRegistos = lazy(() =>
	import(
		'../Backoffice/AdminComp/GerirRegistos/GeirRegistosBtn/GerirRegistosBtn'
	)
);
const UserBtnRegistos = lazy(() =>
	import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn')
);
const RegistarTarefas = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'
	)
);
const RegistarProdutos = lazy(() =>
	import('../Backoffice/UserComp/RegistoProdutos/RegistarProdutos')
);
const ConsultarRegistos = lazy(() =>
	import('../Backoffice/AdminComp/ConsultarRegistos/ConsultarRegistos')
);
const RegistarTrocaOleo = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Oleo/RegistarTrocaOleo')
);
const RegistarTempFrio = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Temperaturas/RegTemperaturas')
);
const RegistarLimpezas = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/BtnRegistoLimpezas/BtnRegistoLimpezas'
	)
);
const RegistarLimpezasSala = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpSala/RegLimpSala'
	)
);
const RegistarLimpezasCozinha = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCozinha/RegLimpCozinha'
	)
);
const RegistarLimpezasCopa = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCopa/RegLimpCopa'
	)
);
const RegistarLimpezasBalcao = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpBalcao/RegLimpBalcao'
	)
);
const GerirRegistosUtilizador = lazy(() =>
	import(
		'../Backoffice/AdminComp/GerirRegistos/GerirUsers/GerirRegistosUtilizador'
	)
);
const NotFound = lazy(() => import('../Components/404/404'));

export default function AdminRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<AdminHome />} />
				<Route
					exact
					path='/gerir-produtos'
					element={<GerirProdutos />}
				/>
				<Route exact path='/gerir-perfis' element={<GerirPerfis />} />
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
					exact
					path='/registo-troca-oleo'
					element={<RegistarTrocaOleo />}
				/>
				<Route
					exact
					path='/registo-temperaturas'
					element={<RegistarTempFrio />}
				/>
				<Route
					exact
					path='/registo-limpeza'
					element={<RegistarLimpezas />}
				/>
				<Route
					exact
					path='/registo-limpeza-balcao'
					element={<RegistarLimpezasBalcao />}
				/>
				<Route
					exact
					path='/registo-limpeza-sala'
					element={<RegistarLimpezasSala />}
				/>
				<Route
					exact
					path='/registo-limpeza-copa'
					element={<RegistarLimpezasCopa />}
				/>
				<Route
					exact
					path='/registo-limpeza-cozinha'
					element={<RegistarLimpezasCozinha />}
				/>
				<Route
					exact
					path='/gerir-registos-utilizador'
					element={<GerirRegistosUtilizador />}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
