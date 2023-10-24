import "../css/GerirProdutos.css"
import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function GerirProdutos() {
    const [dadosTabela, setDadosTabela] = useState([]); // Variável de estado para os dados da tabela
    const [nomeProdutoInput, setNomeProdutoInput] = useState(''); // Variável de estado para a caixa de input nome do Produto
    const [idInput, setIdInput] = useState(''); // Variável de estado para a caixa de input Selecao
    const [validadeInput, setValidadeInput] = useState(''); // Variável de estado para a caixa de input Validade do Produto
    const [tipoProdutoInput, setTipoProdutoInput] = useState(''); // Variável de estado para a caixa de input Tipo de Produto
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroTipo, setFiltroTipo] = useState('');


    // Para buscar os dados que irão renderizar na tabela
    const fetchDados = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/criarTabela',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type':
                            'application/json',
                    }
                })
            if (!response.ok) {
                throw new Error('Failed to fetch table data');
            }
            const tableData = await response.json();
            setDadosTabela(tableData.allProducts);
            console.log(tableData);
        } catch (error) {
            console.error('An error ocurred while fetching table data', error)
        }
    }

    useEffect(() => {

        fetchDados();

    }, [])

    // Para preencher os campos de input quando clico em uma linha da tabela
    const handleRowClick = (produto) => {
        setIdInput(produto._id);
        setNomeProdutoInput(produto.nome_produto);
        setTipoProdutoInput(produto.tipo_produto);
        setValidadeInput(produto.dias_prazo);
    }

    // Para fazer a busca do produto pelo id e posteriormente atualizá-lo
    const updateProduct = async () => {
        try {
            const productData = {
                id: idInput,
                nomeProduto: nomeProdutoInput,
                validadeProduto: validadeInput,
                tipoProduto: tipoProdutoInput,
            };
            console.log(productData)
            const response = await fetch(`http://localhost:8080/api/editarProduto/${productData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });
            if (!response.ok) {
                throw new Error("An error ocurred while fetching update data");
            }
            console.log("Product updated!");
        } catch (error) {
            console.error("Error in updating", error)
        }

        // Para apagar o conteúdo das caixas após a atualização
        setValidadeInput('');
        setIdInput('');
        setNomeProdutoInput('');
        setTipoProdutoInput('');
        fetchDados()
    }

    // Para deletar o produto com base no seu id
    const deleteProduct = async () => {
        try {
            const id = idInput;
            const response = await fetch(`http://localhost:8080/api/excluirProduto/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (!response.ok) {
                throw new Error("An error ocurred while fetching delete data");
            }
            console.log("Deleted data!")
        } catch (error) {
            console.error("Error in deleting", error)
        }

        // Para apagar o conteúdo das caixas após a exclusão do produto
        setValidadeInput('');
        setIdInput('');
        setNomeProdutoInput('');
        setTipoProdutoInput('');
        fetchDados()
    }

    // Para adicionar um produto com base em todas as caixas, menos id
    const addProduct = async () => {
        try {
            const product = {
                validade: validadeInput,
                tipo: tipoProdutoInput,
                nome: nomeProdutoInput,
            };
            const response = await fetch(`http://localhost:8080/api/adicionarProdutos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            })
            if (!response.ok) {
                throw new Error("An error ocurred while fetching add data");
            }
            console.log("Added data!")
        } catch (error) {
            console.error("Error in adding", error)
        }

        // Para apagar o conteúdo das caixas após a adição
        setValidadeInput('');
        setIdInput('');
        setNomeProdutoInput('');
        setTipoProdutoInput('');
        fetchDados()
    }

    // Para filtrar os dados da tabela por nome do produto    
    const dadosTabelaFiltrados = dadosTabela.filter((produto) => {
        return (produto.nome_produto.toLowerCase().includes(filtroNome.toLowerCase()) && produto.tipo_produto.toLowerCase().includes(filtroTipo.toLowerCase()))
    })

    return (
        <Container className="GerirProdutos backgroundSec">
            <div className="titulo">
                <h1>Gestão de produtos</h1>
            </div>
            <Container>
                <Row>
                    <Col lg={6} xs={12}>
                        <input type="text" placeholder="Filtra por nome" value={filtroNome} onChange={(e) => setFiltroNome(e.target.value)}></input>
                        <input type="text" placeholder="Filtra por tipo" value={filtroTipo} onChange={(e) => setFiltroTipo(e.target.value)}></input>
                        <Table responsive id="tableProducts" className="table-container products-table table table-hover table-light table-sm align-middle">
                            <thead>
                                <tr>
                                    <th className="header" colSpan="4">Lista de Produtos</th>
                                </tr>
                                <tr>
                                    <th scope="col">Nome do Produto</th>
                                    <th scope="col">Tipo de produto</th>
                                    <th scope="col">Validade (dias)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    /* Para iterar nos dados recebidos do banco de dados para o preenchimento da tabela 
                                    A funcao handleRowClick atua no preenchimento das caixas ao clicarmos na tabela*/
                                }
                                {dadosTabelaFiltrados.map((produto => (
                                    <tr key={produto._id} className="information" onClick={() => handleRowClick(produto)}>
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
                                    <input className="product filled" type="text" id="product-type" value={tipoProdutoInput} onChange={(e) => setTipoProdutoInput(e.target.value)} >
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
                                    <label className="label-product" htmlFor="product-validity">Validade (aberto):</label>
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