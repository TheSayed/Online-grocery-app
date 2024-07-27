import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import React from "react";
import ProductCard from "../../components/ProductCard";
import { verticalScale } from "../../utilis/scaling";
import { useGetProductsQuery } from "../../services/groceryApi";

type Props = {
  numColumns?: number;
  horizontal?: boolean;
  listKey: string;
  containerStyle?: ViewStyle | TextStyle | ImageStyle;
};

const PopularDeals: React.FC<Props> = ({
  numColumns = 1,
  horizontal = false,
  listKey,
  containerStyle,
}) => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  // Sort products by price and limit to the first 10
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
    <View>
      {!isLoading && (
        <>
          <View style={containerStyle}>
            <FlatList
              horizontal={horizontal}
              numColumns={numColumns}
              key={listKey}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={numColumns > 1 ? styles.columnWrapper : null}
              data={sortedProducts}
              keyExtractor={(item) =>
                item.id ? item.id.toString() : item.id + ""
              }
              renderItem={({ item }) => (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  unit={item.unit}
                  price={item.price}
                  image={item.image}
                  width={150}
                  height={189}
                />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default PopularDeals;

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "center", // Center items in the row
    marginBottom: verticalScale(10), // Add vertical spacing between rows
  },
});
