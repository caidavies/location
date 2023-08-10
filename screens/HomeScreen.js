import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card'; // Adjust the path as needed

function HomeScreen({ navigation }) {
  return (
    <ScrollView>

    <View style={styles.container}>
      <Card title="Card Title" content="This is the card's content." />
    </View>
      {/* <Button
        title="Go to Listing"
        onPress={() => navigation.navigate('Listing')}
      /> */}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default HomeScreen;
