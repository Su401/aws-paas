import "../css/GerirProdutos.css"
import React, { useEffect, useState } from 'react';
import '../Components/Sass/my-bootstrap.scss'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function GerirProdutos() {
    const [dadosTabela, setDadosTabela] = useState([]);
    const [nomeProdutoInput, setNomeProdutoInput] = useState('');
    const [idInput, setIdInput] = useState('');
    const [validadeInput, setValidadeInput] = useState('');
    const [tipoPodutoInput, setTipoProdutoInput] = useState('');
    

    const fetchDados = async () => {
        try{ 
            const response = await fetch('http://localhost:8080/api/criarTabela', 
            {
                method: 'GET',
                headers: {
                    'Content-Type':
                    'application/json',
                }
            })
            if (!response.ok){
                throw new Error('Failed to fetch table data');
            }
            const tableData = await response.json();
            setDadosTabela(tableData.allProducts);
            console.log(tableData);
        } catch (error){
            console.error('An error ocurred while fetching table data', error)
        }
    }

    useEffect(()=> {
        
        fetchDados();

    }, [])

    const handleRowClick = (produto) => {
        setIdInput(produto._id);
        setNomeProdutoInput(produto.nome_produto);
        setTipoProdutoInput(produto.tipo_produto);
        setValidadeInput(produto.dias_prazo);
    }

    const updateProduct = async () => {
        try{
            const productData = {
                id: idInput,
                nomeProduto: nomeProdutoInput,
                validadeProduto: validadeInput,
                tipoProduto: tipoPodutoInput,
            };
            console.log(productData)
            const response = await fetch(`http://localhost:8080/api/editarProduto/${productData.id}`, {
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(productData)
            });
            if(!response.ok){
                throw new Error("An error ocurred while fetching update data");
            }
            console.log("Product updated!");
        } catch (error){
            console.error("Error in updating", error)
        }
        setValidadeInput('');
        setIdInput('');
        setNomeProdutoInput('');
        setTipoProdutoInput('');
        fetchDados()
    }

    const deleteProduct = async () => {
        try {
            const id = idInput;
            const response = await fetch(`http://localhost:8080/api/excluirProduto/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            if(!response.ok){
                throw new Error("An error ocurred while fetching delete data");
            }
            console.log("Deleted data!")
        } catch (error){
            console.error("Error in deleting", error)
        }
        setValidadeInput('');
        setIdInput('');
        setNomeProdutoInput('');
        setTipoProdutoInput('');
        fetchDados()
    }

    const addProduct = async () => {
        try {
            const product = {
                id: idInput,
                validade: validadeInput,
                tipo: tipoPodutoInput,
                nome: nomeProdutoInput,
            };
            const response = await fetch(`http://localhost:8080/api/adicionarProdutos`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(product),
            })
            if(!response.ok){
                throw new Error("An error ocurred while fetching add data");
            }
            console.log("Added data!")
        } catch (error){
            console.error("Error in adding", error)
        }
        setValidadeInput('');
        setIdInput('');
        setNomeProdutoInput('');
        setTipoProdutoInput('');
        fetchDados()
    }


    return (
        <Container className="GerirProdutos backgroundSec">
            <div className="titulo">
                <h1>Gestão de produtos</h1>
            </div>
            <Container>
                <Row>
                    <Col lg={6} xs={12}>
                        <Table responsive id="tableProducts" className="table-container products-table table table-hover table-light table-sm align-middle">
                            <thead>
                                <tr>
                                    <th className="header" colSpan="4">Lista de Produtos</th>
                                </tr>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Nome do Produto</th>
                                    <th scope="col">Tipo de produto</th>
                                    <th scope="col">Validade (dias)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dadosTabela.map((produto => (
                                    <tr key={produto._id} className="information" onClick={() => handleRowClick(produto)}>
                                        <td>{produto._id}</td>
                                        <td>{produto.nome_produto}</td>
                                        <td>{produto.tipo_produto}</td>
                                        <td>{produto.dias_prazo}</td>
                                    </tr>
                                )))}
                                    
                                
                            </tbody>
                        </Table>
                    </Col>
                    <Container className="col-lg-6 col-rgt">
                        <form className="products-form" action="/api/adicionarProdutos" method="post">
                            <Row className="row div-product">
                                <Col className="col-md-6 col-12">
                                    <label className="label-product" htmlFor="product-type">Tipo de produto:</label>
                                </Col>
                                <Col className="col-md-6 col-12">
                                    <input className="product filled" type="text" id="product-type" value={tipoPodutoInput} onChange={(e) => setTipoProdutoInput(e.target.value)} >
                                    </input>
                                </Col>
                            </Row>
                            <Row className="row div-product">
                                <Col className="col-md-6 col-12">
                                    <label className="label-product" htmlFor="product-name">Nome do produto:</label>
                                </Col>
                                <Col className="col-md-6 col-12">
                                    <input className="product filled" type="text" id="product-name" value={nomeProdutoInput} onChange={(e) => setNomeProdutoInput(e.target.value)}></input>
                                </Col>
                            </Row>
                            <Row className="row div-product">
                                <Col className="col-md-6 col-12">
                                    <label className="label-product" htmlFor="product-validity">Validade dias (aberto):</label>
                                </Col>
                                <Col className="col-md-6 col-12">
                                    <input type="number" min="0" className="product filled"
                                        id="product-validity" value={validadeInput} onChange={(e) => setValidadeInput(e.target.value)}></input>
                                </Col>
                            </Row>
                            <Row className="row div-product">
                                <Col className="col-md-6 col-12 col-12">
                                    <label className="label-product" htmlFor="product-selection">Seleção:</label>
                                </Col>
                                <Col className="col-md-6 col-12 col-12">
                                    <input className="product selection" type="text" id="product-selection" disabled value={idInput}></input>
                                </Col>
                            </Row>
                        </form>
                        <Row className="row mt-3">
                            <Col className="col-md-6 col-12 col-btn">
                                <a href="#">
                                    <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg"
                                        type="button" onClick={addProduct}>Adicionar
                                        produtos</button>
                                </a>
                            </Col>
                            <Col className="col-md-6 col-12 col-btn">
                                <a href="#">
                                    <button id="btnExcluirProdutos" className="btn btn-danger shadow-sm btn-lg"
                                        type="button" onClick={deleteProduct}>Excluir
                                        produtos</button>
                                </a>
                            </Col>
                        </Row>
                        <Row className="row">
                            <Col className="col-12 col-btn">
                                <a href="#">
                                    <button id="btnEditarProdutos" className="btn btn-primary shadow-sm btn-lg"
                                        type="button" onClick={updateProduct}>Editar
                                        produtos</button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Container>
    )
}