import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { colors } from "../../constants/colors";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";
import { icons } from "../../../assets/icons";
import ImageWithPlaceholder from "../../components/ImageWithPlaceholder";

const CartItem: React.FC<CartItemProps> = ({
  onIncrement,
  onDecrement,
  onRemove,
  name,
  price,
  quantity,
  image,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <ImageWithPlaceholder image={image} />
      </View>
      <View style={styles.cremintation}>
        <Text style={styles.productName}>{name}</Text>
        <View style={styles.subCremintation}>
          <TouchableOpacity
            style={styles.operator}
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            onPress={onIncrement}
          >
            <Text style={styles.operatorText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.operatorText}>{quantity}</Text>
          <TouchableOpacity
            style={styles.operator}
            hitSlop={{ bottom: 20, left: 20, right: 20, top: 20 }}
            onPress={onDecrement}
          >
            <Text style={styles.operatorText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.priceAndIconContainer}>
        <TouchableOpacity style={styles.trashIcon} onPress={onRemove}>
          <Image style={styles.icon} source={icons.trash} />
        </TouchableOpacity>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    height: verticalScale(90),
    paddingHorizontal: scale(16),
  },
  imageContainer: {
    width: "33%",
    height: "100%",
  },
  productName: {
    fontSize: moderateScale(18),
    fontFamily: "bold700",
    color: colors.secondary,
    lineHeight: verticalScale(21),
  },
  productPrice: {
    fontSize: moderateScale(18),
    fontFamily: "regular400",
    color: colors.secondary,
    marginVertical: 4,
  },
  operatorText: {
    fontSize: moderateScale(18),
    color: colors.secondary,
  },
  cremintation: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: scale(21),
  },
  subCremintation: {
    width: scale(98),
    height: verticalScale(30),
    flexDirection: "row",
    backgroundColor: colors.greyBackground,
    borderRadius: scale(30),
    justifyContent: "space-between",
    alignItems: "center",
  },
  trashIcon: {
    width: scale(24),
    height: scale(24),
    borderRadius: scale(24),
    backgroundColor: colors.tomato,
    justifyContent: "center",
    alignItems: "center",
    gap: scale(10),
  },
  operator: {
    backgroundColor: colors.white,
    width: scale(24),
    height: scale(24),
    borderRadius: scale(24),
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: scale(3),
    shadowColor: colors.operatorShadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: scale(2),
    elevation: scale(2),
  },
  priceAndIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  icon: {
    width: scale(14),
    height: scale(14),
  },
});

export default CartItem;
