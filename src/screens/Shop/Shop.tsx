import { View, Text } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";

const Shop = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  console.log(data);
  return (
    <View>
      <Text>Shop</Text>
    </View>
  );
};

export default Shop;
