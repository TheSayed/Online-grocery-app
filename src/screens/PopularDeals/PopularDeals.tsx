import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ProductCard from "../../components/ProductCard";
import { verticalScale } from "../../utilis/scaling";
import { useGetProductsQuery } from "../../services/groceryApi";

type Props = {
  numColumns?: number;
  horizontal?: boolean;
  listKey: string;
};

const PopularDeals: React.FC<Props> = ({
  numColumns = 1,
  horizontal = false,
  listKey,
}) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  const sortedProducts = products
    ? [...products].sort((a, b) => (a.price ?? 0) - (b.price ?? 0)).slice(0, 10)
    : [];

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading products</Text>;
  }

  return (
    <View style={styles.container}>
      {!isLoading && (
        <FlatList
          horizontal={horizontal}
          numColumns={numColumns}
          key={listKey}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : undefined}
          data={sortedProducts}
          keyExtractor={(item) => (item.id ? item.id.toString() : item.id + "")}
          renderItem={({ item }) => (
            <ProductCard
              id={item.id}
              name={item.name}
              unit={item.unit}
              price={item.price}
              image={item.image}
            />
          )}
        />
      )}
    </View>
  );
};

export default PopularDeals;

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(31),
  },
});
