// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyB0P3GEzpj4i6Fjl61e2hFOLGVXDVtBchw',
	authDomain: 'quess-flag.firebaseapp.com',
	projectId: 'quess-flag',
	storageBucket: 'quess-flag.appspot.com',
	messagingSenderId: '1097862029254',
	appId: '1:1097862029254:web:1621da69a16f7a5947dcc7',
	measurementId: 'G-G82GV8S1PQ'
};
export const ssr = false;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
