import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CaixaSelecao from "./CaixaSelecao";
import Table from 'react-bootstrap/Table';
import "../../Components/Sass/my-bootstrap.scss"


function RegistarTrocaOleo () {
    const [caixaSelecaoEquipamento, setCaixaSelecaoEquipamento] = useState([]);
    const [caixaSelecaoEquipamentoValor, setCaixaSelecaoEquipamentoValor] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isChecked, setIsChecked] = useState(false);
    const [inputObs, setInputObs] = useState('');
    const [addedEquipaments, setAddedEquipaments] = useState([]);

    const fetchDados = async () => {
        
        try {
            const response = await fetch('http://localhost:8080/api/registoTarefas/registarTrocaOleo',
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
            console.log(equipmentsData)
            setCaixaSelecaoEquipamento(equipmentsData.allEquipaments.map(equip => ({
                type: { value: equip._id },
                label: equip.name,
                id: equip._id,
            })));       
            setCaixaSelecaoEquipamentoValor(equipmentsData.allEquipaments[0].name);     
            setIsLoading(false);
        } catch (error){
            console.error('An error ocurred while fetching equipments data', error);
            setIsLoading(false);
        }
       
    }

    useEffect(() => {
        fetchDados();
    }, []);

    const handleSelectEquipmentChange = (e) => {
        setCaixaSelecaoEquipamentoValor(e.target.value);
    }

    const handleButtonSubmeter = async () => {
        const dataAtual = new Date().toISOString().split('T')[0];

        const modificaAddedEquipaments = addedEquipaments;
        modificaAddedEquipaments.map(equipamentoModificado => {
            equipamentoModificado.data =  dataAtual;
            equipamentoModificado.id_equipamento = equipamentoModificado.equipamento;
        })
        
        console.log(modificaAddedEquipaments);
        try {
            const response = await fetch('http://localhost:8080/api/registoTarefas/registarTrocaOleo/submeterDados', 
            {  
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addedEquipaments)
            })
            if (!response.ok){
                throw new Error ('Failed to fetch submit endpoint')
            }
            const data = await response.json();
            console.log(data);
            setAddedEquipaments([]);
        } catch (error){
            console.error("Um erro aconteceu ao tentar enviar os dados ", error)
        }
    }

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    }

    const handleButtonAdicionar = (e) => {
        let checked = ''
        if (isChecked){
            checked = 'Efetuada'
        } else {
            checked = 'Não efetuada'
        };

        console.log(caixaSelecaoEquipamentoValor)
        const id = caixaSelecaoEquipamento.find(equip => equip.label === caixaSelecaoEquipamentoValor).id;
        const equipamento = caixaSelecaoEquipamento.find(equip => equip.label === caixaSelecaoEquipamentoValor).label;
        const newEquipamento = {
            equipamento: equipamento,
            mudanca: checked,
            observacoes: inputObs,
            id: id,
        }
        const idExists = addedEquipaments.some(equip => equip.id === newEquipamento.id);
        if(!idExists){
            setAddedEquipaments(prevEquipaments => [...prevEquipaments, newEquipamento]);
            setInputObs('');
            setIsChecked(false);
        } else {
            alert("Um item com esse id já está na tabela")
        }
        
    }

    const handleButtonDelete = (index) => {
        const newData = [...addedEquipaments];
        newData.splice(index, 1);
        setAddedEquipaments(newData);
    }

    return (
        <Container className='RegistarTrocaOleo backgroundSec'>
            <h1>Registo de troca de óleo</h1>
            <Row style={{marginTop:'30px'}}>
                <Col xs={12} lg={6}>
                    <div>
                      Equipamentos  
                    </div>
                    <div>
                        {caixaSelecaoEquipamento ? (
                            <CaixaSelecao value={caixaSelecaoEquipamentoValor} caixaSelecaoEquipamento={caixaSelecaoEquipamento} onChange={handleSelectEquipmentChange} />
                            ) : (
                            <p>Carregando dados...</p>
                            )}
                    </div>
                    <br></br>
                    <div>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className="form-check-input"
                            style={{marginRight:'10px'}}
                        />
                        <span></span>
                        <label>Mudança efetuada</label>
                    </div>
                    <div style={{marginTop:'30px'}}>
                        <textarea style={{border:'none', width:'250px', height:'150px', borderRadius:'5px', textAlign:'left', padding:'4px'}} type="text" placeholder="Inserir observações..." value={inputObs} onChange={(e) => setInputObs(e.target.value)}>
                        </textarea>
                    </div>
                    <button className="btn btn-primary" onClick={handleButtonAdicionar}>Adicionar</button>
                </Col>
                <Col xs={12} lg={6}>
                    <Table style={{textAlign:'center'}}>
                        <thead>
                            <tr>
                                <th style={{fontSize:'20pt', textAlign:'center'}} className="header" colSpan="4">Lista de equipamentos</th>
                            </tr>
                            <tr>
                                <th scope="col">Equipamento</th>
                                <th scope="col">Mudança</th>
                                <th scope="col">Observações</th>
                                <th scope="col">Apagar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {addedEquipaments.map(((equipaments, index) => (
                            <tr key={equipaments.id}>
                                <td>{equipaments.equipamento}</td>
                                <td>{equipaments.mudanca}</td>
                                <td style={{ wordWrap: 'break-word', whiteSpace: 'normal', maxWidth: '150px' }}>{equipaments.observacoes}</td>
                                <td>
                                    <button style={{borderStyle:'none', borderRadius:'3px', padding:'0.1em 0.4em 0.1em 0.4em', backgroundColor:'rgb(218, 92, 92)', color:'white'}} onClick={() => handleButtonDelete(index)}>X</button>
                                </td>
                            </tr>
                            )))}
                        </tbody>
                    </Table>
                    <button className="btn btn-primary" type="submit" onClick={handleButtonSubmeter}>Submeter</button>
                </Col>
            </Row>
        </Container>
    )
}

export default RegistarTrocaOleo;