import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabNavigator from "./src/navigators/TabNavigator";
import { Provider } from "react-redux";
import store from "./store/store";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { fonts } from "./assets/fonts/fonts";

export default function App() {
  const [fontsLoaded] = useFonts({
    ...fonts,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
