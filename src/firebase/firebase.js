import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCvD2B74eCu7xr7V9RyuVCsHMrYp9c5TEw',
  authDomain: 'react-firebase-auth-a6326.firebaseapp.com',
  projectId: 'react-firebase-auth-a6326',
  storageBucket: 'react-firebase-auth-a6326.appspot.com',
  messagingSenderId: '225675401097',
  appId: '1:225675401097:web:c016ac958c9b1ea921f358',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
