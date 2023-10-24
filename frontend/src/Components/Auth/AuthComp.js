import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import Homepage from '../../Static/Homepage';
import UserHomeBtn from '../../Backoffice/UserComp/UserHomeBtn/UserHomeBtn';
import AdminHome from '../../Backoffice/AdminComp/AdminHomebtn/AdminHomebtn';
import NotFound from '../404/404';

const AuthComp = (props) => {
	const { auth } = useContext(AuthContext);

	return (
		<>
			{(auth & props.role) > 0 ? (
				<div>{props.children}</div>
			) : (
				<div>Lamentamos mas não tem acesso</div>
			)}
		</>
	);
};

export default AuthComp;
