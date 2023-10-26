import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDNaGiCK1d5CGXCh4uPU53rrfaC5iQWa-I',
	authDomain: 'paas-0410.firebaseapp.com',
	projectId: 'paas-0410',
	storageBucket: 'paas-0410.appspot.com',
	messagingSenderId: '1071927480753',
	appId: '1:1071927480753:web:046fba0245b3873c2b6d90',
	measurementId: 'G-9T714640V3',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Create an authentication context
export const AuthContext = createContext();

// Create an authentication provider component
/**
 * Provides authentication context for the application.
 * @param {Object} props - Component props.
 * @param {ReactNode} props.children - Child components to be rendered.
 * @returns {JSX.Element} - JSX element.
 */
export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	/**
	 * Signs in the user with the given username and password.
	 * @param {string} username - User's username.
	 * @param {string} password - User's password.
	 */
	const signIn = async (username, password) => {
		try {
			await signInWithEmailAndPassword(
				auth,
				`${username}@example.com`,
				password
			);
		} catch (error) {
			// Handle authentication errors (e.g., wrong password, non-existing user)
			console.error(error.message);
		}
	};

	/**
	 * Signs out the current user.
	 */
	const signOutUser = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			// Handle sign out errors
			console.error(error.message);
		}
	};

	const authContextValue = {
		user,
		signIn,
		signOut: signOutUser,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
}

// Custom hook to use the authentication context
export function useAuth() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}
