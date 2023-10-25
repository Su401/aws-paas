import "../RegLimpCopa/RegLimpCopa.css"

export default function RegLimpCopa() {
    return (
        <div>
            <div className="row">
                <span className="headerText ms-5 mt-3">Copa</span>
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
                            <input className="form-check-input" id="checkBox2" type="checkbox" value="teto" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Teto
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Máquina um" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Máquina Nº 1
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="utensilios" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Utensílios
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Chao" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Chão
                            </label>
                        </div>
                        <div className="row mt-5">
                            <a href="/registo-limpeza-balcao">
                                <button id="btnExcluirProdutos" className="btn btn-primary shadow-sm btn-md"
                                    type="button">Submeter</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value="puxadores portas" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Puxadores das Portas
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox2" type="checkbox" value="lixos" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Lixos
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="maquina dois" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Máquina Nº 2
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="portas armários" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Portas dos Armários
                            </label>
                        </div>

                    </div>
                </div>
            </form >
        </div >
    )
}