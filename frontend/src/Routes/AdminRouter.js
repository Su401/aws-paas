import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
//Logged
//Admin
const AdminHome = lazy(() =>
	import('../Backoffice/AdminComp/AdminHomebtn/AdminHomebtn')
);

//AdminHome
const GerirProdutos = lazy(() =>
	import('../Backoffice/AdminComp/GerirProdutos/GerirProdutos')
);

//GerirPerfis
const GerirPerfis = lazy(() =>
	import('../Backoffice/AdminComp/GerirPerfis/GerirPerfis')
);

//GerirRegistos --> Aquela Parte malandra de backofice / admin sem codigo nenhum #medo
const GerirRegistos = lazy(() =>
	import('../Backoffice/AdminComp/GerirRegistos/GeirRegistosBtn')
);
// Registo de tarefas
const UserBtnRegistos = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'
	)
);
// Registo de Produtos
const RegistarProdutos = lazy(() =>
	import('../Backoffice/UserComp/RegistoProdutos/RegistarProdutos')
);

const ConsultarRegistos = lazy(() =>
	import('../Backoffice/AdminComp/ConsultarRegistos/ConsultarRegistos')
);
const ImprimirRegistos = lazy(() =>
	import('../Backoffice/AdminComp/ConsultarRegistos/ImprimirRegistos')
);
const NotFound = lazy(() => import('../Components/404/404'));

export default function AdminRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/admin' element={<AdminHome />} />
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
					path='/imprimir-registos'
					element={<ImprimirRegistos />}
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

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
