import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { icons } from "../../assets/icons";
import { colors } from "../constants/colors";
import { scale, verticalScale } from "../utilis/scaling";

const BackArrow: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image source={icons.backArrow} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: scale(9),
    height: verticalScale(14),
    tintColor: colors.primary,
  },
});

export default BackArrow;
