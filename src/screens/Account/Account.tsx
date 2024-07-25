import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants/colors";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
