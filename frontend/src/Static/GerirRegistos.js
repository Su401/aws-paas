import "../css/GerirRegistos.css"


export default function GerirRegistos() {
    return (
        <div className="GerirRegistos">
            <div className="container-fluid">
                <div className="row">
                    <span className="headerText">Consultar Registos</span>
                    <hr className="custom-hr-top"></hr>
                </div>
                <div className="row">
                    <div className="col-lg-5 mt-5 ps-5">
                        <div>
                            <div className="form-check">
                                <input className="form-check-input" id="checkBox1" type="checkbox" value="limpeza"></input>
                                <label className="form-check-label textEsq" for="flexCheckDefault">
                                    Limpeza
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="checkBox2" type="checkbox" value="troca de oleo"></input>
                                <label className="form-check-label textEsq" for="flexCheckChecked">
                                    Troca de Óleo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" id="checkBox3" type="checkbox" value="temperatura de frio"></input>
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
                            <div className="row ">
                                <div className="editTex">
                                    Data:
                                </div>
                                <div className="col-lg ms-5">
                                    <div className=" d-flex mt-2">
                                        <label for="inicio" className="form-label me-2 personalizeTxt">Início:</label>
                                        <input type="date" id="inicio" name="begin" placeholder="dd-mm-yyyy" value=""
                                            min="1800-01-01" max="3000-12-31" className="form-control w-50 ms-4 text-center"></input>
                                    </div>
                                </div>
                                <div className="col-lg">
                                    <a href="/">
                                        <button id="btnAdicionarProdutosData"
                                            className="btn btn-primary shadow-sm"
                                            type="button">V</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-lg-5 editarDir">
                        <table id="tableProducts" className="table-container products-table">
                            <thead>
                                <tr>
                                    <th className="header" colspan="4">Lista de Produtos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="information">
                                    <th>data</th>
                                    <th>espaço</th>
                                    <th>tarefa</th>
                                    <th>estado</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}