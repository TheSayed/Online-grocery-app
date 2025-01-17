import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { images } from "../../../assets/Images";
import { colors } from "../../constants/colors";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.emptyCart} />
      </View>
      <Text style={styles.loadingText}>Your cart is empty.</Text>
      <TouchableOpacity style={styles.totalCostContainer}>
        <Text style={styles.totalCost}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(22),
  },
  imageContainer: {
    height: verticalScale(374),
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  loadingText: {
    fontSize: moderateScale(20),
    color: colors.secondary,
    textAlign: "center",
    fontFamily: "bold700",
    marginTop: verticalScale(16),
  },
  totalCostContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(130),
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
});
