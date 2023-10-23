import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Router';
import { AuthProvider } from './Components/Auth/AuthContext';

export default function App() {
	return <RouterProvider router={routes} />;
}
