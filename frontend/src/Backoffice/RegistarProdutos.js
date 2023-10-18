import '../css/RegistarProdutos.css';
import React, { useEffect, useState } from 'react';
import '../Components/Sass/my-bootstrap.scss';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

export default function RegistarProdutos() {
    const [dadosTiposProduto, setDadosTipoProduto] = useState([]);
    const [caixaSelectValor, setCaixaSelectValor] = useState('');
    const [caixaSelectNome, setCaixaSelectNome] = useState([]);

    const fetchDadosTiposProduto = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/registoDeProdutos/preencheProdutos',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            if (!response.ok) {
                throw new Error('Failed to fetch product type')
            }
            const selectTypeData = await response.json();
            console.log(selectTypeData)

            setDadosTipoProduto(selectTypeData.allProducts);
            setCaixaSelectValor(selectTypeData.allProducts[0].tipo_produto);
            setCaixaSelectNome(selectTypeData.allProducts[0].produtosArray);

        } catch (error) {
            console.error('An error ocurred', error)
        }
    }

    useEffect(() => {
        if (caixaSelectValor === '') {
            fetchDadosTiposProduto();
        }
    }, [caixaSelectValor])

    const handleSelectTypeChange = (e) => {
        const novoValor = e.target.value;
        setCaixaSelectValor(novoValor);
    }

    const handleSelectNameChange = (e) => {
        console.log(dadosTiposProduto)
        const novoArray = dadosTiposProduto.find(dados => dados.tipo_produto === caixaSelectValor)
        console.log(novoArray)
    }

    return (
        <Container className='RegistarProdutos backgroundSec'>
            <div className="titulo">
                <h1 className="d-none d-md-block">Registo de produtos</h1>
            </div>
            <Container className="container mt-5">
                <Row className="row">
                    <Col className="col-12 col-lg-8 p-0 m-0">
                        <Row className="row">
                            <Col className="col-md-4 col-12">
                                <div className="text-box text-center">
                                    Tipo de produto
                                </div>
                            </Col>
                            <Col className="col-md-4 col-12">
                                <div className="selection-box">
                                    <select name="select-box" id="select-boxType" className="w-100 form-select mt-1" value={caixaSelectValor} /* onChange={(e) => {handleSelectTypeChange(e), handleSelectNameChange(e)}} */>
                                        {dadosTiposProduto.map(tipoProduto => (
                                            <option value={tipoProduto.tipo_produto}>{tipoProduto.tipo_produto}</option>
                                        ))}
                                    </select>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-md-4 col-12">
                                <div className="text-box text-center">
                                    Nome do produto
                                </div>
                            </Col>
                            <Col className="col-md-4 col-12">
                                <div className="selection-box">
                                    <select name="select-boxName" id="select-boxName" className="w-100 form-select mt-1">
                                        {caixaSelectNome.map(nomeProduto => (
                                            <option value={nomeProduto.nomeProduto} onChange={handleSelectNameChange}>{nomeProduto.nomeProduto}</option>
                                        ))}
                                    </select>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-md-4 col-12">
                                <div className="text-box text-center">
                                    Lote
                                </div>
                            </Col>
                            <Col className="col-md-4 col-12">
                                <div className="form-group text-center">
                                    <input type="number" name="productBatch" id="productBatch"
                                        className="form-input-group w-100 mt-1 text-center" min="0">
                                    </input>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-md-4 col-12">
                                <div className="text-box text-center">
                                    Data de abertura
                                </div>
                            </Col>
                            <Col className="col-md-4 col-12">
                                <div className="form-group text-center">
                                    <input type="text" name="productDate" id="productDate"
                                        className="form-input-group w-100 mt-1 text-center" readonly>
                                    </input>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-md-4 col-12">
                                <div className="text-box text-center">
                                    Validade (aberto)
                                </div>
                            </Col>
                            <Col className="col-md-4 col-12">
                                <div className="form-group text-center">
                                    <input type="text" name="productValidityAfterOpenned"
                                        id="productValidityAfterOpenned" className="form-input-group w-100 mt-1 text-center" readonly>
                                    </input>
                                </div>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-md-4 col-12">
                                <div className="text-box text-center">
                                    Data de validade
                                </div>
                            </Col>
                            <Col className="col-md-4 col-12">
                                <div className="form-group text-center">
                                    <input type="date" name="productValidity" id="productValidity"
                                        className="form-input-group w-100 mt-1 text-center">
                                    </input>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="col-md-4">
                    </Col>
                    <div>
                        <Row className="row">
                            <div className="btn-submit">
                                <button id="printBtn" className="btn btn-primary btn-imprimir mt-5">Imprimir</button>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}