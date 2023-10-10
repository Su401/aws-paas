import React, { useState, useEffect } from 'react';
import '../../css/GerirPerfis.css';

import UserTable from './UserTable';
import UserForm from './UserForm';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
					<UserTable
						users={users}
						selectedUser={selectedUser}
						handleTableRowClick={handleTableRowClick}
					/>
				</Col>
				<Col xs={12} lg={6}>
					<UserForm
						formInputs={formInputs}
						setFormInputs={setFormInputs}
						handleInputChange={(field, value) =>
							setFormInputs({ ...formInputs, [field]: value })
						}
						handleCreateUser={handleCreateUser}
						handleEditUser={() =>
							handleEditUser(formInputs.username)
						}
						handleDeleteUser={() =>
							handleDeleteUser(formInputs.username)
						}
					/>
				</Col>
			</Row>
		</Container>
	);
}
