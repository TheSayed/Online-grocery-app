import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import BackArrow from "./BackArrow";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { colors } from "../constants/colors";

type Props = {
  title: string;
  showBackArrow?: boolean;
};

const AppHeader = ({ title, showBackArrow = true }: Props) => {
  const statusBarHeight: number | undefined =
    Platform.OS === "android" ? StatusBar.currentHeight : 0;

  console.log(statusBarHeight, Platform.OS);
  return (
    <>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View
            style={[
              styles.icon,
              {
                top: statusBarHeight
                  ? verticalScale(10) + statusBarHeight
                  : verticalScale(10),
              },
            ]}
          >
            {showBackArrow && <BackArrow />}
          </View>
          <Text
            style={[
              styles.title,
              {
                marginTop: statusBarHeight
                  ? verticalScale(30) + statusBarHeight
                  : verticalScale(30),
              },
            ]}
          >
            {title}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    backgroundColor: colors.white,
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: moderateScale(25),
    fontFamily: "bold700",
    flex: 1,
    textAlign: "center",
    color: colors.primary,
  },
  icon: {
    position: "absolute",
    left: scale(20),
  },
});

export default AppHeader;
