// Importando as bibliotecas necessárias
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/TemplateSecundario.css';
import '../css/ConsultarTarefas.css';

import ConsultaTarefas from '../Static/ConsultaTarefas.js'
// Criando um contexto para o usuário
const UserContext = React.createContext();

const Header = () => {
  return (
    <header className="sticky-top">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/user-area">
            <Button variant="primary me-2">Área do utilizador</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/change-account" className="Typograph">
            Mudar de Conta
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

const Main = () => {
  return (
    <main className="backgroundSec">
      <div className="container">
        <div className="container-title">
          <h1>Consulta de Tarefas</h1>
        </div>
        <div className="btn-container">
          {/* Adicione links para navegação */}
          <div className="row mt-3">
            <div className="col-12 col-md-12 col-btn">
              <Link to="/src/Backoffice/GerirRegistos.js">
                <button className="btn btn-primary shadow-sm btn-lg" type="button">Trocar o Óleo</button>
              </Link>
            </div>
            <div className="col-12 col-md-12 col-btn">
              <Link to="/src/Backoffice/GerirRegistos.js">
                <button className="btn btn-primary shadow-sm btn-lg" type="button">Limpeza da Copa</button>
              </Link>
            </div>
            <div className="col-12 col-md-12 col-btn">
              <Link to="../src/Backoffice/GerirRegistos.js">
                <button className="btn btn-primary shadow-sm btn-lg" type="button">Limpeza da Cozinha</button>
              </Link>
            </div>
            <div className="col-12 col-md-12 col-btn">
              <Link to="../src/Backoffice/GerirProdutos.js">
                <button className="btn btn-primary shadow-sm btn-lg" type="button">Registo de Produto</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="btn-bottom-container">
          <div className="row">
            <div className="col-12 col-md-12 col-btn">
              <Link to="/user-area">
                <button className="btn btn-primary m-3 m-md-5 area_col typography" type="button">Área do Colaborador</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// const ConsultaTarefas = () => {
//   return (
//     <Router>
//       <UserContext.Provider value={{ user: null }}>
//         <div className="container-fluid g-0">
//           <Header />
//           <Route path="/" exact component={Main} />
//           {/* Adicione rotas para tarefas específicas */}
//           <Route path="../src/Backoffice/GerirRegistos.js" render={() => <div>Tarefa: Trocar o Óleo</div>} />
//           <Route path="../src/Backoffice/GerirRegistos.js" render={() => <div>Tarefa: Limpeza da Copa</div>} />
//           <Route path="../src/Backoffice/GerirRegistos.js" render={() => <div>Tarefa: Limpeza da Cozinha</div>} />
//           <Route path="../src/Backoffice/GerirProdutos.js" render={() => <div>Página de Registo de Produto</div>} />
//           <Route path="../src/Components/LoginModal/LoginModal.js" render={() => <div>Página da Área do Utilizador</div>} />
//           <Route path="../src/Components/LoginModal/LoginModal.js" render={() => <div>Página de Mudar de Conta</div>} />
//         </div>
//       </UserContext.Provider>
//     </Router>
//   );
// };

export default ConsultaTarefas;
