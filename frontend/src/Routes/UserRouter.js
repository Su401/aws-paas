import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// Logged
// Users
const UserHomeBtn = lazy(() =>
	import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn')
);

// Registo de tarefas
const UserBtnRegistos = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'
	)
);

// Limpezas
const BtnRegistoLimp = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Limpezas/BtnRegistoLimpezas')
);
const RegLimpBalcao = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpBalcao/RegLimpBalcao'
	)
);
const RegLimpCopa = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCopa')
);
const RegLimpCozinha = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCozinha')
);
const RegLimpSala = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpSala')
);

// Óleo
const RegTrocaOleo = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Oleo/RegTrocaOleo')
);

// Temperaturas
const RegTemperaturas = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Temperaturas/RegTemperaturas')
);

// Registo de Produtos
const RegistarProdutos = lazy(() =>
	import('../Backoffice/UserComp/RegistoProdutos/RegistarProdutos')
);

// Consulta
const ConsultaTarefas = lazy(() =>
	import('../Backoffice/UserComp/Consulta/ConsultaTarefas')
);

// Not found
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
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
