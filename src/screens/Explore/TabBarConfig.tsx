import { TabBar, TabBarProps } from "react-native-tab-view";
import { colors } from "../../constants/colors";
import React from "react";
import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../utilis/scaling";

interface Route {
  key: string;
  title: string;
}

const TabBarConfig = (props: TabBarProps<Route>) => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
      scrollEnabled
    />
  );
};

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: colors.primary,
    height: scale(4),
    borderTopEndRadius: moderateScale(29),
    borderTopStartRadius: moderateScale(29),
  },
  tabBar: {
    marginBottom: verticalScale(21),
    backgroundColor: colors.white,
    padding: 0,
    height: verticalScale(60),
  },
  label: {
    color: colors.secondary,
    fontFamily: "regular400",
    fontSize: moderateScale(20),
    lineHeight: verticalScale(24),
    textTransform: "none",
  },
});

export default TabBarConfig;
