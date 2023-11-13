import GerirPerfis from '../../../../Backoffice/GerirPerfis/GerirPerfis';

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

// Mock the fetch function to simulate API calls
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ allUsers: [] }),
		ok: true,
	})
);

describe('GerirPerfis component', () => {
	it('renders without crashing', () => {
		render(<GerirPerfis />);
	});

	it('fetches users data and displays them', async () => {
		render(<GerirPerfis />);
		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
		expect(screen.getByText('Lista de Perfis')).toBeInTheDocument();
	});

	it('handles user selection and displays user details in the form', async () => {
		render(<GerirPerfis />);
		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

		// Simulate clicking on a user row
		fireEvent.click(screen.getByText('Username'));
		await waitFor(() =>
			expect(screen.getByTestId('username-input')).toHaveValue('Username')
		);

		// Assert that the form is populated with selected user data
	});

	it('handles user creation', async () => {
		render(<GerirPerfis />);
		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

		// Simulate filling out the form and submitting it
		fireEvent.change(screen.getByLabelText('Nome do Funcionário:'), {
			target: { value: 'New User' },
		});
		// ... (simulate other form fields)

		fireEvent.click(screen.getByText('Adicionar Perfil'));
		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));

		// Assert that the user has been created and the form is cleared
	});

	it('handles user deletion', async () => {
		render(<GerirPerfis />);
		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

		// Simulate clicking on a user row
		fireEvent.click(screen.getByText('Username'));

		// Simulate clicking on "Excluir Perfil" button
		fireEvent.click(screen.getByText('Excluir Perfil'));
		await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(2));

		// Assert that the user has been deleted and the form is cleared
	});

	// Add more test cases for editing users, API error handling, etc.
});
