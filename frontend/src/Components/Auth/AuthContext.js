import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

/* export const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isAdmin, setIsAdmin] = useState(false);

	const login = (isAdmin) => {
		setIsLoggedIn(true);
		setIsAdmin(isAdmin);
	};

	const logout = () => {
		setIsLoggedIn(false);
		setIsAdmin(false);
	};

	return (
		<AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
}; */

export default AuthContext;
