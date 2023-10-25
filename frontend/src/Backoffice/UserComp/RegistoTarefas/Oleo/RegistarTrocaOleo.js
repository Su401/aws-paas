import React, { useState, useEffect } from 'react';
import './RegistarTrocaOleo.css'
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import CaixaSelecao from './CaixaSelecao';
import Table from 'react-bootstrap/Table';

function RegistarTrocaOleo() {
	const [caixaSelecaoEquipamento, setCaixaSelecaoEquipamento] = useState([]);
	const [caixaSelecaoEquipamentoValor, setCaixaSelecaoEquipamentoValor] =
		useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
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

	const handleCheckboxChange = (e) => {
		setIsChecked(e.target.checked);
	};

	const handleBottonAdicionar = (e) => {
		let checked = '';
		if (isChecked) {
			checked = 'Efetuada';
		} else {
			checked = 'Não efetuada';
		}

		console.log(caixaSelecaoEquipamentoValor);
		const id = caixaSelecaoEquipamento.find(
			(equip) => equip.label === caixaSelecaoEquipamentoValor
		).id;
		const equipamento = caixaSelecaoEquipamento.find(
			(equip) => equip.label === caixaSelecaoEquipamentoValor
		).label;
		const newEquipamento = {
			equipamento: equipamento,
			mudanca: checked,
			observacoes: inputObs,
			id: id,
		};
		const idExists = addedEquipaments.some(
			(equip) => equip.id === newEquipamento.id
		);
		if (!idExists) {
			setAddedEquipaments((prevEquipaments) => [
				...prevEquipaments,
				newEquipamento,
			]);
		} else {
			alert('Um item com esse id já está na tabela');
		}
	};

	const handleButtonDelete = (index) => {
		const newData = [...addedEquipaments];
		newData.splice(index, 1);
		setAddedEquipaments(newData);
	};

	return (
		<Container className='RegistarTrocaOleo backgroundSec'>
			<h1>Registo de troca de óleo</h1>
			<Row>
				<Col xs={12} lg={6}>
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
					<div>
						<input
							type='checkbox'
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<span></span>
						<label>Mudança efetuada</label>
					</div>
					<div>
						<input
							type='text'
							placeholder='Inserir observações'
							value={inputObs}
							onChange={(e) => setInputObs(e.target.value)}
						></input>
					</div>
					<button onClick={handleBottonAdicionar}>Adicionar</button>
				</Col>
				<Col xs={12} lg={6}>
					<Table>
						<thead>
							<tr>
								<th className='header' colSpan='4'>
									Lista de equipamentos
								</th>
							</tr>
							<tr>
								<th scope='col'>Equipamento</th>
								<th scope='col'>Mudança</th>
								<th scope='col'>Observações</th>
							</tr>
						</thead>
						<tbody>
							{addedEquipaments.map((equipaments, index) => (
								<tr key={equipaments.id}>
									<td>{equipaments.equipamento}</td>
									<td>{equipaments.mudanca}</td>
									<td>{equipaments.observacoes}</td>
									<td>
										<button
											onClick={() =>
												handleButtonDelete(index)
											}
										>
											X
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<button type='submit'>Submeter</button>
				</Col>
			</Row>
		</Container>
	);
}

export default RegistarTrocaOleo;
