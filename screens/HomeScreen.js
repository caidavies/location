// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card';
import SkeletonLoader from '../components/SkeletonLoader';
import { getListings } from '../firebaseFunctions';

const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      'http://caid1.sg-host.com/wp-json/wp/v2/listing/',
    );
    const json = await response.json();
      console.log(json);
    return json.movies;
  } catch (error) {
    console.error(error);
  }
};

getMoviesFromApiAsync();

const HomeScreen = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      const listingData = await getListings();
      setListings(listingData);
      setIsLoading(false);
    }

    fetchListings();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <FlatList style={styles.cardContainer}
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card title={item.title} content={item.description} images={item.images[0]} />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text>No listings available</Text>
            </View>
          )}
        />


      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    height: '100%',
  },
  cardContainer: {
    paddingVertical: 40,
  }
});

export default HomeScreen;
