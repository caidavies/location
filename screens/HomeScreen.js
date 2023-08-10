// HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../components/Card';
import SkeletonLoader from '../components/SkeletonLoader';
import { getListings } from '../firebaseFunctions';

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
    <View>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card title={item.title} content={item.description} />
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

export default HomeScreen;
