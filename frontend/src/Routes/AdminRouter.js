import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from 'react-router-dom';
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
	import('../Backoffice/AdminComp/GerirRegistos/Registos/GerirRegistos')
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
const NotFound = lazy(() => import('../Components/404/404'));

export const AdminRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route exact path='/admin' element={<AdminHome />}>
				<Route path='gerir-produtos' element={<GerirProdutos />} />
				<Route path='gerir-perfis' element={<GerirPerfis />} />
				<Route path='gerir-registos' element={<GerirRegistos />} />
				<Route path='registar-tarefas' element={<RegistarTarefas />} />
				<Route path='registar-tarefas' element={<UserBtnRegistos />} />
				<Route
					path='registar-produtos'
					element={<RegistarProdutos />}
				/>
				<Route
					path='consultar-registos'
					element={<ConsultarRegistos />}
				/>

				<Route path='*' element={<NotFound />} />
			</Route>
		</>
	)
);
