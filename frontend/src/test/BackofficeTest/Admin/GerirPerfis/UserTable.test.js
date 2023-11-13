<<<<<<< HEAD
import UserTable from '../../../../Backoffice/AdminComp/GerirPerfis/UserTable';
=======
import UserTable from '../../../../Backoffice/GerirPerfis/UserTable';
>>>>>>> origin/master
import { render, fireEvent, screen } from '@testing-library/react';

const users = [
	{
		username: 'user1',
		fullName: 'User One',
		nif: '123456789',
<<<<<<< HEAD
		phone: '912345678',
		insurance: {
			policy: '12345',
=======
		phone: '123-456-7890',
		insurance: {
			policy: 'P12345',
>>>>>>> origin/master
		},
	},
	{
		username: 'user2',
		fullName: 'User Two',
		nif: '987654321',
<<<<<<< HEAD
		phone: '918765432',
		insurance: {
			policy: '67890',
=======
		phone: '987-654-3210',
		insurance: {
			policy: 'P67890',
>>>>>>> origin/master
		},
	},
];

describe('UserTable component', () => {
	it('renders without crashing', () => {
		render(<UserTable users={users} />);
	});

	it('displays users data correctly', () => {
		render(<UserTable users={users} />);
		expect(screen.getByText('user1')).toBeInTheDocument();
		expect(screen.getByText('User One')).toBeInTheDocument();
		expect(screen.getByText('123456789')).toBeInTheDocument();
<<<<<<< HEAD
		expect(screen.getByText('912345678')).toBeInTheDocument();
		expect(screen.getByText('')).toBeInTheDocument();
=======
		expect(screen.getByText('123-456-7890')).toBeInTheDocument();
		expect(screen.getByText('P12345')).toBeInTheDocument();
>>>>>>> origin/master

		expect(screen.getByText('user2')).toBeInTheDocument();
		expect(screen.getByText('User Two')).toBeInTheDocument();
		expect(screen.getByText('987654321')).toBeInTheDocument();
<<<<<<< HEAD
		expect(screen.getByText('918765432')).toBeInTheDocument();
		expect(screen.getByText('67890')).toBeInTheDocument();
=======
		expect(screen.getByText('987-654-3210')).toBeInTheDocument();
		expect(screen.getByText('P67890')).toBeInTheDocument();
>>>>>>> origin/master
	});

	it('calls handleTableRowClick when a row is clicked', () => {
		const handleTableRowClick = jest.fn();
		render(
			<UserTable
				users={users}
				handleTableRowClick={handleTableRowClick}
			/>
		);

		fireEvent.click(screen.getByText('user1'));
		expect(handleTableRowClick).toHaveBeenCalledWith(users[0]);

		fireEvent.click(screen.getByText('user2'));
		expect(handleTableRowClick).toHaveBeenCalledWith(users[1]);
	});
<<<<<<< HEAD
=======

	// Add more test cases as needed
>>>>>>> origin/master
});
