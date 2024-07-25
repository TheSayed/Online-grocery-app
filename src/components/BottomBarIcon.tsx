import { Image, ImageSourcePropType } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import { scale, verticalScale } from "../utilis/scaling";

type Props = {
  focused: boolean;
  icon: ImageSourcePropType | undefined;
};

const BottomBarIcon = ({ focused, icon }: Props) => {
  return (
    <Image
      resizeMode="contain"
      source={icon}
      style={{
        tintColor: focused ? colors.primary : colors.secondary,
        width: scale(25),
        height: verticalScale(31),
        marginTop: scale(3),
      }}
    />
  );
};

export default BottomBarIcon;
