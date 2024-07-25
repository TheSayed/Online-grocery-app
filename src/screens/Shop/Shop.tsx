import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useGetProductsQuery } from "../../services/groceryApi";
import { colors } from "../../constants/colors";

const Shop = () => {
  const { data, isLoading, error } = useGetProductsQuery({});
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>Shop</Text>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
