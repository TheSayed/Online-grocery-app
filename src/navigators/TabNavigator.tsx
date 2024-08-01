import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "../screens/Explore/Explore";
import { ScreenNames } from "./route";
import Cart from "../screens/Cart/Cart";
import Favorite from "../screens/Favorite/Favorite";
import Account from "../screens/Account/Account";
import { icons } from "../../assets/icons";
import BottomBarIcon from "../components/BottomBarIcon";
import { colors } from "../constants/colors";
import { moderateScale, scale, verticalScale } from "../utilis/scaling";
import { Platform, StyleSheet } from "react-native";
import AppHeader from "../components/AppHeader";
import ShopStackNavigator from "./ShopStackNavigator";

const Tab = createBottomTabNavigator();

const options = {
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.secondary,
  tabBarLabelStyle: {
    fontFamily: "medium500",
    fontSize: moderateScale(10),
  },
  cardStyle: { backgroundColor: colors.white },
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: styles.tabBar }}>
      <Tab.Screen
        name={ScreenNames.Shop}
        component={ShopStackNavigator}
        options={{
          ...options,
          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.shop} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Explore}
        component={Explore}
        options={{
          ...options,

          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.explore} />
          ),
          header: () => <AppHeader title={ScreenNames.Explore} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Cart}
        component={Cart}
        options={{
          ...options,
          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.cart} />
          ),
          header: () => <AppHeader title={ScreenNames.Cart} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Favorite}
        component={Favorite}
        options={{
          ...options,
          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.heart} />
          ),
          header: () => <AppHeader title={ScreenNames.Favorite} />,
        }}
      />
      <Tab.Screen
        name={ScreenNames.Account}
        component={Account}
        options={{
          ...options,
          tabBarIcon: ({ focused }) => (
            <BottomBarIcon focused={focused} icon={icons.account} />
          ),
          header: () => <AppHeader title={ScreenNames.Account} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    borderTopEndRadius: scale(25),
    borderTopLeftRadius: scale(25),
    borderColor: colors.grey,
    height: verticalScale(63),
    padding: 0,
    borderWidth: scale(1),
    borderBottomWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: colors.shadow,
        shadowOffset: {
          width: 0,
          height: verticalScale(-4),
        },
        shadowOpacity: 0.3,
        shadowRadius: scale(10),
      },
      android: {
        elevation: scale(10),
      },
    }),
  },
});
