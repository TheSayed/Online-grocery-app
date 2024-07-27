import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";
type ProductCardProps = Product & {
  width?: number;
  height?: number;
};

const ProductCard = ({
  name,
  unit,
  price,
  image,
  width = 150, // Default value if width is not provided
  height = 189, // Default value if height is not provided
}: ProductCardProps) => {
  return (
    <View
      style={[
        styles.container,
        { width: scale(width), height: verticalScale(height) },
      ]}
    >
      <View style={styles.subContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: image }} // Replace with your image source
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productUnit}>{unit}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.productPrice}>$ {price} </Text>
            <TouchableOpacity style={styles.addButton}>
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
    backgroundColor: "#09c", // Use a color from your constants
    borderRadius: 20,
    marginBottom: verticalScale(17),
    marginRight: scale(15),
    ...Platform.select({
      ios: {
        shadowColor: "rgba(196, 196, 196, 1)", // Shadow color for iOS
        shadowOffset: { width: 0, height: 0 }, // No offset
        shadowOpacity: 1, // Full opacity
        shadowRadius: 13, // Blur radius
      },
      android: {
        elevation: 8, // Elevation for Android
      },
    }),
    overflow: "hidden", // Ensure that shadow doesn't spill out
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
    backgroundColor: colors.greyBackground,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
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
    color: "white",
    lineHeight: verticalScale(24),
  },
  addButton: {
    backgroundColor: colors.green,
    width: scale(29),
    height: scale(29), // Use a color from your constants
    borderRadius: 29,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: scale(18),
    color: "white",
  },
});
