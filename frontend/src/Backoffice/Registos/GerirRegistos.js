import "../../css/GerirRegistos.css"
import "../../Components/Sass/my-bootstrap.scss"
import React, { useState } from 'react';
import CriarTabela from './CriarTabela';
import logo from '../../Images/logo.png'

export default function GerirRegistos() {
    const [showRegistos, setShowRegistos] = useState([]);
    return (
        <div>
            <div className="GerirRegistos">
                <div className="container-fluid backgroundSec">
                    <div className="row">
                        <span className="headerText ms-5">Consultar Registos</span>
                        <hr className="custom-hr-top ms-5"></hr>
                    </div>
                    <Formulario showRegistos={showRegistos} setShowRegistos={setShowRegistos} />
                </div>
            </div>
        </div>
    )
}

function Formulario({ showRegistos, setShowRegistos }) {
    const [limischecked, setLimischecked] = useState(false);
    const lim = "limpeza";
    const [troischecked, setTroischecked] = useState(false);
    const tro = "troca de oleo";
    const [temischecked, setTemischecked] = useState(false);
    const tem = "temperatura de frio";
    const [datacheck, setDatacheck] = useState("")


    const handleOnChange1 = () => {
        setLimischecked(!limischecked);
    };
    const handleOnChange2 = () => {
        setTroischecked(!troischecked);
    };
    const handleOnChange3 = () => {
        setTemischecked(!temischecked);
    };
    const handleDateChange = (event) => {
        setDatacheck(event.target.value);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (!datacheck) {
            alert('Selecione uma Data');
        } else if (!limischecked && !troischecked && !temischecked) {
            alert('Selecione Pelo menos uma opção');
        } else {
            try {
                const response = await fetch(
                    'http://localhost:8080/api/gerirRegistos',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ limischecked, troischecked, temischecked, datacheck },),
                    }
                );
                if (response.ok) {
                    const dados = await response.json()
                    const result = [...new Set([...showRegistos, ...dados])];
                    setShowRegistos(result);
                } else {
                    alert('Erro ao adicionar o(s) item(ns)');
                }
            } catch (error) {
                console.error('Erro na solicitação', error);
            }
        }
    }

    const erraseRow = (id) => {
        const updatedRegistos = [...showRegistos];
        updatedRegistos.splice(id, 1);
        setShowRegistos(updatedRegistos);
    }

    function handlePrintOrSend() {
        console.log('Button clicked');

        const printContent = `
		  <!DOCTYPE html>
		  <html>
		  <head>
			<title>Print Preview</title>
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css">
			<link rel="stylesheet" type="text/css" href="../../css/ImprimirRegistos.css" media="print">
			<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
            <style>
			@page { size: A4 }
			img {
				transform: translate(80%, 0);
				margin-top: -2rem;
				width: 15rem;
			}              
              
              article {
                text-align: center;
              }
              
              hr {
                margin: auto;
                width: 17.5rem;
                text-align: center;
                border: 1px solid #000;
              }  
                .docFooter {
                  padding-top: 12rem;
                  font-weight: 500;
                }
              }
              
              .headerText {
                font-family: poppins;
                font-weight: 700;
                font-size: 200%;
              }
              
              .products-table {
                width: 100%;
                border-collapse: collapse;
              }
              
              th.header {
                font-family: Poppins;
                font-size: 30px;
                color: black;
                font-weight: 500;
                background-color: rgb(182, 182, 182);
                text-align: center;
                border: 1px solid black;
              }
              
              tr.information {
                border: 1px solid black;
              }
              tr {
                border: 1px solid black;
              }
              .information {
                text-align: center;
              }
              .table-container {
                max-height: 500px;
                overflow-y: auto;
                background-color: lightgrey;
                margin-top: 40px;
                margin-right: 10px
              }
              
            </style>
		  </head>
		  <body class="A4">
			<section class="sheet padding-25mm">
				<img src=${logo} alt='logo' />
                <article>
                    <table id="tableProducts" class="table-container products-table">
                        <thead>
                            <tr>
                                <th class="header" colSpan="6">Lista de Registos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="information">
                                <td><b>ID</b></td>
                                <td><b>Data</b></td>
                                <td><b>Espaço</b></td>
                                <td><b>Tarefa</b></td>
                                <td><b>Estado</b></td>
                            </tr>
                            ${showRegistos.map((elem, i) => `
                                <tr id=${i}>
                                <td>${i}</td>
                                <td>${elem.data}</td>
                                <td>${elem.espaço}</td>
                                <td>${elem.tarefa}</td>
                                <td>${elem.estado}</td>
                                </tr>`).join('')}
                        </tbody >
                    </table >
                </article >
                <article class='docFooter'>
                    <hr />
                    <h3>Assinatura do responsável</h3>
                </article>
            </section >
        </body >
        </html >
        `;

        // Open a new window with the HTML content
        const printWindow = window.open('', '_blank');

        // Write the HTML content to the new window
        printWindow.document.open();
        printWindow.document.write(printContent);
        printWindow.document.close();

        // Wait for the content to be fully loaded before triggering print
        printWindow.onload = () => {
            printWindow.print();

            // Clean up the print window after printing
            printWindow.onafterprint = () => {
                printWindow.close();
            };
        };
    }

    return (
        <div className="GerirRegistos">
            <div className="row">
                <div className="col-lg-5 mt-5 ps-5">
                    <form method="POST">
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value={lim} checked={limischecked} onChange={handleOnChange1}></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Limpeza
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox2" type="checkbox" value={tro} checked={troischecked} onChange={handleOnChange2}></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Troca de Óleo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value={tem} checked={temischecked} onChange={handleOnChange3}></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Temperatura de Frio
                            </label>
                        </div>
                    </form>
                    <div className="pb-5">

                    </div>
                    <div className="row mb-4">
                        <div className="editTex">
                            Data:
                        </div>
                        <div className="col-lg-6 ms-5">
                            <div className=" d-flex mt-2">
                                <label htmlFor="inicio" className="form-label me-2 personalizeTxt">Início:</label>
                                <input
                                    type="date"
                                    id="inicio"
                                    name="begin"
                                    placeholder="dd-mm-yyyy"
                                    pattern="\d{4}-\d{2}-\d{2}"
                                    min="1800-01-01"
                                    max="3000-12-31"
                                    className="form-control w-50 ms-4 text-center"
                                    maxLength="8"
                                    value={datacheck}
                                    onChange={handleDateChange}
                                ></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <a href="/">
                                <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg-custom mt-3"
                                    type="button" onClick={handleClick}>ADICIONAR</button>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="col-lg-6  editarDir">
                    <table id="tableProducts" className="table-container products-table">
                        <thead>
                            <tr>
                                <th className="header" colSpan="6">Lista de Produtos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="information">
                                <td><b>ID</b></td>
                                <td><b>Data</b></td>
                                <td><b>Espaço</b></td>
                                <td><b>Tarefa</b></td>
                                <td><b>Estado</b></td>
                                <td></td>
                            </tr>
                            <CriarTabela showRegistos={showRegistos} erraseRow={erraseRow} />
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <a href="/gerir-registos">
                            <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg-custom mt-3"
                                type="submit" onClick={handlePrintOrSend}>IMPRIMIR</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}



