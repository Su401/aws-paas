import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from 'react-router-dom';
import { lazy } from 'react';
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
const Beneficios = lazy(() => import('../Static/Beneficios'));
const Diversos = lazy(() => import('../Static/Diversos'));
const NotFound = lazy(() => import('../Components/404/404'));

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
const RegistarTarefas = lazy(() =>
	import(
		'../Backoffice/UserComp/RegistoTarefas/UserBtnRegistos/UserBtnRegistos'
	)
);
const ConsultarRegistos = lazy(() =>
	import('../Backoffice/AdminComp/ConsultarRegistos/ConsultarRegistos')
);

/**
 * Defines the routes for the application using the `createBrowserRouter` function from `react-router-dom`.
 * The routes are defined using the `createRoutesFromElements` function and JSX elements.
 * The routes are divided into three main sections: public, user, and admin.
 * Each section has its own template and sub-routes.
 * The `NotFound` component is used as a fallback for any undefined routes.
 *
 * @returns {Object} The routes object.
 */
export const routes = createBrowserRouter(
	createRoutesFromElements(
		<>
			{
				{
					/* PUBLIC */
				}
			}
			<Route path='/' element={<PublicTemplate />}>
				<Route index element={<Homepage />} />
				<Route path='about-us' element={<AboutUs />} />
				<Route path='contact-us' element={<ContactUs />} />
				<Route path='policies' element={<Policies />} />
				<Route path='terms' element={<Terms />} />
				<Route path='beneficios' element={<Beneficios />} />
				<Route path='diversos' element={<Diversos />} />
				<Route path='*' element={<NotFound />} />
			</Route>
			{
				{
					/* USER */
				}
			}
			<Route path='/user' element={<UserTemplate />}>
				<Route index element={<UserHomeBtn />} />
				<Route path='consultar-tarefas' element={<ConsultaTarefas />} />
				<Route path='registar-tarefas' element={<UserBtnRegistos />} />
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

				<Route
					path='registar-produtos'
					element={<RegistarProdutos />}
				/>
				<Route path='*' element={<NotFound />} />
			</Route>
			{
				{
					/* ADMIN */
				}
			}
			<Route path='/admin' element={<AdminTemplate />}>
				<Route index element={<AdminHome />} />
				<Route path='gerir-produtos' element={<GerirProdutos />} />
				<Route path='gerir-perfis' element={<GerirPerfis />} />
				<Route path='gerir-registos' element={<GerirRegistos />} />
				<Route path='registar-tarefas' element={<UserBtnRegistos />} />
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
