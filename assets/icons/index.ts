import { ImageRequireSource } from "react-native";

interface Icons {
  shop: ImageRequireSource;
  explore: ImageRequireSource;
  cart: ImageRequireSource;
  favorite: ImageRequireSource;
  account: ImageRequireSource;
  location: ImageRequireSource;
  backArrow: ImageRequireSource;
  trash: ImageRequireSource;
}

export const icons: Icons = {
  shop: require("./shop.png"),
  explore: require("./explore.png"),
  cart: require("./cart.png"),
  favorite: require("./favorite.png"),
  account: require("./account.png"),
  location: require("./location.png"),
  backArrow: require("./backArrow.png"),
  trash: require("./trash-03.png"),
};
