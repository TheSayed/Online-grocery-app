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
                  id={item.id}
                  name={item.name}
                  unit={item.unit}
                  price={item.price}
                  image={item.image}
                  height={189}
                  width={164}
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
    justifyContent: "center",
    marginBottom: verticalScale(10),
  },
});
