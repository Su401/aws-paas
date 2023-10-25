import "../RegLimpCozinha/RegLimpCozinha.css"

export default function RegLimpCozinha() {
    return (
        <div>
            <div className="row">
                <span className="headerText ms-5 mt-3">Cozinha</span>
                <hr className="custom-hr-top ms-5"></hr>
            </div>
            <div className="mt-5">

            </div>
            <form method="POST">
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-3">
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value="bancadas" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Bancadas
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox2" type="checkbox" value="Chão" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Chão
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Forno" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Forno
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Fiambreira" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Fiambreira
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Fogão" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Fogão
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Lixos" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Lixos
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Utensílios" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Utensílios
                            </label>
                        </div>
                        <div className="row mt-5">
                            <a href="/registo-limpeza-cozinha">
                                <button id="btnExcluirProdutos" className="btn btn-primary shadow-sm btn-md"
                                    type="button">Submeter</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value="Bimbi" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Bimby
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox2" type="checkbox" value="Teto" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Teto
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Descongelamento do Frio Negativo" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Descongelamento do Frio Negativo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Descongelamento do Frio Positivo" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Descongelamento do Frio Positivo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Fritadeira" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Fritadeira
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value="Portas dos Armários" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Portas dos Armários
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value="Puchadores de Portas" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Puxadores de Portas
                            </label>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}