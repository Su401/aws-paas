import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from 'react-router-dom';

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
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/BtnRegistoLimpezas/BtnRegistoLimpezas'
	)
);
const RegLimpBalcao = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpBalcao/RegLimpBalcao'
	)
);
const RegLimpCopa = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCopa/RegLimpCopa'
	)
);
const RegLimpCozinha = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpCozinha/RegLimpCozinha'
	)
);
const RegLimpSala = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/Limpezas/RegLimpSala/RegLimpSala'
	)
);

// Óleo
const RegTrocaOleo = lazy(() =>
	import('../Backoffice/UserComp/RegistoTarefas/Oleo/RegistarTrocaOleo')
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

export const UserRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route exact path='/user' element={<UserHomeBtn />}>
				<Route path='consultar-tarefas' element={<ConsultaTarefas />} />
				<Route path='registar-tarefas' element={<UserBtnRegistos />} />
				<Route
					path='registar-produtos'
					element={<RegistarProdutos />}
				/>
				<Route path='registo-troca-oleo' element={<RegTrocaOleo />} />
				<Route
					path='registo-temperaturas'
					element={<RegTemperaturas />}
				/>
				<Route path='registo-limpeza' element={<BtnRegistoLimp />} />
				<Route
					path='registo-limpeza-balcao'
					element={<RegLimpBalcao />}
				/>
				<Route path='registo-limpeza-copa' element={<RegLimpCopa />} />
				<Route
					path='registo-limpeza-cozinha'
					element={<RegLimpCozinha />}
				/>
				<Route path='registo-limpeza-sala' element={<RegLimpSala />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</>
	)
);
