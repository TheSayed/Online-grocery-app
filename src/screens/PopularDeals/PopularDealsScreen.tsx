import { View, Text, FlatList, StyleSheet } from "react-native";
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
          containerStyle={styles.listStyle}
        />
      </View>
    </View>
  );
};

export default PopularDealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingTop: verticalScale(32),
  },
  listStyle: {
    width: "100%", // Ensure the FlatList takes the full width of its container
  },
  subContainer: {
    width: "88%",
  },
});
