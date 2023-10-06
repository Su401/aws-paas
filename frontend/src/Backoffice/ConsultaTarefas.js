import "../css/ConsultarTarefas.css"

export default function ConsultaTarefas() {
    return (
        <div className="ConsultaTarefas">
            <div className="container">
                <div className="container-title">
                    <h1>Consulta de Tarefas</h1>
                </div>
                <div className="btn-container">
                    <div className="row mt-3">
                        <div className="col-12 col-md-12 col-btn">
                            <a href="#">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Trocar o Óleo</button>
                            </a>
                        </div>
                        <div className="col-12 col-md-12 col-btn">
                            <a href="#">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Limpeza da Copa</button>
                            </a>
                        </div>
                        <div className="col-12 col-md-12 col-btn">
                            <a href="#">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Limpeza da
                                    Cozinha</button>
                            </a>
                        </div>
                        <div className="col-12 col-md-12 col-btn">
                            <a href="./registarProdutos.html">
                                <button className="btn btn-primary shadow-sm btn-lg" type="button">Registo de
                                    Produto</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="btn-bottom-container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-btn">
                            <a href="#">
                                <button className="btn btn-primary m-3 m-md-5 area_col typography" type="button">Área do
                                    Colaborador</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}