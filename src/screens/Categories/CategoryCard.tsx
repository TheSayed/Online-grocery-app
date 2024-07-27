import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";

const CategoryCard = ({ image, name }: Category) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
        onError={(error) =>
          console.log("Image load error:", error.nativeEvent.error)
        }
      />
      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingRight: scale(10),
  },
  image: {
    width: scale(100),
    height: scale(100),
    marginRight: 10,
    borderRadius: 100,
    backgroundColor: "#09c",
  },
  categoryName: {
    color: colors.secondary,
    fontFamily: "regular400",
    fontSize: moderateScale(15),
    marginTop: verticalScale(17),
  },
});
