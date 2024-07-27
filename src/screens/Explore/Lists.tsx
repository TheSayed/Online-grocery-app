import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";
import ProductCard from "../../components/ProductCard";
import { verticalScale } from "../../utilis/scaling";

type Props = {
  categoryId?: string;
};

const Lists = ({ categoryId }: Props) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading products</Text>;

  const filteredProducts = categoryId
    ? products?.filter((product) => product.categoryId === categoryId)
    : products;

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        key={"productList-flatlist-numColumns-1"}
        data={filteredProducts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => (item.id ? item.id.toString() : item.id + "")}
        renderItem={({ item }) => (
          <ProductCard
            key={item.id}
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
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingLeft: verticalScale(13), // that makes the centralization
  },
});

export default Lists;
