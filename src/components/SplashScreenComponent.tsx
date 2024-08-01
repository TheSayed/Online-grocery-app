import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../constants/colors";
import { images } from "../../assets/Images";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";

const SplashScreenComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.splashScreen} />
      </View>
      <Text style={styles.title}>Relax and shop</Text>
      <Text style={styles.description}>
        Shop online and get groceries delivered from stores to your home in as
        fast as 1 hour .
      </Text>
    </View>
  );
};

export default SplashScreenComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(22),
  },
  imageContainer: {
    height: verticalScale(374),
    marginTop: verticalScale(132),
  },
  image: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.secondary,
    textAlign: "center",
    fontFamily: "bold700",
    lineHeight: verticalScale(24),
    marginTop: verticalScale(33),
  },
  description: {
    fontSize: moderateScale(16),
    color: colors.secondary,
    textAlign: "center",
    fontFamily: "regular400",
    marginTop: verticalScale(16),
    paddingHorizontal: scale(22),
  },
});
