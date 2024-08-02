import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGetProductsQuery } from "../../services/groceryApi";
import { RouteProp, useRoute } from "@react-navigation/native";
import ProductsList from "../../components/ProductsList";
import { colors } from "../../constants/colors";

type SearchScreenParams = {
  searchQuery: string;
};

const SearchScreen = () => {
  const route = useRoute<RouteProp<{ Search: SearchScreenParams }, "Search">>();
  const searchQuery = (route.params as SearchScreenParams).searchQuery || "";

  const { data: products = [], isLoading } = useGetProductsQuery();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ProductsList products={filteredProducts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default SearchScreen;
