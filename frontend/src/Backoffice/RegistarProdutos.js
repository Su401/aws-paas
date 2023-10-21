// import '../css/RegistarProdutos.css';
import React, { useEffect, useState } from 'react';
import '../Components/Sass/my-bootstrap.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

export default function RegistarProdutos() {
    const [dadosTiposProduto, setDadosTipoProduto] = useState([]);
    const [caixaSelectValor, setCaixaSelectValor] = useState('');
    const [caixaSelectNome, setCaixaSelectNome] = useState([]);
    const [valorCaixaSelectNome, setValorCaixaSelectNome] = useState('');
    const [caixaInputValidadeAberto, setCaixaInputValidadeAberto] = useState('');
    const [caixaInputLote, setCaixaInputLote] = useState('')
    const [caixaInputValidade, setCaixaValidade] = useState('')
    let dataAtual = new Date();
    //const dataFormatadaPadrao = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`;
    let dataFormatadaPadrao = `${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}-${dataAtual.getDate()}`
    const [caixaDataAbertura, setCaixaDataAbertura] = useState(dataFormatadaPadrao);

    // Para buscar os dados no banco de dados 
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

            // Para alterar a variavel de estado para todos os produtos buscados
            setDadosTipoProduto(selectTypeData.allProducts);
            // Para preencher as caixas na renderização com o primeiro valor do array
            setCaixaSelectValor(selectTypeData.allProducts[0].tipo_produto);
            setCaixaSelectNome(selectTypeData.allProducts[0].produtosArray);
            setCaixaInputValidadeAberto(selectTypeData.allProducts[0].produtosArray[0].validade);
            setValorCaixaSelectNome(selectTypeData.allProducts[0].produtosArray[0].nomeProduto);

        } catch (error) {
            console.error('An error ocurred', error)
        }
    }

    // Para chamar a funcao que vai buscar os dados
    useEffect(() => {
        if (caixaSelectValor === '') {
            fetchDadosTiposProduto();
        }
    }, [caixaSelectValor])

    // Para mudar a caixa select e sua influencia em outras caixas
    const handleSelectTypeChange = (e) => {
        const novoValor = e.target.value;
        setCaixaSelectValor(novoValor);
        const tipoProduto = dadosTiposProduto.filter(Tipo => Tipo.tipo_produto === novoValor);
        const validade = tipoProduto[0].produtosArray[0].validade;
        setCaixaInputValidadeAberto(validade);
        setCaixaInputLote('');
        setCaixaValidade('');
    }

    // Para alterar a caixa select de acordo com a mudanca da caixa tipo
    const handleSelectNameChangeThroughTypeChange = (e) => {
        const atualTipo = e.target.value;
        const novoArray = dadosTiposProduto.find(dados => dados.tipo_produto === atualTipo)
        setCaixaSelectNome(novoArray.produtosArray);
        setValorCaixaSelectNome(novoArray.produtosArray[0].nomeProduto);
        setCaixaInputLote('');
        setCaixaValidade('');
    }

    // Para realizar a influencia da mudanca na caixa select nome
    const handleSelectNameChange = (e) => {
        const filtrarPorCaixaTipo = dadosTiposProduto.filter(Tipo => Tipo.tipo_produto === caixaSelectValor);
        const atualProduto = filtrarPorCaixaTipo[0].produtosArray.find(produto => produto.nomeProduto === e.target.value);
        setCaixaInputValidadeAberto(atualProduto.validade);
        setValorCaixaSelectNome(atualProduto.nomeProduto);
        setCaixaInputLote('');
        setCaixaValidade('');
    }

    // Para imprimir os valores
    const handleBtnClick = () => {
        const novaData = new Date(dataAtual);
        novaData.setDate(dataAtual.getDate() + Number(caixaInputValidadeAberto));
        dataFormatadaPadrao = `${novaData.getFullYear()}-${novaData.getMonth() + 1}-${novaData.getDate()}`

        if ((caixaSelectValor !== '' && valorCaixaSelectNome !== '' && caixaInputLote !== '' && caixaInputValidadeAberto !== '' && caixaInputValidade !== '')) {
            const impressao = {
                tipo_produto: caixaSelectValor,
                nome_produto: valorCaixaSelectNome,
                lote: caixaInputLote,
                data_abertura: caixaDataAbertura,
                validade: caixaInputValidade,
                validade_atual: dataFormatadaPadrao,
            }
            setCaixaInputLote('');
            setCaixaValidade('');
            console.log(impressao)
        } else {
            console.log("Preencha todas as caixas.")
        }
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
                                    <select name="select-box" id="select-boxType" className="w-100 form-select mt-1" value={caixaSelectValor} onChange={(e) => { handleSelectTypeChange(e); handleSelectNameChangeThroughTypeChange(e) }}>
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
                                    <select name="select-boxName" id="select-boxName" className="w-100 form-select mt-1" onChange={(e) => handleSelectNameChange(e)}>
                                        {caixaSelectNome.map(nomeProduto => (<option value={nomeProduto.nomeProduto} >{nomeProduto.nomeProduto}</option>
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
                                        className="form-input-group w-100 mt-1 text-center" min="0" value={caixaInputLote} onChange={(e) => setCaixaInputLote(e.target.value)}>
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
                                    <input type="date" name="productDate" id="productDate"
                                        className="form-input-group w-100 mt-1 text-center" value={caixaDataAbertura}>
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
                                        id="productValidityAfterOpenned" className="form-input-group w-100 mt-1 text-center" value={Number(caixaInputValidadeAberto)}>
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
                                        className="form-input-group w-100 mt-1 text-center" value={caixaInputValidade} onChange={(e) => setCaixaValidade(e.target.value)}>
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
                                <button id="printBtn" className="btn btn-primary btn-imprimir mt-5" onClick={handleBtnClick}>Impressão
                                </button>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </Container>
    )
}