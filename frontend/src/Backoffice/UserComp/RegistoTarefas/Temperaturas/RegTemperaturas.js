import React, { useState, useEffect } from 'react';
import './RegTemperaturas.css'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import CaixaSelecao from './CaixaSelecao';
import Table from 'react-bootstrap/Table';

function RegTemperaturas(props) {
	const [caixaSelecaoEquipamento, setCaixaSelecaoEquipamento] = useState([]);
	const [caixaSelecaoEquipamentoValor, setCaixaSelecaoEquipamentoValor] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [caixaInputTempAbertura, setCaixaInputTempAbertura] = useState('');
	const [caixaInputTempFecho, setCaixaInputTempFecho] = useState('');
	const [inputObs, setInputObs] = useState('');
	const [addedEquipaments, setAddedEquipaments] = useState([]);

	const fetchDados = async () => {
		try {
			const response = await fetch(
				'http://localhost:8080/api/registoTarefas/registarTrocaOleo',
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Failed to fetch equipments data');
			}
			const equipmentsData = await response.json();
			console.log(equipmentsData);
			setCaixaSelecaoEquipamento(
				equipmentsData.allEquipaments.map((equip) => ({
					type: { value: equip._id },
					label: equip.name,
					id: equip._id,
				}))
			);
			setCaixaSelecaoEquipamentoValor(
				equipmentsData.allEquipaments[0].name
			);
			setIsLoading(false);
		} catch (error) {
			console.error(
				'An error ocurred while fetching equipments data',
				error
			);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchDados();
	}, []);	
	
	const handleSelectEquipmentChange = (e) => {
		setCaixaSelecaoEquipamentoValor(e.target.value);
	};

	const handleButtonAdicionar = (e) => {
		const dataAtual = new Date().toISOString().split('T')[0];
		const user = 'Pedro';

		const id = caixaSelecaoEquipamento.find(
			(equip) => equip.label === caixaSelecaoEquipamentoValor
		).id
		const novoRegistroTemperatura = {
			equipamento: caixaSelecaoEquipamentoValor,
			user: user,
			data: dataAtual,
			obs: inputObs,
			id: id,
			temp:{
				abertura: caixaInputTempAbertura,
				fecho: caixaInputTempFecho,
			}
		}

		const idExists = addedEquipaments.some(
			(equip) => equip.id === novoRegistroTemperatura.id
		);

		if (!idExists){
			setAddedEquipaments((prevEquipaments) => [
				...prevEquipaments,
				novoRegistroTemperatura
			])
			setInputObs('');
		} else {
			alert("Um item com esse id já está na tabela")
		}
		;
	};

	const handleButtonExcluir = (index) => {
		const newData = [...addedEquipaments];
		newData.splice(index, 1);
		setAddedEquipaments(newData);
		setCaixaInputTempAbertura('');
		setCaixaInputTempFecho('');
		setInputObs('');
	}

	const handleButtonSubmeter = async () => {
		if (addedEquipaments.length === 0){
			alert("Preencha os campos!")
		}
	}
	return (
		<Container className='RegTemperaturas backgroundSec'>
			<h1>Registo de temperatura</h1>
			<Row  style={{marginTop:'30px'}}>
				<Col xs={12} lg={6} style={{paddingRight:'30px'}}>
					<div>Equipamentos</div>
					<div>
						{caixaSelecaoEquipamento ? (
							<CaixaSelecao
								value={caixaSelecaoEquipamentoValor}
								caixaSelecaoEquipamento={
									caixaSelecaoEquipamento
								}
								onChange={handleSelectEquipmentChange}
							/>
						) : (
							<p>Carregando dados...</p>
						)}
					</div>
					<br></br>
					<div style={{marginTop:"10px"}}>
						Temperaturas em °C
						<br></br>
						<input type='number' placeholder='Temperatura de abertura' min="0" className='inputBox' style={{textAlign:'center'}} onChange={(e) => setCaixaInputTempAbertura(e.target.value)} value={caixaInputTempAbertura}></input>
						<input type='number' placeholder='Temperatura de fecho' min="0" className='inputBox' style={{float:'right', textAlign:'center'}} value={caixaInputTempFecho} onChange={(e) => setCaixaInputTempFecho(e.target.value)}></input>
					</div>
					<div style={{marginTop:'30px'}}>
                        <textarea style={{border:'none', width:'250px', height:'150px', borderRadius:'5px', textAlign:'left', padding:'4px'}} type="text" placeholder="Inserir observações..." value={inputObs} onChange={(e) => setInputObs(e.target.value)} className='caixaTextArea'>
                        </textarea>
                    </div>
					<button className="btn btn-primary" onClick={(e) => handleButtonAdicionar(e)}>Adicionar</button>
				</Col>
				<Col xs={12} lg={6} style={{paddingLeft:'30px'}}>
					<Table style={{textAlign:'center'}}>
						<thead>
							<tr>
								<th style={{fontSize:'20pt', textAlign:'center'}} className="header" colSpan="5">Lista de equipamentos
								</th>
							</tr>
							<tr>
								<th scope='col'>Equipamento</th>
								<th scope='col'>Temp. abertura</th>
								<th scope='col'>Temp. fecho</th>
								<th scope='col'>Observações</th>
								<th scope="col">Apagar</th>
							</tr>
						</thead>
						<tbody>
							{addedEquipaments.map((equipaments, index) => (
								<tr key={equipaments.id}>
									<td>{equipaments.equipamento}</td>
									<td>{equipaments.temp.abertura}</td>
									<td>{equipaments.temp.fecho}</td>
									<td style={{ wordWrap: 'break-word', whiteSpace: 'normal', maxWidth: '150px' }}>{equipaments.obs}</td>
									<td>
										<button style={{borderStyle:'none', borderRadius:'3px', padding:'0.05em 0.4em 0.05em 0.4em', backgroundColor:'rgb(218, 92, 92)', color:'white'}} onClick={() => handleButtonExcluir(index)}>X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<button className="btn btn-primary" type="submit" onClick={handleButtonSubmeter}>Submeter</button>
				</Col>
			</Row>
		</Container>
	);
}

export default RegTemperaturas;
