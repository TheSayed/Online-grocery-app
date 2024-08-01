import { View, StyleSheet } from "react-native";
import React from "react";
import { verticalScale } from "../../utilis/scaling";
import PopularDeals from "./PopularDeals";
import { colors } from "../../constants/colors";

const PopularDealsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <PopularDeals
          horizontal={false}
          numColumns={2}
          listKey="PopularDeals-flatlist-numColumns-1"
        />
      </View>
    </View>
  );
};

export default PopularDealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: verticalScale(32),
  },
  subContainer: {
    width: "100%",
  },
});
