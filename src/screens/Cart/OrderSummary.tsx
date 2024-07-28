import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants/colors";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";

const OrderSummary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const getSubTotalCost = () => {
    return cartItems.reduce((total: number, item: CartItemType) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  const taxPercentage = 3.28 / 100;

  const getTax = () => {
    return getSubTotalCost() * taxPercentage;
  };

  const delivery = 5;

  const getTotalCost = () => {
    const subTotal = getSubTotalCost();
    const tax = subTotal * taxPercentage;
    return subTotal + tax + delivery;
  };
  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.costsContainer}>
          <Text style={styles.boldText}>Order Summary</Text>
        </View>
        <View style={styles.costsContainer}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>${getSubTotalCost().toFixed(2)}</Text>
        </View>
        <View style={styles.costsContainer}>
          <Text style={styles.text}>Tax</Text>
          <Text style={styles.text}>${getTax().toFixed(2)}</Text>
        </View>
        <View style={styles.costsContainer}>
          <Text style={styles.text}>Delivery Price</Text>
          <Text style={styles.text}>${delivery}</Text>
        </View>
        <View style={styles.separator} />
        <View style={[styles.costsContainer, { marginTop: verticalScale(10) }]}>
          <Text style={styles.boldText}>Total</Text>
          <Text style={styles.boldText}>${getTotalCost().toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.totalCostContainer}>
        <Text style={styles.totalCost}>
          CheckOut ${getTotalCost().toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(16),
  },
  summaryContainer: {
    backgroundColor: colors.creamy,
    height: verticalScale(209),
    borderRadius: scale(20),
  },
  totalCostContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(17),
    backgroundColor: colors.primary,
    height: verticalScale(50),
    width: "auto",
    borderRadius: scale(30),
  },
  totalCost: {
    fontSize: moderateScale(18),
    fontFamily: "bold700",
    color: colors.white,
  },
  boldText: {
    fontFamily: "bold700",
    fontSize: moderateScale(18),
    lineHeight: verticalScale(22),
    color: colors.secondary,
  },
  text: {
    fontFamily: "regular400",
    fontSize: moderateScale(18),
    lineHeight: verticalScale(22),
    color: colors.secondary,
  },
  separator: {
    height: scale(1),
    width: "100%",
    backgroundColor: colors.greySeparator,
    marginTop: verticalScale(8),
  },
  costsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: scale(16),
    marginTop: verticalScale(15),
  },
});
