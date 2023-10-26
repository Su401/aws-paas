import "./GerirRegistosUtilizador.css"
import "../../../../Components/Sass/my-bootstrap.scss"
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

export default function ConsultarRegistos() {

    return (
        <div>
            <Container className='RegistarProdutos backgroundSec'>
                <h1 className='d-none d-md-block '>Gestão de registos do utilizador</h1>
                <Container className='container mt-5'>
                    <Row className='row'>
                        <Col className='col-12 col-lg-8 p-0 m-0'>
                            <Row className='row'>
                                <Col className='col-md-6 mt-6 col-12'>
                                    <Row className="row">
                                        <div className="col-md-6 col-6">
                                            <span>Ambientes</span>
                                            <div className='selection-box'>
                                                <select
                                                    name='select-box'
                                                    id='select-boxType'
                                                    className='w-100 form-select rounded mt-1'
                                                    value=''
                                                >
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <span>Tarefas</span>
                                            <div className='selection-box'>
                                                <select
                                                    name='select-box'
                                                    id='select-boxType'
                                                    className='w-100 form-select rounded mt-1'
                                                    value=''
                                                >
                                                </select>
                                            </div>
                                        </div>
                                    </Row>
                                    <span>Leitura de Temperatura</span>
                                    <div className='selection-box'>
                                        <select
                                            name='select-box'
                                            id='select-boxType'
                                            className='w-100 form-select rounded mt-1'
                                            value=''
                                        >
                                        </select>
                                    </div>
                                    <span>Troca de Óleo</span>
                                    <div className='selection-box'>
                                        <select
                                            name='select-box'
                                            id='select-boxType'
                                            className='w-100 form-select rounded mt-1'
                                            value=''
                                        >
                                        </select>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='col-md-4'></Col>
                        <div>
                            <Row className='row'>
                                <div className='btn-submit'>
                                    <button
                                        id='printBtn'
                                        className='btn btn-primary btn-imprimir mt-5'
                                    >
                                        Impressão
                                    </button>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

