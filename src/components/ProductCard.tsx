import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";
import { addToCart } from "../screens/Cart/cartSlice";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

type ProductCardProps = Product & {
  width?: number;
  height?: number;
};

const ProductCard = ({
  id,
  name,
  unit,
  price,
  image,
  width = 150,
  height = 189,
}: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, name, unit, price, image };
    dispatch(addToCart(product));
  };

  return (
    <View
      style={[
        styles.container,
        { width: scale(width), height: verticalScale(height) },
      ]}
    >
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <ImageWithPlaceholder image={image} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productUnit}>1 {unit}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>${price} </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleAddToCart}
              hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginBottom: verticalScale(17),
    marginRight: scale(15),
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 3,
  },
  subContainer: {
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(16),
    paddingLeft: scale(15),
    paddingRight: scale(18),
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    paddingVertical: verticalScale(5),
    height: verticalScale(60),
  },
  productName: {
    fontSize: moderateScale(15),
    fontFamily: "bold700",
    color: colors.secondary,
    marginVertical: verticalScale(2),
  },
  productUnit: {
    fontSize: moderateScale(12),
    fontFamily: "regular400",
    color: colors.lightGrey,
    marginTop: verticalScale(1),
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: verticalScale(4),
  },
  productPrice: {
    fontSize: scale(20),
    fontFamily: "bold700",
    color: colors.primary,
    lineHeight: verticalScale(24),
  },
  addButton: {
    backgroundColor: colors.green,
    width: scale(29),
    height: scale(29),
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: scale(18),
    color: "white",
  },
});
