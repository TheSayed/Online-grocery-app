import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TabNavigator from "./src/navigators/TabNavigator";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { fonts } from "./assets/fonts/fonts";
import { colors } from "./src/constants/colors";
import { SafeAreaView } from "react-native";
import SplashScreenComponent from "./src/components/SplashScreenComponent";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [fontsLoaded] = useFonts({ ...fonts });

  const [isReady, setIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
        setIsReady(true);
      }, 3000);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!isReady) {
    return <SplashScreenComponent />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={colors.white} style="dark" />
          <SafeAreaView style={{ flex: 1 }}>
            <TabNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
