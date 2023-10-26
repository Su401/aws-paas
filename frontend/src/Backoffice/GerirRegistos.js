import "../css/GerirRegistos.css"
import React, { useState } from 'react';
import SecondaryNav from "../Components/SecondaryNav/SecondaryNav";


const registos = [
    {
        "_id": 1,
        "data": "2001-03-04",
        "espaço": "sala",
        "tarefa": "troca de oleo",
        "estado": "completo"
    },
    {
        "_id": 2,
        "data": "2067-03-04",
        "espaço": "cozinha",
        "tarefa": "temperatura de frio",
        "estado": "incompleto"
    },
    {
        "_id": 3,
        "data": "1881-03-09",
        "espaço": "copa",
        "tarefa": "limpeza",
        "estado": "completo"
    },
    {
        "_id": 4,
        "data": "2016-03-15",
        "espaço": "balcão",
        "tarefa": "limpeza",
        "estado": "completo"
    },
    {
        "_id": 5,
        "data": "2067-03-04",
        "espaço": "cozinha",
        "tarefa": "troca de oleo",
        "estado": "completo"
    },
    {
        "_id": 6,
        "data": "2067-03-04",
        "espaço": "cozinha",
        "tarefa": "limpeza",
        "estado": "completo"
    }
]

export default function GerirRegistos() {
    return (
        <div>
            <SecondaryNav />
            <div className="GerirRegistos">
                <div className="container-fluid backgroundSec">
                    <div className="row">
                        <span className="headerText">Consultar Registos</span>
                        <hr className="custom-hr-top"></hr>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mt-5 ps-5">
                            <Form />
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-lg-5 editarDir">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function Form() {
    const [limischecked, setLimischecked] = useState(false);
    const [troischecked, setTroischecked] = useState(false);
    const [temischecked, setTemischecked] = useState(false);
    const [datacheck, setDatacheck] = useState("")

    const limp = "limpeza"
    const tro = "troca de oleo"
    const tem = "temperatura de frio"

    const handleOnChange1 = () => {
        setLimischecked(!limischecked)
    };
    const handleOnChange2 = () => {
        setTroischecked(!troischecked)
    };
    const handleOnChange3 = () => {
        setTemischecked(!temischecked)
    };


    return (
        <div>
            <form>
                <div className="form-check">
                    <input className="form-check-input" id="checkBox1" type="checkbox" value={limp} checked={limischecked} onChange={handleOnChange1}></input>
                    <label className="form-check-label textEsq" for="flexCheckDefault">
                        Limpeza
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" id="checkBox2" type="checkbox" value={tro} checked={troischecked} onChange={handleOnChange2}></input>
                    <label className="form-check-label textEsq" for="flexCheckChecked">
                        Troca de Óleo
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" id="checkBox3" type="checkbox" value={tem} checked={temischecked} onChange={handleOnChange3}></input>
                    <label className="form-check-label textEsq" for="flexCheckChecked">
                        Temperatura de Frio
                    </label>
                </div>
                <a href="/">
                    <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg-custom mt-3"
                        type="button">CONSULTAR</button>
                </a>
                <div className="pb-5">

                </div>
                <div className="row mb-5">
                    <div className="editTex">
                        Data:
                    </div>
                    <div className="col-lg-6 ms-5">
                        <div className=" d-flex mt-2">
                            <label for="inicio" className="form-label me-2 personalizeTxt">Início:</label>
                            <input
                                type="date"
                                id="inicio"
                                name="begin"
                                placeholder="dd-mm-yyyy"
                                pattern="\d{4}-\d{2}-\d{2}"
                                min="1800-01-01"
                                max="3000-12-31"
                                className="form-control w-50 ms-4 text-center"
                            ></input>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <a href="/">
                            <button id="btnAdicionarProdutosData"
                                className="btn btn-primary shadow-sm"
                                type="button">VALIDAR DATA</button>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
}


function Table() {
    return (
        <div>
            <table id="tableProducts" className="table-container products-table">
                <thead>
                    <tr>
                        <th className="header" colspan="4">Lista de Produtos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="information">
                        <td><b>Data</b></td>
                        <td><b>Espaço</b></td>
                        <td><b>Tarefa</b></td>
                        <td><b>Estado</b></td>
                    </tr>

                    {registos.map((elem) => (
                        <Registos data={elem.data} espaco={elem.espaço} tarefa={elem.tarefa} estado={elem.estado} />
                    ))}

                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <a href="/">
                    <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg-custom mt-3"
                        type="button">REMOVER</button>
                </a>
                <a href="/">
                    <button id="btnAdicionarProdutos" className="btn btn-primary shadow-sm btn-lg-custom mt-3"
                        type="button">IMPRIMIR</button>
                </a>
            </div>
        </div>
    )
}


function Registos({ data, espaco, tarefa, estado }) {
    return (
        <>
            <tr className="information">
                <td>
                    {data}
                </td>
                <td>
                    {espaco}
                </td>
                <td>
                    {tarefa}
                </td>
                <td>
                    {estado}
                </td>
            </tr>
        </>
    )

}