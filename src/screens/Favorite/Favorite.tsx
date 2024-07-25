import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
