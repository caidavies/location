// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


function CategoryScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Category Screen</Text>
    </View>
  );
}
function ListingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Listing Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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

export default App;