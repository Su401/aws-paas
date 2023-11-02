import UserTable from '../../../../Backoffice/GerirPerfis/UserTable';
import { render, fireEvent, screen } from '@testing-library/react';

const users = [
	{
		username: 'user1',
		fullName: 'User One',
		nif: '123456789',
		phone: '123-456-7890',
		insurance: {
			policy: 'P12345',
		},
	},
	{
		username: 'user2',
		fullName: 'User Two',
		nif: '987654321',
		phone: '987-654-3210',
		insurance: {
			policy: 'P67890',
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
		expect(screen.getByText('123-456-7890')).toBeInTheDocument();
		expect(screen.getByText('P12345')).toBeInTheDocument();

		expect(screen.getByText('user2')).toBeInTheDocument();
		expect(screen.getByText('User Two')).toBeInTheDocument();
		expect(screen.getByText('987654321')).toBeInTheDocument();
		expect(screen.getByText('987-654-3210')).toBeInTheDocument();
		expect(screen.getByText('P67890')).toBeInTheDocument();
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

	// Add more test cases as needed
});
