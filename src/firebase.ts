import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAL3PEZgCnxVywSn0zXURYC-n1jgl0fFe8",
  authDomain: "wizzy-deliveries-60240.firebaseapp.com",
  projectId: "wizzy-deliveries-60240",
  storageBucket: "wizzy-deliveries-60240.firebasestorage.app",
  messagingSenderId: "983928381567",
  appId: "1:983928381567:web:dccb8dfc29797ca06c1f4a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);