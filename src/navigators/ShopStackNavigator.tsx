import { createStackNavigator } from "@react-navigation/stack";
import PopularDealsScreen from "../screens/PopularDeals/PopularDealsScreen";
import CategoriesScreen from "../screens/Categories/CategoriesScreen";
import { ScreenNames } from "./route";
import Shop from "../screens/Shop/Shop";
import AppHeader from "../components/AppHeader";
import SearchScreen from "../screens/Search/SearchScreen";
import LocationName from "../screens/Location/LocationName";
import LocationPicker from "../screens/Location/LocationPicker";

const Stack = createStackNavigator();

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Shop}>
      <Stack.Screen
        name={"Shop Screen"}
        component={Shop}
        options={{
          header: () => <LocationName />,
        }}
      />
      <Stack.Screen
        name={ScreenNames.Categories}
        component={CategoriesScreen}
        options={{
          header: () => (
            <AppHeader title={ScreenNames.Categories} showBackArrow={true} />
          ),
        }}
      />
      <Stack.Screen
        name={ScreenNames.PopularDeals}
        component={PopularDealsScreen}
        options={{
          header: () => (
            <AppHeader title={ScreenNames.PopularDeals} showBackArrow={true} />
          ),
        }}
      />
      <Stack.Screen
        name={ScreenNames.Search}
        component={SearchScreen}
        options={{
          header: () => (
            <AppHeader title={ScreenNames.Search} showBackArrow={true} />
          ),
        }}
      />
      <Stack.Screen
        name={ScreenNames.LocationPicker}
        component={LocationPicker}
        options={{
          header: () => (
            <AppHeader
              title={ScreenNames.LocationPicker}
              showBackArrow={true}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default ShopStackNavigator;
