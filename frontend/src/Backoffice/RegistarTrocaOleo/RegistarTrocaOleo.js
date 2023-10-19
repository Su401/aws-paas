import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CaixaSelecao from "./CaixaSelecao";

function RegistarTrocaOleo () {
    const [caixaSelecaoEquipamento, setCaixaSelecaoEquipamento] = useState()
    
    const fetchDados = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/buscarEquipamentos',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            if (!response.ok){
                throw new Error('Failed to fetch equipments data');
            }
            const equipmentsData = await response.json();
            setCaixaSelecaoEquipamento(equipmentsData);
        } catch (error){
            console.error('An error ocurred while fetching equipments data', error)
        }
       
    }

    useEffect(() => {
        fetchDados();
    }, []);

    const handleSelectEquipmentChange = (e) => {
        setCaixaSelecaoEquipamento(e.target.value);
    }

    return (
        <Container className='RegistarTrocaOleo backgroundSec'>
            <h1>Registo de troca de óleo</h1>
            <Row>
                <Col xs={12} lg={6}>
                    <div>
                      Equipamentos  
                    </div>
                    <div>
                        <CaixaSelecao options={caixaSelecaoEquipamento} onChange={handleSelectEquipmentChange}/>
                    </div>
                </Col>
                <Col xs={12} lg={6}></Col>
            </Row>
        </Container>
    )
}

export default RegistarTrocaOleo;