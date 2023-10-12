import { useState } from 'react';

import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import PrintPerfis from './PrintPerfis';
import React from 'react';

export default function UserForm({
	formInputs,
	setFormInputs,
	handleCreateUser,
	handleEditUser,
	handleDeleteUser,
}) {
	const [selectedUser, setSelectedUser] = useState(null);

	const handleConsultarPerfis = () => {
		// Set the selected user information in the state
		setSelectedUser(formInputs);
	};
	return (
		<Form className='form' action=''>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='name' column sm='6'>
					Nome do Funcionário:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='fullName'
						name='fullName'
						value={formInputs.fullName}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								fullName: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='birthday' column sm='6'>
					Data de Nascimento:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='date'
						className='filled'
						id='birthday'
						name='birthday'
						value={formInputs.birthday}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								birthday: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='nif' column sm='6'>
					NIF
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='number'
						className='filled'
						id='nif'
						name='nif'
						value={formInputs.nif}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								nif: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='adress' column sm='6'>
					Morada:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='userAddress'
						name='userAddress'
						value={formInputs.userAddress}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								userAddress: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='role' column sm='6'>
					Cargo:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='role'
						name='role'
						value={formInputs.role}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								role: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='insuranceName' column sm='6'>
					Seguradora:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='insuranceName'
						name='insuranceName'
						value={formInputs.insuranceName}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								insuranceName: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='insurancePolicy' column sm='6'>
					Apólice:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='insurancePolicy'
						name='insurancePolicy'
						value={formInputs.insurancePolicy}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								insurancePolicy: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='phone' column sm='6'>
					Contacto
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='phone'
						name='phone'
						value={formInputs.phone}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								phone: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Form.Group as={Row} className='mb-3'>
				<Form.Label htmlFor='username' column sm='6'>
					Username:
				</Form.Label>
				<Col sm='6'>
					<Form.Control
						type='text'
						className='filled'
						id='username'
						name='username'
						value={formInputs.username}
						onChange={(e) =>
							setFormInputs({
								...formInputs,
								username: e.target.value,
							})
						}
					/>
				</Col>
			</Form.Group>
			<Row className='align-items-center' id='perfisBtn'>
				<Row>
					<Col>
						<Button
							className='blueBtn m-1'
							type='button'
							id='btnAdd'
							onClick={handleCreateUser}
						>
							Adicionar Perfil
						</Button>
					</Col>
					<Col>
						<Button
							className='redBtn m-1'
							type='button'
							id='btnDelete'
							onClick={() =>
								handleDeleteUser(formInputs.username)
							}
						>
							Excluir Perfil
						</Button>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button
							className='blueBtn m-1'
							type='button'
							id='btnEdit'
							onClick={() => handleEditUser(formInputs.username)}
						>
							Editar registos
						</Button>
					</Col>
					<Col>
						<a href='/consultar-perfis'>
							<Button
								className='blueBtn m-1'
								type='button'
								onClick={handleConsultarPerfis}
							>
								Consultar Perfil
							</Button>
						</a>
					</Col>
				</Row>
			</Row>
		</Form>
	);
}
