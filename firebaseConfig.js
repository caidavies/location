import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// Initialize Firebase
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

async function getListings(db) {
  const listingsCol = collection(db, "listings");
  const listingSnapshot = await getDocs(listingsCol);
  const listingList = listingSnapshot.docs.map(doc => doc.data());
  return listingList;
}

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export default FireBaseConfig