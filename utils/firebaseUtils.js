// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.EXPO_PUBLIC_API_KEY,
	authDomain: 'blinkit-clone-1b681.firebaseapp.com',
	projectId: 'blinkit-clone-1b681',
	storageBucket: 'blinkit-clone-1b681.appspot.com',
	messagingSenderId: '628021630454',
	appId: '1:628021630454:web:0e27617e7bb0e8b809a3d7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const auth = getAuth(app);

export { app, auth, firebaseConfig };
