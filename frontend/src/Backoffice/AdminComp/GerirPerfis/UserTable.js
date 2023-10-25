import Table from 'react-bootstrap/Table';

export default function UserTable({
	users,
	selectedUser,
	handleTableRowClick,
}) {
	return (
		<Table
			responsive
			id='usersTable'
			className='table table-hover table-light table-sm align-middle'
		>
			<thead>
				<th colSpan='8' className='table-secondary table-title'>
					Lista de Perfis
				</th>
				<tr className='information'>
					<th scope='col'>Username</th>
					<th scope='col'>Nome</th>
					<th scope='col'>NIF</th>
					<th scope='col'>Contacto</th>
					<th scope='col'>Apólice</th>
					<th scope='col'>Photo</th>
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
						<td>{user.photo}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}
