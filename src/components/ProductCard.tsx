import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";
import { addToCart } from "../screens/Cart/cartSlice";
import ImageWithPlaceholder from "./ImageWithPlaceholder";

const ProductCard = ({ id, name, unit, price, image }: Product) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, name, unit, price, image };
    dispatch(addToCart(product));
  };

  return (
    <View style={styles.container}>
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
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: { width: scale(2), height: verticalScale(2) },
        shadowOpacity: 0.5,
        shadowRadius: scale(10),
      },
      android: {
        elevation: scale(8),
      },
    }),
    width: scale(164),
    height: verticalScale(194),
  },
  subContainer: {
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(16),
    paddingLeft: scale(15),
    paddingRight: scale(18),
  },
  imageContainer: {
    width: "100%",
    height: verticalScale(85),
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    marginVertical: verticalScale(5),
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
    paddingTop: verticalScale(1),
  },
  productPrice: {
    fontSize: scale(20),
    fontFamily: "bold700",
    color: colors.primary,
    marginTop: verticalScale(1),
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
