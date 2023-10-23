// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDNaGiCK1d5CGXCh4uPU53rrfaC5iQWa-I',
	authDomain: 'paas-0410.firebaseapp.com',
	projectId: 'paas-0410',
	storageBucket: 'paas-0410.appspot.com',
	messagingSenderId: '1071927480753',
	appId: '1:1071927480753:web:046fba0245b3873c2b6d90',
	measurementId: 'G-9T714640V3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
