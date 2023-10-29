import CaixaSelecao from "../Componentes/CaixaSelecao/CaixaSelecao";
import '../GerirRegistosEquipamentos/GerirRegistosEquipamentos.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Botao from "../Componentes/Botoes/Botao";
import { useState } from "react";
import Table from 'react-bootstrap/Table'

export default function GerirLimpeza() {
    return(
        <Container className="backgroundSec">
            <h1>Gestão dos registos de limpeza</h1>
            <Row style={{marginTop:"60px"}}>
                <Col>
                    <div>
                        <h2>Adição tarefas por ambiente</h2>
                        <br></br>
                        <div>
                            Ambiente
                            <CaixaSelecao>
                                
                            </CaixaSelecao>
                            <br></br>
                            Tarefas
                            <CaixaSelecao>
                                
                            </CaixaSelecao>
                            <Botao name={"Adicionar"} >Adicionar</Botao>
                        </div>
                    </div>
                </Col>
                <Col>
                <div>
                    <h2>Exclusão de tarefas por ambiente</h2>
                    <br></br>
                    <div>
                        <Table style={{textAlign:'center'}}>
                            <thead>
                                <tr>
                                    <th className="header" colSpan="3">Lista de tarefas</th>
                                </tr>
                                <tr>
                                    <th scope="col">Tarefa</th>
                                    <th scope="col">Ambiente</th>
                                    <th scope="col">Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>Limpar Chão</td>
                                    <td>Copa</td>   
                                    <td>
                                        <button style={{borderStyle:'none', borderRadius:'3px', padding:'0.1em 0.4em 0.1em 0.4em', backgroundColor:'rgb(218, 92, 92)', color:'white'}}>X</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}