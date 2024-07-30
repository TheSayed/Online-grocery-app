import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
};

const ProductsList = ({ products }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={products}
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
  },
});

export default ProductsList;
