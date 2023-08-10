import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBd1SRbRhUDTJL9v92MZ0ns4ylm6L3mXj8",
    authDomain: "loca-a3b0d.firebaseapp.com",
    projectId: "loca-a3b0d",
    storageBucket: "loca-a3b0d.appspot.com",
    messagingSenderId: "208736685814",
    appId: "1:208736685814:web:fc7a13f918647a3a8e66d7",
    measurementId: "G-BZ4SXKZBT3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // Export the database instance

// You don't need to export the getListings function here
