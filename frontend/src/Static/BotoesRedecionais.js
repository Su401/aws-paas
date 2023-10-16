import '../css/BotoesRedecionais.css'
import '../Components/Sass/my-bootstrap.scss';
import SecondaryNav from "../Components/SecondaryNav/SecondaryNav";
import { Link } from 'react-router-dom';

export default function BotoesRedecionais() {
    return (
        <div>
            <SecondaryNav />
            <div className="row">
                <div className='mt-lg-4'>
                    <span></span>
                </div>
                <div className="col greetings">
                    <span className="hello">Olá </span><span className="user">Susana !</span>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="mb-lg-5 mb-md-5 mb-sm-5">
                    </div>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="row mt-lg-5 mt-md-5">
                        <div className="col-lg-4">
                            <div className="card pb-lg-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <Link to="/gerirProdutos" className="stretched-link btnedit"><span
                                        className="letterEdit">GERIR</span>
                                        <br></br><span className="letter2Edit"> PRODUTOS</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card pb-lg-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <a href="/gerirPerfis" className="stretched-link btnedit"><span
                                        className="letterEdit">GERIR</span>
                                        <br></br> <span className="letter2Edit"> PERFIS</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card pb-lg-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <a href="/gerirRegistos" className="stretched-link btnedit"><span
                                        className="letterEdit">GERIR</span>
                                        <br></br> <span className="letter2Edit"> REGISTOS</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="mt-lg-5">

                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card pb-lg-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <a href="/" className="stretched-link btnedit"><span className="letterEdit">REGISTAR</span>
                                        <br></br><span className="letter2Edit">TAREFAS</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card pb-lg-0" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <a href="/registos" className="stretched-link btnedit"><span className="letterEdit">REGISTAR</span>
                                        <br></br><span className="letter2Edit">ABERTURA DE PRODUTOS</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card pb-lg-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <a href="/" className="stretched-link btnedit"><span className="letterEdit">CONSULTAR</span>
                                        <br></br><span className="letter2Edit"> DADOS</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}