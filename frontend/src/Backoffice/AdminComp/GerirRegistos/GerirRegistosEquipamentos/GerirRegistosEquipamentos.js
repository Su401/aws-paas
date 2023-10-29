import CaixaSelecao from "../Componentes/CaixaSelecao/CaixaSelecao";
import CheckBox from "../Componentes/CheckBox/CheckBox";
import './GerirRegistosEquipamentos.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Botao from "../Componentes/Botoes/Botao";
import { useState } from "react";
import Table from 'react-bootstrap/Table'


export default function GerirRegistosEquipamentos () {
    const equipamentos = ["Equipamentos de frio", "Equipamentos de óleo"] 
    const [equipamentoSelecionado, setEquipamentoSelecionado] = useState('');
    const [locais, setLocais] = useState(["Copa", "Sala", "Balcão", "Cozinha"])
    const todosEquipamentos = [{tipo: "Equipamento de frio", numero: 1, local: "Copa"},{tipo: "Equipamento de óleo", numero: 1, local: "Cozinha"},
    {tipo: "Equipamento de óleo", numero: 2, local: "Cozinha"}]

    const handleEquipamentoChange = (evento) => {
        const valorAtual = evento.target.value;
        setEquipamentoSelecionado(valorAtual);
        if(valorAtual === "Equipamentos de óleo"){
            setLocais(["Copa", "Cozinha"])
        } else {
            setLocais(["Copa", "Sala", "Balcão", "Cozinha"]);
        }
    }

    return (
        <Container className="backgroundSec">
            <h1>Gestão dos registos de equipamentos</h1>
            <Row style={{marginTop:"60px"}}>
                <Col>
                    <div>
                        <h2>Adição de equipamentos</h2>
                        <br></br>
                        <div>
                            Tipo de equipamento
                            <CaixaSelecao onChange={(evento)=> handleEquipamentoChange(evento)} value={equipamentoSelecionado}>
                                {equipamentos.map((equipamento,index) => (
                                    <option key={index} value={equipamento}>{equipamento}</option>
                                ))}
                            </CaixaSelecao>
                            <br></br>
                            Local do equipamento
                            <CaixaSelecao>
                                {locais.map((local,index) => (
                                    <option key={index} value={local}>{local}</option>
                                ))}
                            </CaixaSelecao>
                            <Botao name={"Adicionar"} >Adicionar</Botao>
                        </div>
                    </div>
                </Col>
                <Col>
                <div>
                    <h2>Exclusão de equipamentos</h2>
                    <br></br>
                    <div>
                        <Table style={{textAlign:'center'}}>
                            <thead>
                                <tr>
                                    <th className="header" colSpan="4">Lista de equipamentos</th>
                                </tr>
                                <tr>
                                    <th scope="col">Tipo de Equipamento</th>
                                    <th scope="col">Número</th>
                                    <th scope="col">Local</th>
                                    <th scope="col">Excluir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todosEquipamentos.map(((equipaments, index) => (
                                <tr key={equipaments.tipo}>
                                    <td>{equipaments.tipo}</td>
                                    <td>{equipaments.numero}</td>
                                    <td>{equipaments.local}</td>
                                    <td>
                                        <button style={{borderStyle:'none', borderRadius:'3px', padding:'0.1em 0.4em 0.1em 0.4em', backgroundColor:'rgb(218, 92, 92)', color:'white'}}>X</button>
                                    </td>
                                </tr>
                                )))}
                            </tbody>
                        </Table>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}