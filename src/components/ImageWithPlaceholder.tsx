import { Image, StyleSheet } from "react-native";
import { useState } from "react";
import { images } from "../../assets/Images";

type Props = {
  image: string;
};

const transformImageUrl = (url: string): string => {
  const oldBaseUrl = "https://placehold.co/400x400?text=";
  const newBaseUrl = "https://via.placeholder.com/400?text=";
  if (url.startsWith(oldBaseUrl)) {
    return url.replace(oldBaseUrl, newBaseUrl);
  }
  return url;
};

const ImageWithPlaceholder = ({ image }: Props) => {
  const [imageUri, setImageUri] = useState(transformImageUrl(image));

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

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#09c",
  },
});

export default ImageWithPlaceholder;
