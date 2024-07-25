import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Shop from "../screens/Shop/Shop";
import Explore from "../screens/Explore/Explore";
import { ScreenNames } from "./route";
import Cart from "../screens/Cart/Cart";
import Favorite from "../screens/Favorite/Favorite";
import Account from "../screens/Account/Account";
import { Image, Text, View } from "react-native";
import { icons } from "../../assets/icons";
import BottomBarIcon from "../components/BottomBarIcon";
import { colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

const options = {
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.secondary,
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenNames.Shop}
        component={Shop}
        options={{
          ...options,
          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.shop} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Explore}
        component={Explore}
        options={{
          ...options,

          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.shop} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Cart}
        component={Cart}
        options={{
          ...options,

          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.shop} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Favorite}
        component={Favorite}
        options={{
          ...options,

          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.shop} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.Account}
        component={Account}
        options={{
          ...options,
          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.shop} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
