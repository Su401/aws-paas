import AuthComp from '../Components/Auth/AuthComp';
import { Outlet } from 'react-router-dom';

export default function SomeRoot() {
	console.log('SomeRoot');
	return (
		<AuthComp role={1}>
			<Outlet />
		</AuthComp>
	);
}
