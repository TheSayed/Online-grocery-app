import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";
import ProductCard from "../../components/ProductCard";

type Product = {
  id?: number;
  name?: string;
  categoryId?: number;
  price?: number;
  unit?: string;
  image?: string;
};

type Props = {
  categoryId?: number; // Updated to number to match the Product type
};

const Lists = ({ categoryId }: Props) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  const filteredProducts = categoryId
    ? products?.filter((product: Product) => product.categoryId === categoryId)
    : products;

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={filteredProducts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => (item.id ? item.id.toString() : item.id + "")}
        renderItem={({ item }) => (
          <ProductCard
            id={item.id}
            name={item.name}
            unit={item.unit}
            price={item.price}
            image={item.image}
            height={189}
            width={164}
          />
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
});

export default Lists;
