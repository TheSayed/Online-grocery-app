import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";
import { scale, verticalScale } from "../../utilis/scaling";
import ImageWithPlaceholder from "../../components/ImageWithPlaceholder";

const CategoryCard = ({ image, name }: Category) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <ImageWithPlaceholder image={image} />
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingRight: scale(10),
  },
  imageContainer: {
    width: scale(100),
    height: scale(100),
    marginRight: 10,
    borderRadius: scale(50),
    overflow: "hidden",
  },
  categoryName: {
    color: colors.secondary,
    fontFamily: "regular400",
    fontSize: scale(15),
    marginTop: verticalScale(17),
  },
});

export default CategoryCard;
