import "../css/TemplatePrimario.css"

export default function BotoesRedirecionais() {
    return (
        <div className="BotoesRedirecionais">
            <div class="row">
                <div class="col greetings">
                    <span class="hello">Olá </span><span class="user">Susana !</span>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="mb-lg-5 mb-md-5 mb-sm-5">
                    </div>
                </div>
                <div class="d-flex justify-content-evenly">
                    <div class="row mt-lg-5 mt-md-5">
                        <div class="col-lg-4">
                            <div class="card pb-lg-5" style="width: 18rem;">
                                <div class="card-body">
                                    <a href="./gerirProdutos.html" class="stretched-link btnedit"><span
                                        class="letterEdit">GERIR</span>
                                        <br /><span class="letter2Edit"> PRODUTOS</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card pb-lg-5" style="width: 18rem;">
                                <div class="card-body">
                                    <a href="./gerirPerfis.html" class="stretched-link btnedit"><span
                                        class="letterEdit">GERIR</span>
                                        <br /> <span class="letter2Edit"> PERFIS</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card pb-lg-5" style="width: 18rem;">
                                <div class="card-body">
                                    <a href="./gerirRegistos.html" class="stretched-link btnedit"><span
                                        class="letterEdit">GERIR</span>
                                        <br /> <span class="letter2Edit"> REGISTOS</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="mt-lg-5">

                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-evenly">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card pb-lg-5" style="width: 18rem;">
                                <div class="card-body">
                                    <a href="#" class="stretched-link btnedit"><span class="letterEdit">REGISTAR</span>
                                        <br /><span class="letter2Edit">TAREFAS</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card pb-lg-0" style="width: 18rem;">
                                <div class="card-body">
                                    <a href="#" class="stretched-link btnedit"><span class="letterEdit">REGISTAR</span>
                                        <br /><span class="letter2Edit">ABERTURA DE PRODUTOS</span></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card pb-lg-5" style="width: 18rem;">
                                <div class="card-body">
                                    <a href="#" class="stretched-link btnedit"><span class="letterEdit">CONSULTAR</span>
                                        <br /><span class="letter2Edit"> DADOS</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


