import { Image, ImageSourcePropType } from "react-native";
import React from "react";
import { colors } from "../constants/colors";

type Props = {
  focused: boolean;
  icon: ImageSourcePropType | undefined;
};

const BottomBarIcon = ({ focused, icon }: Props) => {
  return (
    <Image
      source={icon}
      style={{
        tintColor: focused ? colors.primary : colors.secondary,
      }}
    />
  );
};

export default BottomBarIcon;
