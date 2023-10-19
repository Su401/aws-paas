import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

//Loged
const UserHomeBtn = lazy(() => import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn'));

//Users
const UserBtnRegistos = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'));
const RegistarProdutos = lazy(() => import('../Backoffice/RegistarProdutos'))
const ConsultaTarefas = lazy(() => import('../Backoffice/UserComp/Consulta/ConsultaTarefas'))
const NotFound = lazy(() => import('../Components/404/404'));
const RegLimpBalcao = lazy(() => import('../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpBalcao/RegLimpBalcao'))

export default function PublicRouter() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<UserHomeBtn />} />
				<Route exact path='/UserBtnRegistos' element={<UserBtnRegistos />} />
				<Route exact path='/RegistarProdutos' element={<RegistarProdutos />} />
				<Route exact path='/ConsultarTarefas' element={<ConsultaTarefas />} />
				<Route exact path='/RegLimpBalcao' element={<RegLimpBalcao />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	);
}
