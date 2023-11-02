import { render, fireEvent, screen } from '@testing-library/react';
import UserForm from '../../../Backoffice/GerirPerfis/UserForm';

describe('UserForm component', () => {
	it('renders without crashing', () => {
		render(<UserForm />);
	});

	it('calls handleCreateUser when "Adicionar" button is clicked', () => {
		const handleCreateUserMock = jest.fn();
		render(<UserForm handleCreateUser={handleCreateUserMock} />);
		fireEvent.click(screen.getByText('Adicionar'));
		expect(handleCreateUserMock).toHaveBeenCalledTimes(1);
	});

	it('calls handleDeleteUser when "Excluir" button is clicked', () => {
		const handleDeleteUserMock = jest.fn();
		render(<UserForm handleDeleteUser={handleDeleteUserMock} />);
		fireEvent.click(screen.getByText('Excluir'));
		expect(handleDeleteUserMock).toHaveBeenCalledTimes(1);
	});

	it('calls handleEditUser when "Editar" button is clicked', () => {
		const handleEditUserMock = jest.fn();
		render(<UserForm handleEditUser={handleEditUserMock} />);
		fireEvent.click(screen.getByText('Editar'));
		expect(handleEditUserMock).toHaveBeenCalledTimes(1);
	});
});
