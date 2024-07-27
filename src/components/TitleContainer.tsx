import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { ScreenNames } from "../navigators/route";

type Props = {
  primaryTitle: string;
  secondaryTitle: string;
  marginTop: number;
};

const TitleContainer = ({ primaryTitle, secondaryTitle, marginTop }: Props) => {
  const navigation = useNavigation();
  const handleSeeAll = () => {
    if (primaryTitle === "Categories") {
      navigation.navigate(ScreenNames.Categories);
    } else if (primaryTitle === "Popular Deals") {
      navigation.navigate(ScreenNames.PopularDeals);
    }
  };
  return (
    <View style={[styles.container, { marginTop: verticalScale(marginTop) }]}>
      <Text style={styles.title}>{primaryTitle}</Text>
      <TouchableOpacity onPress={handleSeeAll}>
        <Text style={styles.seeAll}>{secondaryTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(32),
  },
  title: {
    fontSize: moderateScale(22),
    color: colors.secondary,
    fontFamily: "bold700",
    lineHeight: verticalScale(27),
  },
  seeAll: {
    fontSize: moderateScale(18),
    color: colors.primary,
    fontFamily: "regular400",
  },
});
