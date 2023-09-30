import "../css/GerirProdutos.css"


export default function GerirProdutos() {
    return (
        <div className="GerirProdutos backgroundSec">
            <div class="titulo">
                <h1>Gestão de produtos</h1>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <table id="tableProducts" class="table-container products-table">
                            <thead>
                                <tr>
                                    <th class="header" colspan="4">Lista de Produtos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="information">
                                    <th>id</th>
                                    <th>Nome do Produto</th>
                                    <th>Tipo de produto</th>
                                    <th>Validade (dias)</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-6 col-rgt">
                        <form class="products-form" action="/api/adicionarProdutos" method="post">
                            <div class="row div-product">
                                <div class="col-md-6 col-12">
                                    <label class="label-product" for="product-type">Tipo de produto:</label>
                                </div>
                                <div class="col-md-6 col-12">
                                    <input class="product filled" type="text" id="product-type"></input>
                                </div>
                            </div>
                            <div class="row div-product">
                                <div class="col-md-6 col-12">
                                    <label class="label-product" for="product-name">Nome do produto:</label>
                                </div>
                                <div class="col-md-6 col-12">
                                    <input class="product filled" type="text" id="product-name"></input>
                                </div>
                            </div>
                            <div class="row div-product">
                                <div class="col-md-6 col-12">
                                    <label class="label-product" for="product-validity">Validade dias (aberto):</label>
                                </div>
                                <div class="col-md-6 col-12">
                                    <input type="number" min="0" class="product filled"
                                        id="product-validity"></input>
                                </div>
                            </div>
                            <div class="row div-product">
                                <div class="col-md-6 col-12 col-12">
                                    <label class="label-product" for="product-selection">Seleção:</label>
                                </div>
                                <div class="col-md-6 col-12 col-12">
                                    <input class="product selection" type="text" id="product-selection" disabled></input>
                                </div>
                            </div>
                        </form>
                        <div class="row mt-3">
                            <div class="col-md-6 col-12 col-btn">
                                <a href="#">
                                    <button id="btnAdicionarProdutos" class="btn btn-primary shadow-sm btn-lg"
                                        type="button">Adicionar
                                        produtos</button>
                                </a>
                            </div>
                            <div class="col-md-6 col-12 col-btn">
                                <a href="#">
                                    <button id="btnExcluirProdutos" class="btn btn-danger shadow-sm btn-lg"
                                        type="button">Excluir
                                        produtos</button>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-btn">
                                <a href="#">
                                    <button id="btnEditarProdutos" class="btn btn-primary shadow-sm btn-lg"
                                        type="button">Editar
                                        produtos</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}