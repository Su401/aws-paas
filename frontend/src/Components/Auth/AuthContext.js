import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDNaGiCK1d5CGXCh4uPU53rrfaC5iQWa-I',
	authDomain: 'paas-0410.firebaseapp.com',
	projectId: 'paas-0410',
	storageBucket: 'paas-0410.appspot.com',
	messagingSenderId: '1071927480753',
	appId: '1:1071927480753:web:046fba0245b3873c2b6d90',
	measurementId: 'G-9T714640V3',
};

firebase.initializeApp(firebaseConfig);

// Create an authentication context
export const AuthContext = createContext();

// Create an authentication provider component
export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const signIn = async (username, password) => {
		try {
			await firebase
				.auth()
				.signInWithEmailAndPassword(
					`${username}@example.com`,
					password
				);
		} catch (error) {
			// Handle authentication errors (e.g., wrong password, non-existing user)
			console.error(error.message);
		}
	};

	const signOut = async () => {
		await firebase.auth().signOut();
	};

	const authContextValue = {
		user,
		signIn,
		signOut,
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
