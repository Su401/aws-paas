import './App.css';

import { useAuth } from './Components/Auth/AuthContext';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './Components/Auth/AuthContext';

import { routes } from './Routes/router';
export default function App() {
	return (
		<AuthProvider>
			<RouterProvider router={routes} />
		</AuthProvider>
	);
}
