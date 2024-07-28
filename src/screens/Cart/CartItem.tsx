import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../../constants/colors";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";
import { icons } from "../../../assets/icons";

const CartItem: React.FC<CartItemProps> = React.memo(
  ({ onIncrement, onDecrement, onRemove, name, price, quantity, image }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} />
        </View>
        <View style={styles.cremintation}>
          <Text style={styles.productName}>{name}</Text>
          <View style={styles.subCremintation}>
            <TouchableOpacity style={styles.operator} onPress={onIncrement}>
              <Text style={styles.operatorText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.operatorText}>{quantity}</Text>
            <TouchableOpacity style={styles.operator} onPress={onDecrement}>
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
    5;
  }
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    width: "100%",
    height: verticalScale(90),
    paddingHorizontal: scale(16),
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#09c",
  },
  image: {
    resizeMode: "contain",
  },
  productName: {
    fontSize: moderateScale(18),
    fontFamily: "bold700",
    color: colors.secondary,
    lineHeight: verticalScale(21),
  },
  productPrice: {
    fontSize: 18,
    fontFamily: "regular400",
    color: colors.secondary,
    marginVertical: 4,
  },
  operatorText: {
    fontSize: 16,
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
    shadowRadius: 2,
    elevation: 2,
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
