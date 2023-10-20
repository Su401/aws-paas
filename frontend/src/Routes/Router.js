import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import SecondaryNav from '../Components/SecondaryNav/SecondaryNav';
import LoginModal from '../Components/LoginModal/LoginModal';

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

/* // Not found
const NotFound = lazy(() => import('../Components/404/404'));
 */

const Router = createBrowserRouter([
	{
		path: '/',
		element: <SecondaryNav />,
		children: [
			{
				index: true,
				element: <LoginModal />,
			},
			{
				path: 'user',
				children: [
					{
						path: 'user-home',
						element: <UserHomeBtn />,
					},
					{
						path: 'registos',
						children: [
							{
								index: true,
								element: <UserBtnRegistos />,
							},
							{
								path: 'limpezas',
								children: [
									{
										index: true,
										element: <BtnRegistoLimp />,
									},
									{
										path: 'balcao',
										element: <RegLimpBalcao />,
									},
									{
										path: 'copa',
										element: <RegLimpCopa />,
									},
									{
										path: 'cozinha',
										element: <RegLimpCozinha />,
									},
									{
										path: 'sala',
										element: <RegLimpSala />,
									},
								],
							},
							{
								path: 'oleo',
								element: <RegTrocaOleo />,
							},
							{
								path: 'temperaturas',
								element: <RegTemperaturas />,
							},
						],
					},
					{
						path: 'produtos',
						element: <RegistarProdutos />,
					},
					{
						path: 'consulta',
						element: <ConsultaTarefas />,
					},
				],
			},
		],
	},
]);

export default Router;
