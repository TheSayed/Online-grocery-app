import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: verticalScale(48),
    marginTop: verticalScale(18),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.greyBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    opacity: 0.9,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: colors.black,
  },
});

export default Search;
