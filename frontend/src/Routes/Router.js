import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import AuthComp from '../Components/Auth/AuthComp';

import SomeRoot from '../Components/SomeRoot';

import SecondaryNav from '../Components/SecondaryNav/SecondaryNav';
import LoginModal from '../Components/LoginModal/LoginModal';

import PublicTemplate from '../Components/Templates/PublicTemplate';
import UserTemplate from '../Components/Templates/UserTemplate';
import AdminTemplate from '../Components/Templates/AdminTemplate';

//Public
const Homepage = lazy(() => import('../Static/Homepage'));

//Static
const AboutUs = lazy(() => import('../Static/AboutUs'));
const ContactUs = lazy(() => import('../Static/Contactos'));
const Policies = lazy(() => import('../Static/PoliticaPrivacidade'));
const Terms = lazy(() => import('../Static/TermosCondicoes'));
const NotFound = lazy(() => import('../Components/404/404'));

// Logged
// Users
const UserHomeBtn = lazy(() =>
	import('../Backoffice/UserComp/UserHomeBtn/UserHomeBtn')
);

// Registo de tarefas
/* const UserBtnRegistos = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'
	)
); */

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
/* const RegistarProdutos = lazy(() =>
	import('../Backoffice/UserComp/RegistoProdutos/RegistarProdutos')
); */

// Consulta
const ConsultaTarefas = lazy(() =>
	import('../Backoffice/UserComp/Consulta/ConsultaTarefas')
);

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
	import(
		'../Backoffice/AdminComp/GerirRegistos/GeirRegistosBtn/GerirRegistosBtn'
	)
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

/* // Not found
const NotFound = lazy(() => import('../Components/404/404'));
 */

const routes = createBrowserRouter([
	{
		path: '/',
		element: <PublicTemplate />, // Show the homepage for not logged-in users
		children: [
			{
				index: true,
				element: <Homepage />,
			},
			{
				path: 'about-us',
				element: <AboutUs />,
			},
			{
				path: 'contact-us',
				element: <ContactUs />,
			},
			{
				path: 'policies',
				element: <Policies />,
			},
			{
				path: 'terms',
				element: <Terms />,
			},
			{
				element: <LoginModal />,
			},
			{
				path: '*',
				element: <NotFound />,
			},

			{
				path: 'user',
				element: <UserTemplate />, // Show AuthComp for users after login
				props: { requiredRole: 1 }, // 1 represents the user role
				children: [
					{
						path: '-home',
						element: <UserHomeBtn />,
					},
					{
						path: '-registar-tarefas',
						element: <UserBtnRegistos />,
					},
					{
						path: '-registo-limpeza',
						element: <BtnRegistoLimp />,
					},
					{
						path: '-registo-limpeza-balcao',
						element: <RegLimpBalcao />,
					},
					{
						path: '-registo-limpeza-copa',
						element: <RegLimpCopa />,
					},
					{
						path: '-registo-limpeza-cozinha',
						element: <RegLimpCozinha />,
					},
					{
						path: '-registo-limpeza-sala',
						element: <RegLimpSala />,
					},
					{
						path: '-registo-troca-oleo',
						element: <RegTrocaOleo />,
					},
					{
						path: '-registo-temperaturas',
						element: <RegTemperaturas />,
					},
					{
						path: '-registar-produtos',
						element: <RegistarProdutos />,
					},
					{
						path: '-consultar-tarefas',
						element: <ConsultaTarefas />,
					},
					{
						path: '*',
						element: <NotFound />,
					},
				],
			},
			{
				path: 'admin',
				element: <AdminTemplate />, // Show AuthComp for admins after login
				props: { requiredRole: 2 }, // 2 represents the admin role
				routes: [
					{
						index: true,
						element: <AdminHome />,
					},
					{
						path: '-gerir-produtos',
						element: <GerirProdutos />,
					},
					{
						path: '-gerir-perfis',
						element: <GerirPerfis />,
					},
					{
						path: '-gerir-registos',
						element: <GerirRegistos />,
					},
					{
						path: '-imprimir-registos',
						element: <ImprimirRegistos />,
					},
					{
						path: '-registar-tarefas',
						element: <UserBtnRegistos />,
					},
					{
						path: '-registar-produtos',
						element: <RegistarProdutos />,
					},
					{
						path: '-consultar-registos',
						element: <ConsultarRegistos />,
					},
					{
						path: '*',
						element: <NotFound />,
					},
				],
			},
			{
				path: '*',
				component: NotFound, // Not found page
			},
		],
	},
]);

export default routes;
