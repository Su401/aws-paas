import "../RegLimpBalcao/RegLimpBalcao.css"

export default function RegLimpBalcao() {
    return (
        <div>
            <div className="row">
                <span className="headerText ms-5 mt-3">Balcão</span>
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
                            <input className="form-check-input" id="checkBox2" type="checkbox" value="lixos" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Lixos
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Máquina do Café" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Máquina do Café
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Portas dos Armários" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Portas dos Armários
                            </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Teto" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Teto
                            </label>
                        </div>
                        <div className="row mt-5">
                            <a href="/">
                                <button id="btnExcluirProdutos" className="btn btn-primary shadow-sm btn-md"
                                    type="button">Submeter</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox1" type="checkbox" value="Chão" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckDefault">
                                Chão
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox2" type="checkbox" value="Descongelamento do Frio Negativo" ></input>
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
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Puchadores das Portas" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Puchadores das Portas
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" id="checkBox3" type="checkbox" value="Utensílios" ></input>
                            <label className="form-check-label textEsq" htmlFor="flexCheckChecked">
                                Utensílios
                            </label>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}