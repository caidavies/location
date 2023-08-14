import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, RefreshControl } from 'react-native';
import Card from '../components/Card';
import SkeletonLoader from '../components/SkeletonLoader';
import { getListings } from '../getListings'; // Import your API function

const HomeScreen = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(1); // For lazy loading

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const listingData = await getListings(); // Fetch data from your API
      setListings(listingData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const newListingData = await getListings(); // Fetch updated data from your API
      setListings(newListingData);
    } catch (error) {
      console.error(error);
    }
    setIsRefreshing(false);
  };

  const handleLoadMore = async () => {
    if (isLoading || isRefreshing) return;

    setIsLoading(true);
    try {
      const moreListingData = await getMoreListings(page + 1); // Fetch more data from your API
      setListings(prevListings => [...prevListings, ...moreListingData]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <FlatList
          style={styles.cardContainer}
          data={listings}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card title={item.name} content={item.type} image={item.image}/>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text>No listings available</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              colors={['#ffffff']}
            />
          }
          // onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
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
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
