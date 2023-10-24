// Nheco Nheco Butones

//Limpezas Balcone --> redireciona RegLimpBalcao
//Limpezas Sala --> redireciona RegLimpSala
//Limpezas Copa --> redireciona RegLimpCopa
//Limpezas Cozinha --> redireciona RegLimpCozinha

import React from 'react';
import "../BtnRegistoLimpezas/BtnRegistoLimpezas.css";


// function BtnRegistoLimpezas(props) {
// 	return (
// 		<div>
// 			<h1>hello from Nheco Nheco Butones Registo Limpeza</h1>
// 		</div>
// 	);
// }



// Componente Pai: ConsultaTarefas
export default function BtnRegistoLimpezas() {
    return (
        <div className="ConsultaTarefas backgroundSec" >
            <div className="container">
                <div className="container-title">
                    <h1>Registo de Tarefas</h1>
                </div>
                <div className="btn-container">
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-btn">
                            <a href="/registo-limpeza-balcao">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Balcão</button>
                            </a>
                        </div>
                        <div className="col-12 col-md-12 col-btn">
                            <a href="/registo-limpeza-sala">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Sala</button>
                            </a>
                        </div>
                        <div className="col-12 col-md-12 col-btn">
                            <a href="registo-limpeza-copa">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Copa</button>
                            </a>
                        </div>
                        <div className="col-12 col-md-12 col-btn">
                            <a href="registo-limpeza-cozinha">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Cozinha</button>
                            </a>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>

    )
}

// adicionar roteamento para navegação entre diferentes páginas. 
// Isso permitiria que cada botão redirecionasse para uma página específica.
// Criar as páginas do utilizador
// Caso haja necessidade de compartilhar estado entre diferentes partes da aplicação, 
// podemos considerar a utilização do Context API ou de bibliotecas de gerenciamento de estado como Redux.
// Manipulação de Estado (useState):

// Se houver necessidade de gerenciar o estado dos botões 
// (por exemplo, alterar a cor do botão quando clicado), podemos usar o Hook useState para isso.



// export default BtnRegistoLimpezas;
