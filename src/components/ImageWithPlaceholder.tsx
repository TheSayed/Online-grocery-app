import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import { images } from "../../assets/Images";

type Props = {
  image: string;
};

const ImageWithPlaceholder = ({ image }: Props) => {
  const [imageUri, setImageUri] = useState(image);
  const handleError = () => {
    setImageUri(images.placeholderImage);
  };
  return (
    <Image
      style={styles.image}
      source={{ uri: imageUri }}
      onError={handleError}
    />
  );
};

export default ImageWithPlaceholder;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
