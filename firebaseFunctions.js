import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebase'; // Import the database instance

async function getListings() {
    const listingsCol = collection(db, "listings");
    const listingSnapshot = await getDocs(listingsCol);
    const listingList = listingSnapshot.docs.map(doc => {
      const data = doc.data();
      return { id: doc.id, ...data }; // Include the ID from the document
    });
    return listingList;
  }
  

export { getListings };
