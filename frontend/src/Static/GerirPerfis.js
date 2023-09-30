import '../css/GerirPerfis.css'

export default function GerirPerfis() {
    return (
        <div className="GerirPerfis ">
            <div class="container backgroundSec">
                <h1>Gerir Perfis</h1>
                <div class="row">
                    <div class="col-12 col-lg-6 table-responsive">
                        <table id="usersTable" class="table table-hover table-light table-sm align-middle">
                            <thead>
                                <th colspan="8" class="table-secondary table-title">Lista de Perfis</th>
                                <tr class="information">
                                    <th scope="col">Username</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">NIF</th>
                                    <th scope="col">Contacto</th>
                                    <th scope="col">Apólice</th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-12 col-lg-6">
                        <form class="products-form" action="">
                            <div class="mb-3 row product">
                                <label for="name" class="col-12 col-sm-6 col-form-label">Nome do Funcionário:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="fullName" name="fullName"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="birthday" class="col-12 col-sm-6 col-form-label">Data de Nascimento:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="date" class="form-control filled" id="birthday" name="birthday"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="nif" class="col-12 col-sm-6 col-form-label">NIF</label>
                                <div class="col-12 col-sm-6">
                                    <input type="number" class="form-control filled" id="nif" name="nif"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="adress" class="col-12 col-sm-6 col-form-label">Morada:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="userAddress" name="userAddress"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="role" class="col-12 col-sm-6 col-form-label">Cargo:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="role" name="role"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="insuranceName" class="col-12 col-sm-6 col-form-label">Seguradora:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="insuranceName"
                                        name="insuranceName"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="insurancePolicy" class="col-12 col-sm-6 col-form-label">Apólice:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="insurancePolicy"
                                        name="insurancePolicy"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="phone" class="col-12 col-sm-6 col-form-label">Contacto</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="phone" name="phone"></input>
                                </div>
                            </div>
                            <div class="mb-3 row product">
                                <label for="username" class="col-12 col-sm-6 col-form-label">Username:</label>
                                <div class="col-12 col-sm-6">
                                    <input type="text" class="form-control filled" id="username" name="username"></input>
                                </div>
                            </div>
                            <div class="row align-items-center" id="perfisBtn">
                                <div class="row">
                                    <div class="col">
                                        <a href="/">
                                            <button class="blueBtn m-1" type="button" id="btnAdd">Adicionar
                                                Perfil</button>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="/">
                                            <button class="redBtn m-1" type="button" id="btnDelete">Excluir
                                                Perfil</button>
                                        </a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <a href="/">
                                            <button class="blueBtn m-1" type="button" id="btnEdit">Editar
                                                registos</button>
                                        </a>
                                    </div>
                                    <div class="col">
                                        <a href="./printPerfis.html">
                                            <button class="blueBtn m-1" type="button">Consultar perfil</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}