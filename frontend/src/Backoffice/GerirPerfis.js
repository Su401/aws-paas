import React, { useState, useEffect } from 'react';
import '../css/GerirPerfis.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

export default function GerirPerfis() {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [editedUser, setEditedUser] = useState({
		fullName: '',
		nif: '',
		userAddress: '',
		role: '',
		insurance: {
			name: '',
			policy: '',
		},
		phone: '',
		username: '',
	});

	const [formInputs, setFormInputs] = useState({
		fullName: '',
		birthday: '',
		nif: '',
		userAddress: '',
		role: '',
		insuranceName: '',
		insurancePolicy: '',
		phone: '',
		username: '',
	});

	useEffect(() => {
		if (selectedUser) {
			setEditedUser({
				fullName: selectedUser.fullName,
				nif: selectedUser.nif,
				userAddress: selectedUser.userAddress,
				role: selectedUser.role,
				insurance: {
					name: selectedUser.insurance.name,
					policy: selectedUser.insurance.policy,
				},
				phone: selectedUser.phone,
				username: selectedUser.username,
			});
		}
	}, [selectedUser]);

	useEffect(() => {
		fetchUsers();
	}, []);

	/**
	 * Fetches all users data from the server.
	 */
	const fetchUsers = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/user/allUsers`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Failed to fetch users data');
			}
			const usersData = await response.json();
			setUsers(usersData.allUsers);
		} catch (error) {
			console.error(
				'An error occurred while fetching users data: ',
				error
			);
		}
	};

	/**
	 * Handles the creation of a new user by sending a POST request to the server with the form inputs.
	 * If the request is successful, clears the form fields and fetches the updated list of users to display the new user.
	 * If the request fails, displays an error message.
	 */
	const handleCreateUser = async () => {
		try {
			const response = await fetch(
				`http://localhost:8080/user/createUser`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formInputs),
				}
			);

			if (response.ok) {
				// Clear the form fields after successful creation
				setFormInputs({
					fullName: '',
					birthday: '',
					nif: '',
					userAddress: '',
					role: '',
					insuranceName: '',
					insurancePolicy: '',
					phone: '',
					username: '',
				});

				// Fetch and update the users list to display the new user
				fetchUsers();
			} else {
				alert('Error adding user');
			}
		} catch (err) {
			console.error('Error in request', err);
		}
	};

	/**
	 * Sets the selected user and form inputs when a table row is clicked.
	 */
	const handleTableRowClick = (user) => {
		setSelectedUser(user);
		setFormInputs({
			fullName: user.fullName,
			birthday: user.birthday,
			nif: user.nif,
			userAddress: user.userAddress,
			role: user.role,
			insuranceName: user.insurance.name,
			insurancePolicy: user.insurance.policy,
			phone: user.phone,
			username: user.username,
		});
	};

	/**
	 * Deletes a user with the given username from the server and updates the user list.
	 */
	const handleDeleteUser = async (usernameToDelete) => {
		try {
			const response = await fetch(
				`http://localhost:8080/user/deleteUser?username=${usernameToDelete}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				throw new Error('Failed to delete user');
			}

			// Remove the deleted user from the list
			setUsers(
				users.filter((user) => user.username !== usernameToDelete)
			);
			setSelectedUser(null);
		} catch (error) {
			console.error('An error occurred while deleting user: ', error);
		}
	};

	/**
	 * Handles editing a user by sending a PUT request to the server with the updated user data.
	 */
	const handleEditUser = async (usernameToEdit) => {
		try {
			const response = await fetch(
				`http://localhost:8080/user/updateUser?username=${usernameToEdit}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formInputs),
				}
			);
			if (!response.ok) {
				throw new Error('Failed to update user');
			} else {
				setFormInputs({
					fullName: '',
					birthday: '',
					nif: '',
					userAddress: '',
					role: '',
					insuranceName: '',
					insurancePolicy: '',
					phone: '',
					username: '',
				});
				// Fetch and update the users list to display the edited user
				fetchUsers();
			}

			// Update the edited user in the list
			setUsers(
				users.map((user) =>
					user.username === usernameToEdit ? editedUser : user
				)
			);

			// Clear the selected and edited users
			setEditedUser({
				fullName: '',
				nif: '',
				userAddress: '',
				role: '',
				insurance: {
					name: '',
					policy: '',
				},
				phone: '',
				username: '',
			});
			setSelectedUser(null);
		} catch (error) {
			console.error('An error occurred while editing user: ', error);
		}
	};

	return (
		<Container className='GerirPerfis backgroundSec'>
			<h1>Gerir Perfis</h1>
			<Row>
				<Col xs={12} lg={6}>
					<Table
						responsive
						id='usersTable'
						className='table table-hover table-light table-sm align-middle'
					>
						<thead>
							<th
								colSpan='8'
								className='table-secondary table-title'
							>
								Lista de Perfis
							</th>
							<tr className='information'>
								<th scope='col'>Username</th>
								<th scope='col'>Nome</th>
								<th scope='col'>NIF</th>
								<th scope='col'>Contacto</th>
								<th scope='col'>Apólice</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr
									key={user.username}
									onClick={() => handleTableRowClick(user)} // Add this line to handle row click
									className={
										selectedUser &&
										selectedUser.username === user.username
											? 'selected-row'
											: ''
									}
								>
									<td>{user.username}</td>
									<td>{user.fullName}</td>
									<td>{user.nif}</td>
									<td>{user.phone}</td>
									<td>{user.insurance?.policy}</td>
								</tr>
							))}
						</tbody>
					</Table>
				</Col>
				<Col xs={12} lg={6}>
					<Form className='form' action=''>
						<Form.Group as={Row} className='mb-3'>
							<Form.Label htmlFor='name' column sm='6'>
								Nome do Funcionário:
							</Form.Label>
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
							<Col sm='6' /* className='col-12 col-sm-6' */>
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
											handleDeleteUser(
												formInputs.username
											)
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
										onClick={() =>
											handleEditUser(formInputs.username)
										}
									>
										Editar registos
									</Button>
								</Col>
								<Col>
									<a href='./printPerfis.html'>
										<Button
											className='blueBtn m-1'
											type='button'
										>
											Consultar perfil
										</Button>
									</a>
								</Col>
							</Row>
						</Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}
