import { ImageRequireSource } from "react-native";

interface Icons {
  shop: ImageRequireSource;
  explore: ImageRequireSource;
  cart: ImageRequireSource;
  heart: ImageRequireSource;
  account: ImageRequireSource;
  location: ImageRequireSource;
  backArrow: ImageRequireSource;
  trash: ImageRequireSource;
  search: ImageRequireSource;
}

export const icons: Icons = {
  shop: require("./shop.png"),
  explore: require("./explore.png"),
  cart: require("./cart.png"),
  heart: require("./heart.png"),
  account: require("./account.png"),
  location: require("./location.png"),
  backArrow: require("./backArrow.png"),
  trash: require("./trash-03.png"),
  search: require("./search-03.png"),
};
