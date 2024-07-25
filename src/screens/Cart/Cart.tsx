import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
