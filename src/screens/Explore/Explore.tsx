import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { colors } from "../../constants/colors";

import { scale } from "../../utilis/scaling";
import TabBarConfig from "./TabBarConfig";
import TabViewLogic from "./TabViewLogic";
import { TabView } from "react-native-tab-view";
import Search from "../../components/Search";

const Explore = () => {
  const layout = useWindowDimensions();

  const tabViewProps = TabViewLogic(layout.width);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 0}
    >
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.productsContainer}>
        <TabView
          navigationState={tabViewProps.navigationState}
          renderScene={tabViewProps.renderScene}
          onIndexChange={tabViewProps.onIndexChange}
          initialLayout={tabViewProps.initialLayout}
          renderTabBar={(props) => <TabBarConfig {...props} />}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  productsContainer: {
    flex: 1,
    width: "100%",
  },
  search: {
    paddingHorizontal: scale(16),
  },
});

export default Explore;
