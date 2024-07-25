import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text>Explore</Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
