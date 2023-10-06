import React, { useState, useEffect } from 'react';
import '../css/GerirPerfis.css';

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
		<div className='GerirPerfis'>
			<div className='container backgroundSec'>
				<h1>Gerir Perfis</h1>
				<div className='row'>
					<div className='col-12 col-lg-6 table-responsive'>
						<table
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
										onClick={() =>
											handleTableRowClick(user)
										} // Add this line to handle row click
										className={
											selectedUser &&
											selectedUser.username ===
												user.username
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
						</table>
					</div>
					<div className='col-12 col-lg-6'>
						<form className='products-form' action=''>
							<div className='mb-3 row product'>
								<label
									htmlFor='name'
									className='col-12 col-sm-6 col-form-label'
								>
									Nome do Funcionário:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='birthday'
									className='col-12 col-sm-6 col-form-label'
								>
									Data de Nascimento:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='date'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='nif'
									className='col-12 col-sm-6 col-form-label'
								>
									NIF
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='number'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='adress'
									className='col-12 col-sm-6 col-form-label'
								>
									Morada:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='role'
									className='col-12 col-sm-6 col-form-label'
								>
									Cargo:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='insuranceName'
									className='col-12 col-sm-6 col-form-label'
								>
									Seguradora:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='insurancePolicy'
									className='col-12 col-sm-6 col-form-label'
								>
									Apólice:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='phone'
									className='col-12 col-sm-6 col-form-label'
								>
									Contacto
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div className='mb-3 row product'>
								<label
									htmlFor='username'
									className='col-12 col-sm-6 col-form-label'
								>
									Username:
								</label>
								<div className='col-12 col-sm-6'>
									<input
										type='text'
										className='form-control filled'
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
								</div>
							</div>
							<div
								className='row align-items-center'
								id='perfisBtn'
							>
								<div className='row'>
									<div className='col'>
										<button
											className='blueBtn m-1'
											type='button'
											id='btnAdd'
											onClick={handleCreateUser}
										>
											Adicionar Perfil
										</button>
									</div>
									<div className='col'>
										<button
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
										</button>
									</div>
								</div>
								<div className='row'>
									<div className='col'>
										<button
											className='blueBtn m-1'
											type='button'
											id='btnEdit'
											onClick={() =>
												handleEditUser(
													formInputs.username
												)
											}
										>
											Editar registos
										</button>
									</div>
									<div className='col'>
										<a href='./printPerfis.html'>
											<button
												className='blueBtn m-1'
												type='button'
											>
												Consultar perfil
											</button>
										</a>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
			<main />
		</div>
	);
}
