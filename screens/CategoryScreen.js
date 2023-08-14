import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import SkeletonLoader from '../components/SkeletonLoader';
import { getCategories } from '../getCategories';

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <FlatList
          style={styles.listContainer}
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <Text style={styles.categoryName}>{item}</Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text>No categories available</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listContainer: {
    flex: 1,
  },
  categoryItem: {
    marginBottom: 20,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default CategoryScreen;
