import App from './App';

import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '../src/Components/Auth/AuthContext';

import { render, screen } from '@testing-library/react';

test('renders the AuthProvider component', () => {
	render(<App />);
	expect(screen.getByTestId(AuthProvider)).toBeInTheDocument();
});

test('renders the RouterProvider component', () => {
	render(<App />);
	expect(screen.getByTestId(RouterProvider)).toBeInTheDocument();
});

test('passes the routes object to the RouterProvider component', () => {
	render(<App />);
	expect(screen.getByTestId(RouterProvider)).toHaveAttribute(
		'router',
		'routes'
	);
});
