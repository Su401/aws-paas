import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './Components/Sass/my-bootstrap.scss';
// import GerirPerfis from './Backoffice/GerirPerfis';

// import Contactos from './Static/Contactos';
// import PrimaryNav from '../src/Components/PrimaryNav/PrimaryNav';
// import Footer from '../src/Components/Footer/Footer';
import ConsultaTarefas from './Static/ConsultaTarefas';
// import GerirRegistos from './Backoffice/Registos/GerirRegistos';
// import ImprimirRegistos from './Backoffice/Registos/ImprimirRegistos';
// import GerirRegistos from './Backoffice/GerirRegistos';
//import GerirPerfis from './Backoffice/GerirPerfis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>
		<ConsultaTarefas />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
