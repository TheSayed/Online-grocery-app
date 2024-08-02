import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/colors";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../../navigators/route";
import { useSelector } from "react-redux";
import { icons } from "../../../assets/icons";
import { RootState } from "../../../store/store";

const LocationName = () => {
  const cityName = useSelector((state: RootState) => state.location.cityName);
  const navigation = useNavigation<NavigationProp>();

  const handleNavigation = () => {
    navigation.navigate(ScreenNames.LocationPicker);
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleNavigation}>
        <Image source={icons.location} style={styles.icon} />
        <Text style={styles.title}>{cityName || "Select your location"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(32),
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 100,
  },
  title: {
    fontSize: moderateScale(25),
    fontFamily: "bold700",
    textAlign: "center",
    color: colors.primary,
  },
  icon: {
    marginRight: scale(10),
  },
});

export default LocationName;
