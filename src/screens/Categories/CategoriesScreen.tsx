import { View, StyleSheet } from "react-native";
import React from "react";
import Categories from "./Categories";
import { verticalScale } from "../../utilis/scaling";
import { colors } from "../../constants/colors";

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Categories
          horizontal={false}
          numColumns={2}
          listKey="Categories-flatlist-numColumns-1"
        />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: verticalScale(32),
  },
  subContainer: {
    width: "88%",
    backgroundColor: colors.white,
  },
});
