import "../../css/GerirRegistos.css"
import "../../Components/Sass/my-bootstrap.scss"
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function GerirRegistos() {
    return (
        <div>
            <div className="GerirRegistos">
                <div className="container-fluid backgroundSec">
                    <div className="row">
                        <span className="headerText ms-5">Consultar Registos</span>
                        <hr className="custom-hr-top ms-5"></hr>
                    </div>
                    <Formulario />
                </div>
            </div>
        </div>
    )
}

function Formulario() {
    const [limischecked, setLimischecked] = useState(false);
    const [lim, setLim] = useState("limpeza")
    const [troischecked, setTroischecked] = useState(false);
    const [tro, setTro] = useState("troca de oleo")
    const [temischecked, setTemischecked] = useState(false);
    const [tem, setTem] = useState("temperatura de frio")
    const [datacheck, setDatacheck] = useState("")
    const [showRegistos, setShowRegistos] = useState([]);

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


    return (
        <div className="GerirRegistos">
            <div className="row">
                <div className="col-lg-5 mt-5 ps-5">
                    <Form method="POST">
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
                    </Form>
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

                            {showRegistos.map((elem, index) => (
                                <Registos data={elem.data} espaco={elem.espaço} tarefa={elem.tarefa} estado={elem.estado} id={index} erraseRow={() => { erraseRow(index) }} />
                            ))}

                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <a href="/imprimirRegistos">
                            <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg-custom mt-3"
                                type="button">IMPRIMIR</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Registos({ data, espaco, tarefa, estado, erraseRow, id }) {

    return (
        <tr id={id}>
            <td>{id}</td>
            <td>{data}</td>
            <td>{espaco}</td>
            <td>{tarefa}</td>
            <td>{estado}</td>
            <td>
                <button type="button" className="erraseButton" onClick={() => { erraseRow(id) }}>
                    ✖
                </button>
            </td>
        </tr >
    );
}
